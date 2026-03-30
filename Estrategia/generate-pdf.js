const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const HTML_PATH = 'file:///C:/Users/agust/OneDrive/PURAQUA/Estrategia/presentacion-competencia.html';
const OUTPUT_PDF = path.join('C:\\Users\\agust\\OneDrive\\PURAQUA\\Estrategia', 'Puraqua-Analisis-Competencia-2026.pdf');

(async () => {
  console.log('Iniciando generación de PDF...');

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'networkidle0', timeout: 30000 });

  // Esperar que Chart.js renderice
  await new Promise(r => setTimeout(r, 3000));

  const totalSlides = await page.evaluate(() =>
    document.querySelectorAll('.slide').length
  );
  console.log(`Total de slides: ${totalSlides}`);

  // Capturar cada slide como imagen
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'puraqua-'));
  const imgPaths = [];

  for (let i = 0; i < totalSlides; i++) {
    await page.evaluate((idx) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(s => s.classList.remove('active'));
      slides[idx].classList.add('active');
    }, i);

    // Dar tiempo a la animación
    await new Promise(r => setTimeout(r, 350));

    const imgPath = path.join(tmpDir, `slide-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: imgPath, type: 'png' });
    imgPaths.push(imgPath);
    process.stdout.write(`  Slide ${i + 1}/${totalSlides}\r`);
  }

  console.log('\nGenerando PDF...');

  // Construir HTML con todas las imágenes para convertir a PDF
  const imagesHtml = imgPaths.map(p =>
    `<div class="page"><img src="file:///${p.replace(/\\/g, '/')}" /></div>`
  ).join('\n');

  const combinedHtml = `<!DOCTYPE html><html><head><style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: 1280px 720px; margin: 0; }
    body { background: #000; }
    .page { width: 1280px; height: 720px; page-break-after: always; break-after: page; overflow: hidden; }
    img { width: 1280px; height: 720px; display: block; }
  </style></head><body>${imagesHtml}</body></html>`;

  const tmpHtml = path.join(tmpDir, 'combined.html');
  fs.writeFileSync(tmpHtml, combinedHtml);

  const page2 = await browser.newPage();
  await page2.goto(`file:///${tmpHtml.replace(/\\/g, '/')}`, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));

  await page2.pdf({
    path: OUTPUT_PDF,
    width: '1280px',
    height: '720px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  // Limpieza
  imgPaths.forEach(p => { try { fs.unlinkSync(p); } catch(e) {} });
  try { fs.unlinkSync(tmpHtml); fs.rmdirSync(tmpDir); } catch(e) {}

  const size = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(1);
  console.log(`\nPDF generado: ${OUTPUT_PDF} (${size} MB)`);
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
