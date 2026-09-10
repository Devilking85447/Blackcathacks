const fs = require('fs');
console.log(' SITEMAP FIXING...');

const DOMAIN = 'https://theredeye.in';
let urls = [
  { loc: `${DOMAIN}/`, lastmod: new Date().toISOString().split('T')[0] },
  { loc: `${DOMAIN}/about.html`, lastmod: '2026-05-10' },
  { loc: `${DOMAIN}/contact.html`, lastmod: '2026-05-10' },
];

// Tools add karo
if(fs.existsSync('tools')){
  fs.readdirSync('tools').filter(f=>f.endsWith('.html')).forEach(f=>{
    if(f.toLowerCase().startsWith('google')) return;
    urls.push({ loc: `${DOMAIN}/tools/${f}`, lastmod: new Date().toISOString().split('T')[0] });
  });
}

// Root tools
fs.readdirSync('.').filter(f=>f.endsWith('.html') && !['index.html','404.html'].includes(f) && !f.startsWith('google')).forEach(f=>{
  urls.push({ loc: `${DOMAIN}/${f}`, lastmod: new Date().toISOString().split('T')[0] });
});

// Blogs
if(fs.existsSync('blogs')){
  fs.readdirSync('blogs').filter(f=>f.endsWith('.html')).forEach(f=>{
    urls.push({ loc: `${DOMAIN}/blogs/${f}`, lastmod: new Date().toISOString().split('T')[0] });
  });
}

let xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
urls.forEach(u=>{
  xml += `  <url>\n    <loc>${u.loc}</
