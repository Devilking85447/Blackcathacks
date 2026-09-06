const fs = require('fs');
console.log("🛠️ BUILDER STARTED");

const toolHTML = `<!DOCTYPE html><html><head><title>UPI Fraud Checker - BlackCatHacks</title><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style>body{font-family:Arial;background:#0a0a0a;color:#fff;padding:20px} .box{background:#1a1a1a;padding:20px;border-radius:10px;max-width:600px;margin:auto} input{width:100%;padding:12px;margin:10px 0;border-radius:5px;border:none} button{background:#00ff88;color:#000;padding:12px 20px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;width:100%} .result{margin-top:15px;padding:15px;background:#222;border-radius:5px}</style></head><body><div class="box"><h1>🛡️ UPI Fraud Checker</h1><p>Check if UPI ID is safe or fraud</p><input type="text" id="upi" placeholder="Enter UPI ID e.g. name@upi"><button onclick="check()">Check Now</button><div id="res" class="result" style="display:none"></div></div><script>function check(){let v=document.getElementById('upi').value;let r=document.getElementById('res');r.style.display='block';if(!v.includes('@')){r.innerHTML='❌ Invalid UPI ID';return} if(v.includes('lottery')||v.includes('prize')){r.innerHTML='🚨 FRAUD ALERT! This looks like scam UPI';} else {r.innerHTML='✅ UPI format looks OK. Always verify before paying!';}}</script></body></html>`;

if(!fs.existsSync('tools')) fs.mkdirSync('tools');
fs.writeFileSync('tools/upi-fraud-checker.html', toolHTML);
fs.writeFileSync('upi-fraud-checker.html', toolHTML);
fs.writeFileSync('builder-report.json', JSON.stringify({tool:"upi-fraud-checker", date: new Date().toISOString(), status:"success"}, null, 2));
console.log("✅ Tool created: upi-fraud-checker.html");
