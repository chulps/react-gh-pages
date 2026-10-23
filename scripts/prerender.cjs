process.env.NODE_ENV='production';
// Keep the landing page's real content in the initial HTML for crawlers and no-JS visitors.
require('@babel/register')({presets:[['@babel/preset-env',{targets:{node:'current'}}],'@babel/preset-react'],ignore:[/node_modules/]});
require.extensions['.css']=()=>{};
const fs=require('fs');
const React=require('react');
const {renderToString}=require('react-dom/server');
const {MemoryRouter}=require('react-router-dom');
const {Portfolio}=require('../src/App');
process.env.PUBLIC_URL='/react-gh-pages';
const markup=renderToString(React.createElement(MemoryRouter,null,React.createElement(Portfolio)));
const path='build/index.html';
const html=fs.readFileSync(path,'utf8').replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
if(!html.includes('What needs fixing?'))throw Error('Homepage prerender did not produce expected content');
fs.writeFileSync(path,html);
console.log('Homepage prerendered: services, local project, work, FAQs and contact links.');
