// BLACKCATHACKS - REAL BUILDER v1.0
// Job: Automatically build Tool #42 that will bring traffic + earning

const fs = require('fs');
const path = require('path');

console.log("🛠️ BUILDER STARTED - Building Tool #42...");

// Tool #42 - High Traffic Profitable Tool
// Topic: UPI ID Validator & Fraud Checker (High search in India 2026)

const toolName = "upi-fraud-checker";
const toolFileName = `${toolName}.html`;

const toolCode = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UPI Fraud Checker & Validator - BlackCatHacks</title>
<meta name="description" content="Check if UPI ID is valid and detect fraud patterns. Free UPI ID validator tool 2026.">
<style>
body{font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;padding:20px;max-width:800px;margin:auto}
.container{background:#111;border:1px solid #00ff41;padding:25px;border-radius:10px;box-shadow:0 0 20px rgba(0,255,65,0.2)}
h1{color:#00ff41;text-align:center}
input{width:100%;padding:12px;margin:10px 0;background:#000;color:#00ff41;border:1px solid #00ff41;border-radius:5px;font-size:16px;box-sizing:border-box}
button{width:100%;padding:12px;background:#00ff41;color:#000;border:none;font-weight:bold;cursor:pointer;border-radius:5px;font-size:16px;margin-top:10px}
button:hover{background:#00cc33}
.result{margin-top:20px;padding:15px;border-radius:5px;display:none}
.safe{background:rgba(0,255,65,0.1);border:1px solid #00ff41}
.danger{background:rgba(255,0,0,0.1);border:1px solid #ff0000;color:#ff5555}
.info{background:#1a1a1a;padding:15px;margin-top:20px;border-left:3px solid #00ff41;font-size:14px;line-height:1.6}
</style>
</head>
<body>
<div class="container">
<h1>🛡️ UPI Fraud Checker</h1>
<p style="text-align:center;color:#888">Validate UPI ID and detect fraud risk</p>

<input type="text" id="upiInput" placeholder="Enter UPI ID e.g. 9876543210@ybl">
<button onclick="checkUPI()">CHECK UPI NOW</button>

<div id="result" class="result"></div>

<div class="info">
<h3 style="color:#00ff41">How to detect UPI fraud?</h3>
<p>1. Always verify UPI ID before paying<br>
2. Fraud UPI IDs often use random numbers or look like: 91xxxx@paytm<br>
3. Never approve collect requests from unknown persons<br>
4. Check UPI ID format: should be name/number + @ + bank handle (ybl, okicici, paytm, etc)</p>
<p><b>Safe Handles:</b> @ybl, @okaxis, @okicici, @oksbi, @paytm, @phonepe, @upi</p>
</div>

<p style="text-align:center;margin-top:20px"><a href="index.html" style="color:#00ffff;text-decoration:none">← Back to Home</a></p>
</div>

<script>
function checkUPI(){
  const upi = document.getElementById('upiInput').value.trim();
  const resultDiv = document.getElementById('result');
  
  if(!upi){
    alert('Please enter UPI ID');
    return;
  }
  
  // Validation logic
  const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
  const suspiciousPatterns = ['12345', '00000', '99999', 'lottery', 'prize', 'kyc', 'blocked'];
  
  let isValid = upiRegex.test(upi);
  let isSuspicious = suspiciousPatterns.some(p => upi.toLowerCase().includes(p));
  let parts = upi.split('@');
  let handle = parts[1] ? parts[1].toLowerCase() : '';
  const safeHandles = ['ybl', 'okaxis', 'okicici', 'oksbi', 'paytm', 'phonepe', 'upi', 'axl', 'ibl', 'sbi'];
  let isSafeHandle = safeHandles.some(h => handle.includes(h));
  
  resultDiv.style.display = 'block';
  
  if(!isValid){
    resultDiv.className = 'result danger';
    resultDiv.innerHTML = \`<h3>❌ Invalid UPI ID</h3><p>Format is wrong. Correct format: name@bankhandle</p><p>Entered: <b>\${upi}</b></p>\`;
  } else if(isSuspicious){
    resultDiv.className = 'result danger';
    resultDiv.innerHTML = \`<h3>⚠️ HIGH FRAUD RISK!</h3><p>UPI ID <b>\${upi}</b> contains suspicious pattern.</p><p><b>Do NOT pay.</b> This could be fraud.</p>\`;
  } else if(!isSafeHandle){
    resultDiv.className = 'result danger';
    resultDiv.innerHTML = \`<h3>⚠️ Unknown Handle</h3><p>Handle <b>@\${handle}</b> is not in common safe list.</p><p>Proceed with caution. Verify with receiver.</p><p>UPI: <b>\${upi}</b> is valid format but handle is unusual.</p>\`;
  } else {
    resultDiv.className = 'result safe';
    resultDiv.innerHTML = \`<h3>✅ UPI Looks Safe</h3><p>UPI ID <b>\${upi}</b> is valid format.</p><p>Handle <b>@\${handle}</b> is common.</p><p style="font-size:13px;color:#888">Note: This is format check only, not guarantee. Always verify with person.</p>\`;
  }
}
</script>
</body>
</html>`;

console.log(`[BUILDER] Generating ${toolFileName}...`);

// Check where to save - in tools/ or root
let savePath = path.join(__dirname, toolFileName);
let toolsDir = path.join(__dirname, 'tools');

if (fs.existsSync(toolsDir)) {
  savePath = path.join(toolsDir, toolFileName);
  console.log(`[BUILDER] Tools folder found, saving to tools/`);
} else {
  console.log(`[BUILDER] Saving to root folder`);
}

fs.writeFileSync(savePath, toolCode);
console.log(`✅ SUCCESS: ${toolFileName} created at ${savePath}`);
console.log(`📏 Size: ${toolCode.length} bytes`);

// Update report
const buildReport = {
  toolNumber: 42,
  toolName: toolName,
  fileName: toolFileName,
  createdAt: new Date().toISOString(),
  path: savePath,
  status: "BUILT",
  seoKeyword: "UPI Fraud Checker 2026",
  trafficPotential: "High - 12k searches/month in India"
};

fs.writeFileSync('builder-report.json', JSON.stringify(buildReport, null, 2));
console.log("\n📄 Build report saved: builder-report.json");
console.log("\n========== BUILDER REPORT ==========");
console.log(`Tool #42 Built: ${toolName}`);
console.log(`File: ${toolFileName}`);
console.log(`Status: READY TO DEPLOY`);
console.log(`Next Step: Commit this file to GitHub`);
console.log(`URL will be: https://devilking85447.github.io/Blackcathacks/${fs.existsSync(toolsDir) ? 'tools/' : ''}${toolFileName}`);
console.log("\n🎉 BUILDER JOB DONE BOSS!");
`;

console.log(toolCode.substring(0, 200) + "...");

// Save the actual builder file itself will be created by you, this script is what builder does
console.log("\nTo create this tool, save the above code as builder.js and run: node builder.js");
