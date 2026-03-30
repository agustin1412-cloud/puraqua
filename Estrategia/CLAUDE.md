# Estrategia Puraqua — Planificación y Análisis

## Alcance

Esta carpeta contiene planes de marketing, análisis de competencia, métricas de rendimiento y documentos estratégicos.

## Tipos de Documentos

- **Planes de marketing:** Calendarios, campañas, objetivos por período
- **Análisis de competencia:** Comparativas de precio, presencia digital, diferenciales
- **Métricas:** Seguimiento de resultados (tráfico web, conversiones, engagement)
- **Investigación:** Tendencias del mercado de purificación de agua en Uruguay

## Criterios para Decisiones Estratégicas

- Priorizar acciones de alto impacto y bajo costo (bootstrapping)
- El canal de venta principal es WhatsApp — toda estrategia debe dirigir tráfico ahí
- Medir antes de escalar — no invertir en canales sin datos previos

## Herramientas de Investigación Disponibles

- **Firecrawl CLI** — instalado globalmente y autenticado. Usar para scrapear sitios de competidores, precios publicados, fichas de producto y contenido de mercado.
  - Comando: `firecrawl scrape <url> --only-main-content`
  - Ideal para: análisis de competencia, benchmarking de precios, auditoría de presencia digital de otros jugadores del mercado uruguayo (osmosis inversa, purificadores de agua).
  - Combinar con agentes Haiku en paralelo para investigaciones multi-fuente rápidas.

---

## Buenas Prácticas Descubiertas

1. **HTML a PDF con Puppeteer + pdf-lib:** Para convertir presentaciones HTML a PDF de alta calidad: (1) Puppeteer captura screenshots PNG a 2x (`deviceScaleFactor: 2`), (2) `pdf-lib` embebe los PNGs directo en el PDF sin re-renderizar. Nunca usar el método intermedio de base64 en HTML + `page.pdf()` — pierde resolución drásticamente.

2. **Desactivar animaciones CSS antes de capturar screenshots:** Inyectar `animation: none !important; transition: none !important; opacity: 1 !important;` vía `page.addStyleTag()` antes de capturar. Si no, los elementos con `fadeInUp`, `delay-N` o cualquier animación se capturan a mitad de transición con opacidad parcial, resultando en texto ilegible. Script de referencia: `generar-pdf.js`.

## Errores y Lecciones Aprendidas

1. **Screenshots capturados durante animaciones CSS = contraste destruido.** Los slides tenían clases `.delay-1` a `.delay-5` que empezaban con `opacity: 0` y animaban a `opacity: 1`. Con solo 200ms de espera, muchos elementos se capturaban semi-transparentes. Solución: inyectar CSS global que fuerza `animation: none` y `opacity: 1` en todos los elementos antes de capturar.
