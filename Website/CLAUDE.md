# Website Puraqua — Instrucciones Técnicas

## Stack Tecnológico

- **Framework:** Astro 5+ (output estático, adaptador Node.js para endpoints server-side)
- **Estilos:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Pagos:** MercadoPago SDK v2 (Checkout Pro + Wallet Brick)
- **Formulario de contacto:** Formspree
- **Tipografía:** Plus Jakarta Sans (headings) + DM Sans (body) — Google Fonts

## Design System

### Tipografía

| Rol | Fuente | Pesos |
|---|---|---|
| Headings | Plus Jakarta Sans | 700, 800 |
| Body | DM Sans | 400, 500 |

**PROHIBIDO usar:** Inter, Roboto, Open Sans, Arial — son las fuentes por defecto del "AI slop". Plus Jakarta Sans y DM Sans transmiten la misma modernidad con identidad propia.

### Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `blue-dark` | `#1a3a5c` | Headings, footer, navbar, elementos de autoridad |
| `blue-medium` | `#2c6faa` | CTAs secundarios, links |
| `blue-light` | `#5ba3d9` | Hover states, acentos |
| `cyan-accent` | `#00c8e0` | CTA primario, highlights, gota del logo |
| `surface` | `#f0f7fc` | Fondos de secciones alternadas |
| `background` | `#f8fafb` | Fondo principal (casi blanco) |
| `text-dark` | `#0f2a3d` | Texto body sobre fondos claros |
| `success` | `#10b981` | Checkmarks, "incluido", confirmaciones |
| `white` | `#ffffff` | Cards, contraste |

Definidos en `src/styles/global.css` dentro de `@theme`.

### Dirección Estética: Luxury-Accessible

**Objetivo:** Premium pero cercano. Tecnología accesible, no fría. Agua pura, confianza, modernidad.

**Características:**
- Espaciado generoso — las secciones respiran
- Cards con bordes sutiles y sombras suaves (nunca gruesas ni duras)
- Fondos atmosféricos: ondas SVG o partículas en `#00c8e0` al 3-5% de opacidad
- Animaciones sutiles y con propósito: scroll-triggered, CSS puro
- Jerarquía visual clara: headlines grandes, subtítulos medianos, body pequeño pero legible
- Imágenes del producto real > stock photos de personas sonriendo con vasos de agua

### Anti-Patrones PROHIBIDOS

1. **Gradientes agresivos** de azul a turquesa — usar gradientes casi imperceptibles o colores sólidos con textura
2. **Grid de 3 cards idénticas** para beneficios — variar layouts entre secciones
3. **Stock photos de personas sonriendo con vasos de agua** — cliché del rubro
4. **Gradientes púrpura o neon** — fuera de paleta y de marca
5. **Dark mode** — no es parte de la identidad de PURAQUA
6. **JavaScript innecesario** — Astro genera 0 JS por defecto, mantener eso salvo excepciones justificadas
7. **Dependencias externas sin justificación** — no React, no shadcn/ui, no Motion library salvo que sea imprescindible

### Iconos

- **Lucide Icons** — incluido en ecosistema Astro, línea limpia, 1.500+ iconos
- Para iconos de producto específicos (gota, filtro, molécula): SVG inline custom

## Estructura de la Landing (index.astro)

10 secciones en orden de conversión (modelo AIDA):

1. **Hero** — Headline de beneficio + sub-headline de diferencial + CTA WhatsApp + CTA "Conocé más" + imagen del equipo
2. **Problema** — 3-4 datos sobre calidad del agua en Uruguay. Tono educativo, no alarmista
3. **Cómo Funciona** — Diagrama visual simple del proceso de ósmosis (3 pasos máximo)
4. **Producto** — Imagen grande + nombre + precio ($14.000-$18.000 UYU) + características + CTA dual (MercadoPago + WhatsApp)
5. **Beneficios** — 4-6 beneficios con icono + título + descripción corta (variando el layout, no grid de cards)
6. **Comparativa** — Puraqua vs agua embotellada vs filtro de jarra vs sin filtrar
7. **Testimonios / Confianza** — Testimonios reales o badges de garantía + envío + MercadoPago
8. **FAQ** — 5-7 preguntas frecuentes con accordion interactivo
9. **CTA Final** — Headline de cierre emotivo + doble CTA (WhatsApp + MercadoPago)
10. **Footer** — Logo, WhatsApp, email, redes, eslogan

**Regla de CTAs:** Mínimo 3 puntos de conversión visibles: hero, producto, y CTA final.
**Mostrar siempre el precio** — genera confianza y mejora la calidad del lead.

## Estructura del Sitio

- **`src/pages/`** — Páginas: index, producto, sobre-nosotros, contacto
- **`src/pages/api/`** — Endpoints server-side (MercadoPago)
- **`src/components/`** — Componentes reutilizables (Navbar, Footer, WhatsApp, etc.)
- **`src/layouts/`** — BaseLayout con head, SEO, slots
- **`src/data/`** — Datos del producto (fuente única de verdad)
- **`public/images/`** — Logo y assets estáticos

## Convenciones

- Componentes y layouts en `.astro`, datos en `.ts`
- Nombres de archivo en español para páginas (`sobre-nosotros.astro`, `contacto.astro`)
- Nombres de componentes en inglés/PascalCase (`HeroSection.astro`, `ProductCard.astro`)
- Mobile-first: diseñar primero para mobile, escalar con breakpoints
- El endpoint de MercadoPago usa `export const prerender = false`

## Variables de Entorno (`.env`)

```
MP_ACCESS_TOKEN=TEST-xxxxxxxxxxxx
MP_PUBLIC_KEY=TEST-xxxxxxxxxxxx
SITE_URL=http://localhost:4321
```

## Comandos

- `npm run dev` — Servidor de desarrollo (localhost:4321)
- `npm run build` — Build de producción
- `npm run preview` — Preview del build

## Plan de Implementación

Ver `plan.md` para el detalle completo de páginas, componentes y orden de implementación.

---

## Buenas Prácticas Descubiertas

_(Esta sección se actualiza automáticamente durante el trabajo)_

## Errores y Lecciones Aprendidas

_(Esta sección se actualiza automáticamente durante el trabajo)_
