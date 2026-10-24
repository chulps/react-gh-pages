process.env.NODE_ENV='production';
process.env.PUBLIC_URL='/react-gh-pages';
require('@babel/register')({presets:[['@babel/preset-env',{targets:{node:'current'}}],'@babel/preset-react'],ignore:[/node_modules/]});
const fs=require('fs');
const path=require('path');
for(const extension of ['.css','.scss','.sass'])require.extensions[extension]=()=>{};
for(const extension of ['.svg','.png','.jpg','.jpeg','.webp','.gif','.woff','.woff2','.mp4','.pdf'])require.extensions[extension]=(module,filename)=>{module.exports=`${process.env.PUBLIC_URL}/${path.relative('public',filename)}`;};
const iconMacroPath=require.resolve('@fortawesome/fontawesome-svg-core/import.macro');
const solidIcons=require('@fortawesome/free-solid-svg-icons');
require.cache[iconMacroPath]={id:iconMacroPath,filename:iconMacroPath,loaded:true,exports:{solid(name){const key=`fa${name.charAt(0).toUpperCase()}${name.slice(1)}`;return solidIcons[key]||solidIcons.faCircle;}}};
const React=require('react');
const {renderToPipeableStream}=require('react-dom/server');
const {MemoryRouter}=require('react-router-dom');
const {Writable}=require('stream');
const {Helmet}=require('react-helmet');
const {Portfolio,indexableRoutes}=require('../src/App');
const {LanguageProvider}=require('../src/redesign/i18n');

function renderRoute(route,lang){
  return new Promise((resolve,reject)=>{
    const chunks=[];
    let stream;
    const output=new Writable({write(chunk,_encoding,callback){chunks.push(Buffer.from(chunk));callback();}});
    output.on('finish',()=>resolve(Buffer.concat(chunks).toString()));
    output.on('error',reject);
    stream=renderToPipeableStream(React.createElement(MemoryRouter,{initialEntries:[route]},React.createElement(LanguageProvider,{initialLang:lang},React.createElement(Portfolio))),{
      onAllReady(){stream.pipe(output);},
      onShellError:reject,
      onError(error){console.error(`Prerender warning for ${route}:`,error.message);},
    });
  });
}

function applyHelmet(template,markup,lang){
  const helmet=Helmet.renderStatic();
  const head=[helmet.title.toString(),helmet.meta.toString(),helmet.link.toString()].join('');
  return template
    .replace(/<title[^>]*data-react-helmet="true"[^>]*>[\s\S]*?<\/title>/,'')
    .replace(/<meta[^>]*data-react-helmet="true"[^>]*\/?\s*>/g,'')
    .replace(/<link[^>]*data-react-helmet="true"[^>]*\/?\s*>/g,'')
    .replace('<html lang="en">',`<html lang="${lang}">`)
    .replace('</head>',`${head}</head>`)
    .replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
}

function sitemapXml(routes){
  const base='https://chulps.github.io/react-gh-pages';
  const entries=routes.map(route=>{
    const suffix=route.replace(/^\//,'');
    const en=`${base}/${suffix}`;
    const ja=`${base}/ja/${suffix}`;
    return `<url><loc>${en}</loc><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ja" href="${ja}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/></url><url><loc>${ja}</loc><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ja" href="${ja}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/></url>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>\n`;
}

async function main(){
  const template=fs.readFileSync('build/index.html','utf8');
  const uniqueRoutes=[...new Set(indexableRoutes)];
  for(const lang of ['en','ja']){
    for(const route of uniqueRoutes){
      const markup=await renderRoute(route,lang);
      const html=applyHelmet(template,markup,lang);
      const outputRoute=`${lang==='ja'?'/ja':''}${route}`;
      const output=outputRoute==='/'?'build/index.html':path.join('build',outputRoute.replace(/^\//,''),'index.html');
      fs.mkdirSync(path.dirname(output),{recursive:true});
      fs.writeFileSync(output,html);
    }
  }
  if(!fs.readFileSync('build/index.html','utf8').includes('What needs fixing?'))throw Error('Homepage prerender did not produce expected content');
  const sitemap=sitemapXml(uniqueRoutes);
  fs.writeFileSync('public/sitemap.xml',sitemap);
  fs.writeFileSync('build/sitemap.xml',sitemap);
  console.log(`Prerendered ${uniqueRoutes.length*2} crawlable English and Japanese pages and generated sitemap.xml.`);
}

main().catch(error=>{console.error(error);process.exitCode=1;});
