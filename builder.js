const fs = require('fs');
console.log("✍️ WRITER STARTED - Dynamic Mode");

const BLOGS = [
  { id: "how-to-check-upi-fraud", title: "How to Check UPI Fraud in 2025 - 5 Easy Steps" },
  { id: "ifsc-code-kaise-nikale", title: "IFSC Code Kaise Nikale - Bank IFSC Finder Guide" },
  { id: "pan-card-fake-or-real", title: "PAN Card Fake or Real Kaise Check Kare" },
  { id: "email-dark-web-leak-check", title: "Your Email Leaked in Dark Web? Check Now" },
  { id: "fake-link-ko-pehchane", title: "Fake Link Ko Kaise Pehchane - Phishing Se Bache" },
  { id: "strong-password-kaise-banaye", title: "Strong Password Kaise Banaye - 100% Safe Trick" },
  { id: "qr-code-scam-se-bache", title: "QR Code Scam Se Kaise Bache - UPI Fraud Alert" },
  { id: "otp-fraud-kaise-hota-hai", title: "OTP Fraud Kaise Hota Hai - Full Guide 2025" },
  { id: "loan-app-fake-list", title: "Fake Loan Apps List RBI - Check Before Download" },
  { id: "aadhaar-card-safe-kaise-share-kare", title: "Aadhaar Card Safe Kaise Share Kare" }
];

let nextBlog = null;
for(let b of BLOGS){
  if(!fs.existsSync(`${b.id}.html`) && !fs.existsSync(`blogs/${b.id}.html`)){
    nextBlog = b; break;
  }
}
if(!nextBlog) nextBlog = BLOGS[Math.floor(Math.random()*BLOGS.length)];

const html = `<!DOCTYPE html><html><head>
<title>${nextBlog.title} - theredeye</title>
<meta charset="utf-8"><meta name="viewport" content="width=device-width">
<meta name="description" content="${nextBlog.title} - Read full guide on theredeye">
<style>body{font-family:system-ui;background:#0a0a0a;color:#e0e0e0;padding:15px;line-height:1.6} .box{max-width:700px;margin:auto;background:#111;padding:25px;border-radius:12px;border:1px solid #333} h1{color:#00ff88} h2{color:#fff} .cta{background:#00ff88;color:#000;padding:12px;text-align:center;border-radius:8px;display:block;text-decoration:none;font-weight:bold;margin:20px 0}</style>
</head><body><div class="box">
<h1>${nextBlog.title}</h1>
<p><small>Updated: ${new Date().toLocaleDateString('en-IN')} | theredeye Security Team</small></p>
<p>India me har din 1000+ log cyber fraud ka shikar hote hain. Is blog me hum seekhenge ki kaise aap safe reh sakte hain.</p>
<h2>1. Fraud Kaise Hota Hai?</h2><p>Scammers fake links, UPI IDs aur apps ka use karke logon ko fasate hain. Lottery, prize ya KYC update ke naam pe message bhejte hain.</p>
<h2>2. Kaise Bache?</h2><p>1) Kabhi bhi unknown link pe click na kare<br>2) UPI PIN kisi ko na de<br>3) Official app se hi check kare<br>4) theredeye ke free tools use kare</p>
<h2>3. Free Tool Use Kare</h2><p>Hamara free tool aapko turant batayega ki link ya UPI safe hai ya nahi.</p>
<a class="cta" href="/">🛡️ Free Security Tool Try Kare</a>
<h2>Conclusion</h2><p>Cyber safe rehna bahut zaruri hai. Is article ko share kare taaki aur log bhi safe rahe.</p>
<p><small>Disclaimer: This is educational content. Always verify from official sources.</small></p>
</div></body></html>`;

if(!fs.existsSync('blogs')) fs.mkdirSync('blogs');
fs.writeFileSync(`blogs/${nextBlog.id}.html`, html);
fs.writeFileSync(`${nextBlog.id}.html`, html);
fs.writeFileSync('writer-report.json', JSON.stringify({blog: nextBlog.id, date: new Date().toISOString(), status:"success"}, null, 2));
console.log("✅ Blog created: "+nextBlog.id);
