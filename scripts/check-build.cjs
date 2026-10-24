const fs=require('fs');const assert=require('assert');const {JSDOM}=require('jsdom');
const html=fs.readFileSync('build/index.html','utf8');const d=new JSDOM(html).window.document;
assert.equal(d.querySelectorAll('h1').length,1,'one initial H1');
assert(d.querySelector('h1').textContent.includes('Better websites.'));
assert.equal(d.querySelectorAll('meta[name="description"]').length,1,'one description');
assert.equal(d.querySelectorAll('link[rel="canonical"]').length,1,'one canonical');
assert.equal(d.querySelector('meta[name="google-site-verification"]')?.content,'O1az7jf9L1SdWLLYXlvNcHh6OaqxrGDUbE8r9Z1bv4Y','Search Console verification tag');
assert.equal(d.querySelector('html').lang,'en');
assert(d.querySelector('main'));
for(const el of d.querySelectorAll('script[src],link[rel="stylesheet"],link[rel="preload"],img')){
 const value=el.getAttribute('src')||el.getAttribute('href');if(!value||value.startsWith('data:')||value==='https://www.googletagmanager.com/gtag/js?id=G-WV7JW98XHS')continue;
 assert(value.startsWith('/react-gh-pages/'),`asset has repository base path: ${value}`);
 assert(fs.existsSync('build/'+value.replace('/react-gh-pages/','')),`asset exists: ${value}`);
}
for(const name of ['404.html','robots.txt','sitemap.xml','images/social-card.png'])assert(fs.existsSync('build/'+name),name);
const sitemap=fs.readFileSync('build/sitemap.xml','utf8');const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
assert.equal(urls.length,32,'16 crawlable pages in both languages');
assert(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
for(const url of urls){
 assert(!url.includes('#'),'sitemap URLs must not rely on fragments');
 const route=new URL(url).pathname.replace(/^\/react-gh-pages\/?/,'/');
 const japanese=route==='/ja'||route.startsWith('/ja/');
 const cleanRoute=japanese?route.replace(/^\/ja(?=\/|$)/,'')||'/':route;
 const htmlPath=route==='/'||route==='/ja/'?'build/'+(japanese?'ja/':'')+'index.html':`build/${route.replace(/^\//,'').replace(/\/$/,'')}/index.html`;
 assert(fs.existsSync(htmlPath),`prerendered route exists: ${route}`);
 const page=new JSDOM(fs.readFileSync(htmlPath,'utf8')).window.document;
 assert.equal(page.documentElement.lang,japanese?'ja':'en',`document language: ${route}`);
 assert(page.querySelector('main')?.textContent.trim().length>100,`route has prerendered content: ${route}`);
 assert(page.querySelector('meta[name="description"]')?.content?.length>18,`route has a useful description: ${route}`);
 assert.equal(page.querySelector('link[rel="canonical"]')?.href,url,`route canonical: ${route}`);
 assert.equal(page.querySelectorAll('link[rel="alternate"][hreflang="en"]').length,1,`English alternate: ${route}`);
 assert.equal(page.querySelectorAll('link[rel="alternate"][hreflang="ja"]').length,1,`Japanese alternate: ${route}`);
 const language=url.includes('/ja/')?'ja':'en';
 assert(urls.includes(page.querySelector(`link[rel="alternate"][hreflang="${language==='ja'?'en':'ja'}"]`).href),'language counterpart exists in sitemap');
 if(cleanRoute==='/design-process/') assert(!page.title.includes('Foundry'),'design process metadata is not inherited from Foundry');
 if(cleanRoute==='/contact/') assert(!page.querySelector('meta[name="description"]').content.includes('custom business software in Sapporo') || page.title.startsWith('Contact'),'contact page has page-specific metadata');
}
assert(!html.includes('geolocation-db.com'));
assert(!html.includes('googleoptimize.com'));
assert(html.includes('G-WV7JW98XHS'));
assert(html.includes('send_page_view:!1'));
assert(d.querySelector('a[href*="mailto:charles.howard.jp@gmail.com"]'));
JSON.parse(d.querySelector('script[type="application/ld+json"]').textContent);
console.log('PASS: bilingual prerendering, reciprocal hreflang, crawlable sitemap, page metadata, structured data, contact and deployment assets.');
