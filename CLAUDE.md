@AGENTS.md

## PDF 생성 방법 (RESUME.md → PDF)

puppeteer를 사용하여 마크다운을 PDF로 변환합니다.

### 1. HTML 생성
```bash
pandoc RESUME.md -o /tmp/resume.html --standalone -V pagetitle="신희제 이력서" --css=/dev/null
```

### 2. PDF 생성 스크립트 (`/tmp/generate-pdf.js`)
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('file:///tmp/resume.html', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: process.argv[2] || '신희제_프론트엔드개발자_이력서.pdf',
    format: 'A4',
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
    printBackground: true
  });
  await browser.close();
  console.log('PDF generated successfully!');
})();
```

### 3. 실행
```bash
# puppeteer 설치 (최초 1회)
cd /tmp && npm init -y && npm install puppeteer

# PDF 생성
node /tmp/generate-pdf.js "/Users/ezpmp/IdeaProjects/pro/신희제_프론트엔드개발자_이력서.pdf"
```
