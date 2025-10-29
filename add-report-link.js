import fs from "fs";
import path from "path";

const htmlPath = path.resolve("playwright-report/index.html");
const pdfLink = `<div style="margin: 20px; text-align:center;">
  <a href="../reports/GoTrade_Test_Report.pdf" target="_blank" style="font-size:18px; font-weight:bold; color:#007bff;">
    📄 View Detailed GoTrade Test Report (PDF)
  </a>
</div>`;

try {
  let html = fs.readFileSync(htmlPath, "utf8");

  // Insert link right after <body> tag
  if (html.includes("<body>")) {
    html = html.replace("<body>", `<body>${pdfLink}`);
  } else {
    html = `${pdfLink}\n${html}`;
  }

  fs.writeFileSync(htmlPath, html, "utf8");
  console.log("PDF link added successfully to Playwright HTML report!");
} catch (err) {
  console.error(" Error adding PDF link:", err);
}
