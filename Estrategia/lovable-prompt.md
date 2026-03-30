# Prompt para Lovable — Website Puraqua

> Prompt optimizado para [lovable.dev](https://lovable.dev). Copiá todo el contenido de abajo y pegalo en Lovable para generar la web base. Luego iterá por secciones si algo no queda bien.

---

```
Build a professional, premium e-commerce website for PURAQUA, a reverse osmosis water
purification company from Uruguay. The design should feel clean, trustworthy, and
modern — like it was built by an award-winning designer. Think fresh water, clarity,
and health. Smooth micro-interactions, generous whitespace, and a calm-but-confident tone.

Use Lucide React for all icons.

---

## Visual Style

- **Primary palette:** Dark navy #1a3a5c (navbar, footer, headings), medium blue #2c6faa
  (buttons, links), sky blue #a8d4f0 (section backgrounds), cyan #00c8e0 (accents/highlights),
  light gray #f0f5fa (alternating sections), white for cards
- **Font:** Inter (Google Fonts)
- **Design mood:** Premium water brand — clean, minimal, high trust. Soft gradients using
  the blues. Rounded corners on cards (rounded-2xl). Subtle drop shadows.
- **Hero background:** CSS gradient from #1a3a5c to #2c6faa with a soft wave SVG shape
  at the bottom transitioning to white
- **Buttons:** Primary = solid #2c6faa with white text, hover darkens. Secondary = outlined.

All copy must be in Spanish (Uruguay, use "vos" and "tu" naturally).

---

## Pages

### 1. Home (/)

**Hero section** (full viewport height on desktop, 80vh on mobile):
- Headline: "Agua pura para tu hogar y tu familia"
- Subheadline: "Equipos de ósmosis inversa de calidad premium. Eliminá cloro, bacterias
  y contaminantes del agua de la canilla."
- Two buttons: "Ver el producto" (primary, links to /producto) and "¿Tenés dudas?
  Escribinos" (secondary, links to WhatsApp)
- Animated water drop or wave subtle SVG in the background

**Benefits section** (white background, 4 cards in a 2x2 grid on mobile, 4 columns on desktop):
1. Droplet icon — "Eliminá contaminantes" — "Filtramos cloro, metales pesados, bacterias
   y virus. Agua 100% segura para toda la familia."
2. Star icon — "Mejor sabor y olor" — "Notás la diferencia desde el primer sorbo. Sin ese
   gusto a canilla que tanto molesta."
3. Piggy bank icon — "Ahorrá vs el agua embotellada" — "Un equipo que se paga solo en
   pocos meses comparado con comprar bidones."
4. Wrench icon — "Instalación simple" — "Lo instalás bajo la mesada en menos de una hora.
   Te mandamos el manual paso a paso."

**Product highlight** (light blue background #a8d4f0):
- Headline: "Equipo de Ósmosis Inversa 5 Etapas"
- Price: "$28.900"
- 3 bullet points: "75 GPD de caudal", "Incluye tanque y canilla", "Filtros reemplazables"
- CTA button: "Ver el producto completo"

**Final CTA section** (dark navy #1a3a5c, white text):
- Headline: "¿Listo para tomar agua de calidad?"
- Button: "Comprar ahora" → links to /producto

---

### 2. Producto (/producto)

**Product hero** (two columns on desktop: image left, info right):
- Left: Large placeholder image with a water/blue gradient background and a filter
  illustration or icon centered
- Right:
  - Badge: "✓ Envío gratis a Montevideo"
  - Product name: "Equipo de Ósmosis Inversa 5 Etapas"
  - Price: "$28.900" (large, bold, #1a3a5c)
  - Short description: "Sistema completo de purificación bajo la mesada. Incluye
    prefiltro de sedimentos, carbón activado, membrana de ósmosis, postfiltro y canilla
    de acero inoxidable."
  - Feature badges (horizontal pills): "75 GPD", "5 Etapas", "Incluye tanque",
    "Filtros reemplazables"
  - **Primary CTA button** (full width, MercadoPago blue #009ee3): "Pagar con
    MercadoPago" — for now this is a placeholder button that shows a success toast
    saying "¡Funcionalidad de pago próximamente!"
  - **Secondary button** (full width, WhatsApp green #25D366): WhatsApp icon +
    "Consultar por WhatsApp" — opens https://wa.me/59898000000

**Technical specs section** (table or cards):
- Caudal: 75 GPD (280 litros/día)
- Etapas de filtración: 5
- Presión de trabajo: 4-7 bar
- Temperatura del agua: 5-38°C
- Tanque incluido: 3.2 litros
- Conexión: Bajo la mesada (estándar 3/8")
- Garantía: 12 meses

**Cómo funciona** (3 steps, numbered, horizontal on desktop):
1. 🔧 "Instalá el equipo" — "Conectalo a la canilla de agua fría bajo la mesada.
   Sin obras, sin plomero."
2. 💧 "Filtramos el agua" — "5 etapas eliminan el 99% de contaminantes, cloro y metales."
3. ✅ "Tomá agua pura" — "Abrís la canilla dedicada y tenés agua purificada al instante."

**FAQ accordion** (with smooth expand/collapse animation):
- "¿Cuánto tarda en instalarse?" → "La instalación típica toma entre 30 y 60 minutos.
  No necesitás plomero ni hacer obras. Viene con todo lo necesario y un manual detallado."
- "¿Cuándo hay que cambiar los filtros?" → "Los prefiltros se cambian cada 6-12 meses
  según el uso. La membrana de ósmosis dura 2-3 años. Te avisamos cuando es momento."
- "¿Funciona con la presión del agua de Montevideo?" → "Sí. OSE entrega agua entre
  2 y 6 bar, dentro del rango de trabajo del equipo."
- "¿El equipo elimina el flúor y el cloro?" → "Sí. La membrana de ósmosis inversa
  elimina hasta el 99% de fluoruros, cloro, nitratos, metales pesados y bacterias."
- "¿Qué pasa si tengo un problema?" → "Tenés 12 meses de garantía y soporte directo
  por WhatsApp. Respondemos el mismo día."

---

### 3. Sobre Nosotros (/sobre-nosotros)

- Hero with headline: "Creemos que el agua pura no debería ser un lujo"
- Company story paragraph: "Puraqua nació de una preocupación simple: el agua que
  tomamos a diario puede contener cloro, metales y contaminantes que no siempre se
  ven ni se sienten. Nuestra misión es hacer accesible la tecnología de ósmosis
  inversa para hogares y empresas de Uruguay."
- 3 values cards: Calidad Premium, Precio Justo, Atención Cercana
- Educational section: "¿Cómo funciona la ósmosis inversa?" with a simple 3-step
  diagram (water passes through 5 stages) and plain language explanation

---

### 4. Contacto (/contacto)

Two-column layout (form left, info right):

**Form:**
- Fields: Nombre completo, Email, Teléfono (optional), Mensaje
- Submit button: "Enviar consulta"
- Show a success message on submit (no real backend needed, just UI state)

**Contact info sidebar:**
- WhatsApp: wa.me/59898000000 (with WhatsApp icon, green)
- Email: info@puraqua.uy
- Horarios: Lunes a viernes 9:00 – 18:00

---

## Global Components

**Navbar** (sticky, background #1a3a5c):
- Left: Text logo "PURAQUA" in white, bold, with a small water droplet icon in cyan #00c8e0
- Right: Navigation links in white — Inicio, Producto, Sobre Nosotros, Contacto
- On mobile: hamburger menu with slide-in drawer
- Active link should be underlined or have a cyan accent

**Footer** (background #1a3a5c, white text):
- 3 columns: Company description + tagline | Quick links | Contact info
- Bottom bar: "© 2025 Puraqua. Todos los derechos reservados."

**Floating WhatsApp button:**
- Fixed bottom-right corner, z-index on top of everything
- Green circle (#25D366) with WhatsApp SVG icon in white
- Subtle pulse animation
- On click: opens https://wa.me/59898000000

---

## Rules

- All text content in Spanish (Uruguay). Use "vos" naturally in CTAs and body copy.
- Mobile-first responsive design. Test all layouts at 375px, 768px, and 1280px.
- No lorem ipsum anywhere — use the real copy provided above.
- MercadoPago button is a styled placeholder only (no real payment integration yet).
- Keep animations subtle: fade-in on scroll for sections, smooth hover states on cards.
- All internal links must work correctly between pages.
```

---

## Notas de uso

- **Número de WhatsApp:** Reemplazá `59898000000` con el número real antes de publicar.
- **MercadoPago:** Una vez que tenés el diseño base aprobado, pedile a Lovable en un prompt separado que integre MercadoPago con tu Access Token y Public Key.
- **Logo:** Si querés subir el logo real (`Assets/Logo.png`), hacelo después de la primera generación y pedile que lo reemplace en navbar y footer.
- **Precio:** Actualizá `$28.900` si cambia.
