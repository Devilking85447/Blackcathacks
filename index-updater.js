const fs = require('fs');
console.log("🔄 INDEX UPDATER STARTED...");

let index = fs.readFileSync('index.html','utf8');

// TOOLS READ
let toolsHTML = "";
try{
  if(fs.existsSync('tools')){
    let files = fs.readdirSync('tools').filter(f=>f.endsWith('.html')).sort().reverse().slice(0,10);
    files.forEach(f=>{
      let name = f.replace('.html','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      toolsHTML += `<a href="tools/${f}" class="auto-item">🛡️ ${name} <span style="float:right">→</span></a>\n`;
    });
  }
  if(fs.existsSync('./')){
    let rootTools = fs.readdirSync('./').filter(f=>f.endsWith('.html') && !['index.html','about.html','privacy.html','contact.html','disclaimer.html','link-joiner.html'].includes(f)).slice(0,5);
    rootTools.forEach(f=>{
      let name = f.replace('.html','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      toolsHTML += `<a href="${f}" class="auto-item">🚀 ${name} <span style="float:right">→</span></a>\n`;
    });
  }
}catch(e){console.log("Tools read error",e)}

if(!toolsHTML) toolsHTML = `<div style="text-align:center;color:#888;padding:10px">New tools coming soon...</div>`;

// BLOGS READ
let blogsHTML = "";
try{
  if(fs.existsSync('blogs')){
    let files = fs.readdirSync('blogs').filter(f=>f.endsWith('.html')).sort().reverse().slice(0,10);
    files.forEach(f=>{
      let name = f.replace('.html','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      blogsHTML += `<a href="blogs/${f}" class="auto-item" style="border-color:#0ff;color:#0ff">📖 ${name} <span style="float:right">→</span></a>\n`;
    });
  }
}catch(e){console.log("Blogs read error",e)}

if(!blogsHTML) blogsHTML = `<div style="text-align:center;color:#888;padding:10px">New blogs coming soon...</div>`;

// REPLACE IN INDEX
index = index.replace(/<!-- AUTO-TOOLS -->[\s\S]*?<!-- END-AUTO-TOOLS -->/, `<!-- AUTO-TOOLS -->\n${toolsHTML}\n<!-- END-AUTO-TOOLS -->`);
index = index.replace(/<!-- AUTO-BLOGS -->[\s\S]*?<!-- END-AUTO-BLOGS -->/, `<!-- AUTO-BLOGS -->\n${blogsHTML}\n<!-- END-AUTO-BLOGS -->`);

fs.writeFileSync('index.html', index);
console.log(`✅ INDEX UPDATED: ${toolsHTML.split('auto-item').length-1} tools, ${blogsHTML.split('auto-item').length-1} blogs`);
