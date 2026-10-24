// Derive web-sized copies of original portfolio assets; originals stay in the repository.
const fs=require('fs'),path=require('path'),sharp=require('sharp');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
(async()=>{const files=walk('src').filter(f=>f.endsWith('.js')&&!f.includes('redesign'));let count=0,oldBytes=0,newBytes=0;const done=new Map();
 for(const file of files){let text=fs.readFileSync(file,'utf8');const replacements=[];
 for(const m of text.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+\.(?:png|jpe?g))["']/gi)){
 const full=path.resolve(path.dirname(file),m[2]);if(!fs.existsSync(full))continue;
 let target=done.get(full);if(!target){target=full.replace(/\.(png|jpe?g)$/i,'.webp');await sharp(full).resize({width:1600,withoutEnlargement:true}).webp({quality:88}).toFile(target);done.set(full,target);oldBytes+=fs.statSync(full).size;newBytes+=fs.statSync(target).size;count++;}
 replacements.push([m[2],m[2].replace(/\.(png|jpe?g)$/i,'.webp')]);
 }
 for(const [a,b] of replacements)text=text.split(a).join(b);
 text=text.replace(/<img\b([^>]*?)\/>/gs,(whole,attrs)=>attrs.includes('loading=')?whole:`<img loading="lazy"${attrs}/>`);
 fs.writeFileSync(file,text);
 }
 console.log(`${count} image derivatives: ${(oldBytes/1e6).toFixed(1)} MB to ${(newBytes/1e6).toFixed(1)} MB. Originals preserved.`);
})();
