// theredeye - REAL PROTECTOR v1.0
// Job: Scan all 41 tools and tell which one is broken

const fs = require('fs');
const path = require('path');

console.log("🛡️ PROTECTOR SCAN STARTED...");

const report = {
  date: new Date().toISOString(),
  totalTools: 0,
  working: 0,
  broken: [],
  missingFiles: []
};

// 1. Check critical files for AdSense
const criticalFiles = ['index.html', 'team.html', 'about.html', 'privacy.html', 'contact.html'];
console.log("\n[1] Checking Critical Files...");
criticalFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file} - OK`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    report.missingFiles.push(file);
  }
});

// 2. Scan tools folder
console.log("\n[2] Scanning Tools...");
let toolsPath = path.join(__dirname, 'tools');
if (!fs.existsSync(toolsPath)) {
  toolsPath = __dirname; // if tools are in root
}

const files = fs.readdirSync(toolsPath);
const toolFiles = files.filter(f => f.endsWith('.html') && f!== 'index.html' && f!== 'team.html');

report.totalTools = toolFiles.length;
console.log(`Found ${toolFiles.length} tools`);

toolFiles.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(toolsPath, file), 'utf8');
    if (content.length < 500) {
      console.log(`⚠️ ${file} - TOO SMALL (${content.length} bytes) - Might be broken`);
      report.broken.push({ file, reason: 'File too small' });
    } else if (!content.includes('<html') &&!content.includes('<!DOCTYPE')) {
      console.log(`⚠️ ${file} - NO HTML TAG - Might be broken`);
      report.broken.push({ file, reason: 'No HTML tag' });
    } else {
      console.log(`✅ ${file} - WORKING (${content.length} bytes)`);
      report.working++;
    }
  } catch (e) {
    console.log(`❌ ${file} - ERROR: ${e.message}`);
    report.broken.push({ file, reason: e.message });
  }
});

// 3. Generate Final Report
console.log("\n========== PROTECTOR REPORT ==========");
console.log(`Date: ${report.date}`);
console.log(`Total Tools Scanned: ${report.totalTools}`);
console.log(`Working: ${report.working}`);
console.log(`Broken: ${report.broken.length}`);
console.log(`Missing Critical: ${report.missingFiles.length}`);

if (report.broken.length > 0) {
  console.log("\n❌ BROKEN TOOLS LIST:");
  report.broken.forEach(b => console.log(` - ${b.file}: ${b.reason}`));
}

if (report.missingFiles.length > 0) {
  console.log("\n❌ MISSING FILES:");
  report.missingFiles.forEach(f => console.log(` - ${f}`));
}

if (report.broken.length === 0 && report.missingFiles.length === 0) {
  console.log("\n🎉 ALL SYSTEMS SECURE - NO ISSUES FOUND!");
}

fs.writeFileSync('protector-report.json', JSON.stringify(report, null, 2));
console.log("\n📄 Report saved: protector-report.json");

if (report.broken.length === 0) {
  console.log("\n✅ PROTECTOR STATUS: SECURE");
} else {
  console.log(`\n⚠️ PROTECTOR STATUS: ${report.broken.length} ISSUES FOUND - Fix them Boss!`);
}
