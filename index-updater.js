const fs = require('fs');
console.log("🔄 INDEX UPDATER STARTED...");

let index = fs.readFileSync('index.html','utf8');

let exclude = ['index.html','about.html','privacy.html','contact.html','disclaimer.html','link-joiner.html','404.html'];
let toolsHTML = "";

try{
  let files = [];
  if(fs.existsSync('tools')){
    files = fs.readdirSync('tools').filter(f=> f.endsWith('.html') && !f.toLowerCase().startsWith('google') && !f.includes('98d00') );
  }
  // Root ke tools filter with google check
  let rootFiles = fs.readdirSync('./').filter(f=> 
    f.endsWith('.html') && 
    !exclude.includes(f) && 
    !f.toLowerCase().startsWith('google') &&
    !f.toLowerCase().includes('verification') &&
    f.length < 40 // google wala bahut lamba hota hai
  ).slice(0,3);

  let allFiles = [...files.sort().reverse().slice(0,10), ...rootFiles];
  
  allFiles.forEach(f=>{
    let path = fs.existsSync('tools/'+f) ? `tools/${f}` : f;
    // double check file name
    if(f.toLowerCase().includes('google')) return;
    let name = f.replace('.html','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
    toolsHTML += `<a href="${path}" class="auto-item">🚀 ${name} <span style="float:right">→</span></a>\n`;
  });
}catch(e){console.log(e)}

if(!toolsHTML) toolsHTML = `<div style="text-align:center;color:#555;padding:15px;font-size:11px">🚀 Roz naya tool yaha aayega</div>`;

let blogsHTML = "";
try{
  if(fs.existsSync('blogs')){
    let files = fs.readdirSync('blogs').filter(f=>f.endsWith('.html') && !f.toLowerCase().startsWith('google')).sort().reverse().slice(0,10);
    files.forEach(f=>{
      let name = f.replace('.html','').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      blogsHTML += `<a href="blogs/${f}" class="auto-item" style="border-color:#0ff;color:#0ff">📖 ${name} <span style="float:right">→</span></a>\n`;
    });
  }
}catch(e){console.log(e)}

if(!blogsHTML) blogsHTML = `<div style="text-align:center;color:#555;padding:15px;font-size:11px">📚 Roz naya blog yaha aayega</div>`;

index = index.replace(/<!-- AUTO-TOOLS -->[\s\S]*?<!-- END-AUTO-TOOLS -->/, `<!-- AUTO-TOOLS -->\n${toolsHTML}\n<!-- END-AUTO-TOOLS -->`);
index = index.replace(/<!-- AUTO-BLOGS -->[\s\S]*?<!-- END-AUTO-BLOGS -->/, `<!-- AUTO-BLOGS -->\n${blogsHTML}\n<!-- END-AUTO-BLOGS -->`);

fs.writeFileSync('index.html', index);
console.log("✅ INDEX UPDATED - GOOGLE FILE REMOVED");
