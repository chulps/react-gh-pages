const fs=require('fs');const assert=require('assert');const {JSDOM}=require('jsdom');
const html=fs.readFileSync('build/index.html','utf8');const d=new JSDOM(html).window.document;
assert.equal(d.querySelectorAll('h1').length,1,'one initial H1');
assert(d.querySelector('h1').textContent.includes('Better websites.'));
assert.equal(d.querySelectorAll('meta[name="description"]').length,1,'one description');
assert.equal(d.querySelectorAll('link[rel="canonical"]').length,1,'one canonical');
assert.equal(d.querySelector('html').lang,'en');
assert(d.querySelector('main'));
for(const el of d.querySelectorAll('script[src],link[rel="stylesheet"],link[rel="preload"],img')){
 const value=el.getAttribute('src')||el.getAttribute('href');if(!value||value.startsWith('data:'))continue;
 assert(value.startsWith('/react-gh-pages/'),`asset has repository base path: ${value}`);
 assert(fs.existsSync('build/'+value.replace('/react-gh-pages/','')),`asset exists: ${value}`);
}
for(const name of ['404.html','robots.txt','sitemap.xml','images/social-card.png'])assert(fs.existsSync('build/'+name),name);
assert(!html.includes('geolocation-db.com'));
assert(!html.includes('googleoptimize.com'));
assert(d.querySelector('a[href*="mailto:charles.howard.jp@google.com"]'));
JSON.parse(d.querySelector('script[type="application/ld+json"]').textContent);
console.log('PASS: initial content, metadata, structured data, contact, deployment paths and local assets.');
