const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const path = require('path');
const fs = require('fs');

(async () => {
  const filePath = 'file:///C:/Users/agust/OneDrive/PURAQUA/Estrategia/presentacion-competencia.html';
  const outputPath = path.join(__dirname, 'presentacion-competencia.pdf');

  console.log('Iniciando navegador...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  console.log('Cargando presentación...');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

  // Esperar fuentes de Google Fonts
  await new Promise(r => setTimeout(r, 3000));

  // Desactivar TODAS las animaciones/transiciones y forzar estado final
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        animation: none !important;
        transition: none !important;
      }
      .animate, .delay-1, .delay-2, .delay-3, .delay-4, .delay-5 {
        opacity: 1 !important;
        transform: none !important;
      }
    `
  });

  // Ocultar controles de navegación
  await page.evaluate(() => {
    const counter = document.getElementById('counter');
    const nav = document.querySelector('.nav-hint');
    if (counter) counter.style.display = 'none';
    if (nav) nav.style.display = 'none';
    document.querySelectorAll('.slide-counter, .nav-buttons, [class*="nav"]').forEach(el => {
      el.style.display = 'none';
    });
  });

  const totalSlides = await page.evaluate(() =>
    document.querySelectorAll('.slide').length
  );
  console.log(`Total de slides: ${totalSlides}`);

  // Capturar cada slide como PNG de alta resolución
  const screenshots = [];
  for (let i = 0; i < totalSlides; i++) {
    await page.evaluate((index) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, j) => {
        slide.style.transition = 'none';
        slide.style.opacity = j === index ? '1' : '0';
        slide.style.transform = j === index ? 'translateX(0)' : 'translateX(40px)';
        slide.classList.toggle('active', j === index);
      });
    }, i);

    await new Promise(r => setTimeout(r, 200));
    const screenshot = await page.screenshot({ type: 'png' });
    screenshots.push(screenshot);
    console.log(`  Slide ${i + 1}/${totalSlides} capturado`);
  }

  await browser.close();

  // Crear PDF directamente con pdf-lib (sin re-renderizar)
  console.log('Armando PDF con pdf-lib...');
  const pdfDoc = await PDFDocument.create();

  // Tamaño de página 16:9 en puntos (1920x1080 mapeado)
  const pageWidth = 1920 * 0.5;  // 960 pt
  const pageHeight = 1080 * 0.5; // 540 pt

  for (let i = 0; i < screenshots.length; i++) {
    const pngImage = await pdfDoc.embedPng(screenshots[i]);
    const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);

  console.log(`\nPDF generado: ${outputPath}`);
})();
