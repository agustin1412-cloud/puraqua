# Plan: Website PURAQUA

## Contexto

PURAQUA es una empresa de venta de filtros de agua por ósmosis inversa. Actualmente no tiene presencia web. Se necesita crear un sitio e-commerce con un solo producto, integración de pagos con MercadoPago, formulario de contacto y botón de WhatsApp. El objetivo es tener una web profesional que genere confianza y permita vender online.

## Tech Stack

- **Astro 5+** (framework principal)
- **Tailwind CSS v4** (via Vite plugin)
- **MercadoPago SDK** (Node.js para servidor + JS SDK via CDN para frontend)
- **Adaptador Node.js** para el endpoint de pagos (server-side)
- **Rendering**: Estático por defecto, solo el endpoint de MercadoPago es server-rendered

## Paleta de Colores (del logo)

| Token | Hex | Uso |
|---|---|---|
| `blue-dark` | `#1a3a5c` | Navbar, footer, headings |
| `blue-medium` | `#2c6faa` | Botones, links |
| `blue-light` | `#5ba3d9` | Hover states |
| `blue-sky` | `#a8d4f0` | Fondos de secciones |
| `cyan-accent` | `#00c8e0` | Acento (gota del logo) |
| `gray-light` | `#f0f5fa` | Fondos alternados |

## Estructura del Proyecto

```
PURAQUA/
├── astro.config.mjs
├── package.json
├── .env                              (credenciales MercadoPago)
├── public/
│   ├── images/
│   │   ├── logo.png                  (renombrado del archivo actual)
│   │   ├── product-filter.webp       (foto producto - placeholder)
│   │   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── styles/
│   │   └── global.css                (Tailwind + custom theme)
│   ├── layouts/
│   │   └── BaseLayout.astro          (head, nav, footer, slot)
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── ProductCard.astro
│   │   ├── BenefitsSection.astro
│   │   ├── CTASection.astro
│   │   ├── ContactForm.astro
│   │   ├── WhatsAppButton.astro
│   │   └── MercadoPagoButton.astro
│   ├── pages/
│   │   ├── index.astro               (Home)
│   │   ├── producto.astro            (Producto)
│   │   ├── sobre-nosotros.astro      (Sobre Nosotros)
│   │   ├── contacto.astro            (Contacto)
│   │   └── api/
│   │       └── create-preference.ts  (Endpoint MercadoPago)
│   └── data/
│       └── product.ts                (datos del producto)
```

## Páginas

### 1. Home (`index.astro`)
- Hero section con fondo agua/gradiente, titular "Agua pura para tu hogar", CTA a producto
- Sección de beneficios (4 cards): elimina contaminantes, mejor sabor, ahorro vs embotellada, fácil instalación
- Product highlight card con link a `/producto`
- CTA section final

### 2. Producto (`producto.astro`)
- Imagen grande del producto + nombre y precio
- Lista de características y especificaciones técnicas
- **Botón MercadoPago Wallet Brick** (pago online)
- Botón secundario "Consultar por WhatsApp"
- Sección "Cómo funciona" (3 pasos)
- FAQ accordion

### 3. Sobre Nosotros (`sobre-nosotros.astro`)
- Historia de la empresa
- Misión y valores
- Sección educativa sobre ósmosis inversa

### 4. Contacto (`contacto.astro`)
- Formulario: Nombre, Email, Teléfono, Mensaje (via Formspree inicialmente)
- Sidebar con info de contacto: dirección, teléfono, email, horarios
- Link directo a WhatsApp

## Integración MercadoPago (Checkout Pro)

### Flujo:
1. Usuario visita `/producto`
2. Script del cliente llama `POST /api/create-preference`
3. Servidor crea preferencia via MercadoPago SDK, retorna `preferenceId` + `publicKey`
4. Wallet Brick se renderiza en el frontend
5. Usuario clickea "Pagar con Mercado Pago" → checkout hosted de MP
6. MP redirige a `/producto?status=success|failure|pending`

### Archivos clave:
- **`src/pages/api/create-preference.ts`**: Endpoint server-side con `export const prerender = false`. Usa `MercadoPagoConfig` y `Preference` del SDK v2. Configura `back_urls` para redirección post-pago.
- **`src/data/product.ts`**: Fuente única de verdad del producto (id, título, precio en ARS, features, specs). Referenciado tanto por la página como por el endpoint.

### Variables de entorno (`.env`):
```
MP_ACCESS_TOKEN=TEST-xxxxxxxxxxxx
MP_PUBLIC_KEY=TEST-xxxxxxxxxxxx
SITE_URL=http://localhost:4321
```

## Componentes Globales

- **WhatsAppButton**: Botón flotante fijo (bottom-right, z-50), ícono verde SVG, link a `wa.me/549XXXXXXXXXX`, animación pulse
- **Navbar**: Sticky, bg-blue-dark, logo + links, hamburger en mobile (CSS/JS toggle simple)
- **Footer**: 3 columnas (info empresa, links rápidos, contacto), copyright

## Orden de Implementación

| # | Tarea |
|---|---|
| 1 | Scaffold Astro + Tailwind + dependencias + renombrar logo |
| 2 | `global.css` con theme de colores |
| 3 | `BaseLayout.astro` (head, SEO, slots) |
| 4 | `Navbar.astro` + `Footer.astro` + `WhatsAppButton.astro` |
| 5 | `index.astro` (Hero, Benefits, ProductCard, CTA) |
| 6 | `src/data/product.ts` |
| 7 | `producto.astro` (layout completo sin pagos) |
| 8 | `sobre-nosotros.astro` |
| 9 | `contacto.astro` + `ContactForm.astro` |
| 10 | MercadoPago: endpoint + Wallet Brick |
| 11 | Manejo de status post-pago |
| 12 | Responsive testing y polish |
| 13 | SEO (meta tags, JSON-LD, sitemap) |

## Verificación

1. **Dev server**: `npm run dev` → verificar que todas las páginas cargan correctamente
2. **Responsive**: Testear en mobile (Chrome DevTools) cada página
3. **MercadoPago sandbox**: Usar credenciales TEST y tarjetas de prueba de MP
4. **Formulario de contacto**: Enviar formulario de prueba via Formspree
5. **WhatsApp**: Verificar que el botón abre WhatsApp con mensaje pre-cargado
6. **SEO**: Verificar meta tags con herramientas como metatags.io
7. **Build**: `npm run build` → verificar que el build estático genera correctamente
8. **Navegación**: Verificar todos los links internos entre páginas
