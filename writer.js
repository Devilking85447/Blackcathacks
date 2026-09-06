const fs = require('fs');
console.log("✍️ WRITER STARTED - Dynamic Mode");

const BLOGS = [
  { id: "how-to-check-upi-fraud-2025", title: "How to Check UPI Fraud in 2025 - 5 Easy Steps to Stay Safe", kw: "UPI Fraud" },
  { id: "ifsc-code-kaise-nikale-guide", title: "IFSC Code Kaise Nikale - Bank IFSC Finder Full Guide", kw: "IFSC Code" },
  { id: "pan-card-fake-or-real-check", title: "PAN Card Fake or Real Kaise Check Kare - Online Trick", kw: "PAN Check" },
  { id: "email-dark-web-leak-hai-kya", title: "Your Email Dark Web Me Leak Hai Kya? Aise Check Kare", kw: "Dark Web Leak" },
  { id: "fake-link-ko-kaise-pehchane", title: "Fake Link Ko Kaise Pehchane - Phishing Se Bache 2025", kw: "Fake Link" },
  { id: "strong-password-kaise-banaye", title: "Strong Password Kaise Banaye - Hacker Bhi Fail Ho Jaye", kw: "Password" },
  { id: "qr-code-scam-se-kaise-bache", title: "QR Code Scam Se Kaise Bache - UPI QR Fraud Alert", kw: "QR Scam" },
  { id: "otp-fraud-kaise-hota-hai", title: "OTP Fraud Kaise Hota Hai? Isse Bachne Ke 7 Tarike", kw: "OTP Fraud" },
  { id: "fake-loan-app-list-rbi-2025", title: "Fake Loan Apps List RBI 2025 - Download Karne Se Pehle Check Kare", kw: "Loan App Fraud" },
  { id: "aadhaar-card-safe-share-trick", title: "Aadhaar Card Safe Kaise Share Kare - Masked Aadhaar Trick", kw: "Aadhaar Safe" },
  { id: "kyc-fraud-se-kaise-bache", title: "KYC Fraud Se Kaise Bache - SBI HDFC Ke Naam Par Scam Alert", kw: "KYC Fraud" },
  { id: "whatsapp-hacking-se-bache", title: "WhatsApp Hacking Se Kaise Bache - 2025 Security Guide", kw: "WhatsApp Hack" }
];

let nextBlog = null;
for (let b of BLOGS) {
  if (!fs.existsSync(`blogs/${b.id}.html`) && !fs.existsSync(`${b.id}.html`) && !fs.existsSync(`${b.id}/index.html`)) {
    nextBlog = b;
    break;
  }
}
if (!nextBlog) {
  nextBlog = BLOGS[Math.floor(Math.random() * BLOGS.length)];
  nextBlog.id = nextBlog.id + "-" + Date.now();
}

console.log(`Building Blog: ${nextBlog.title}`);

const html = `<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${nextBlog.title} - BlackCatHacks</title>
<meta name="description" content="${nextBlog.title} - Full guide by BlackCatHacks. Learn how to stay safe from ${nextBlog.kw} fraud.">
<meta name="keywords" content="${nextBlog.kw}, cyber security, fraud check, BlackCatHacks">
<style>
body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0a;color:#e0e0e0;padding:12px;margin:0;line-height:1.7}
.container{max-width:720px;margin:auto;background:#111;padding:22px;border-radius:14px;border:1px solid #2a2a2a}
h1{color:#00ff88;font-size:26px;line-height:1.3} h2{color:#fff;margin-top:25px;border-left:4px solid #00ff88;padding-left:10px}
a{color:#00ff88} .cta{background:#00ff88;color:#000;padding:14px 20px;text-align:center;border-radius:10px;display:block;text-decoration:none;font-weight:bold;margin:22px 0;font-size:16px}
.meta{color:#888;font-size:13px} .box{background:#1a1a1a;padding:15px;border-radius:10px;border:1px solid #333;margin:15px 0}
ul{padding-left:20px} li{margin-bottom:8px}
</style>
</head>
<body>
<div class="container">
<p class="meta">BlackCatHacks | Security Guide | Updated: ${new Date().toLocaleDateString('en-IN')}</p>
<h1>${nextBlog.title}</h1>

<p>India me roz 2000+ log <b>${nextBlog.kw}</b> fraud ka shikar bante hain. Scammers naye-naye tarike se logon ko loot rahe hain. Is guide me hum aapko step-by-step batayenge kaise aap 100% safe reh sakte hain.</p>

<div class="box">
<b>🔍 Quick Summary:</b><br>
✔️ ${nextBlog.kw} kya hota hai<br>
✔️ Fraud kaise hota hai<br>
✔️ Bachne ke 5 tarike<br>
✔️ Free tool se kaise check kare
</div>

<h2>1. ${nextBlog.kw} Fraud Kya Hai?</h2>
<p>Fraudsters fake UPI ID, fake links, ya fake apps bana kar logon ko fasate hain. Wo lottery, job offer, ya KYC update ke naam par message bhejte hain aur aapse OTP ya paise maangte hain.</p>

<h2>2. Real Case Example</h2>
<p>Haal hi me Shimla ke ek user ko message aaya "Aapka S
