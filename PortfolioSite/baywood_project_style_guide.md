# Baywood Project Style Guide

## Design Personality
Baywood uses a financial analytics dashboard style: dark navy institutional surfaces, bright green data accents, light gray work areas, compact analyst tooling, and glassmorphism controls. The UI should feel like an internal investment research platform rather than a marketing site.

Core traits:

- Professional, data-heavy, and dashboard-oriented.
- Dark navy gradient for navigation, charts, report builders, and primary action areas.
- Light gray workspace backgrounds with translucent glass panels.
- Bright green accent for active states, chart lines, hover states, and important dividers.
- Compact controls, tables, and tools designed for repeat analyst use.

## Design Tokens

Use these CSS variables as the base theme:

```css
:root {
  --font-primary: 'Montserrat', sans-serif;
  --font-secondary: 'Montserrat', sans-serif;
  --font-accent: 'Lora', serif;

  --color-primary: #193D5A;
  --color-secondary: #031c37;
  --color-accent: #65BFE2;
  --color-background: #EDEEF0;
  --color-success: #6FE4A8;
  --color-success-lght: #baf1d6;
  --color-grey: #8f8f8f;
  --color-faint-grn: rgba(166, 255, 187, 0.20);
  --color-faint-drkgrn: rgba(166, 255, 187, 0.82);
  --linear-gradient: linear-gradient(40deg, #072944, #011830);

  --border-radius: 5px;
  --glass-background: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.4);
  --glass-shadow: rgba(0, 0, 0, 0.1);
  --dropdown-transition: max-height 0.6s ease, opacity 0.6s ease, padding-top 0.6s ease, padding-bottom 0.6s ease;
}
```

## Color System

### Primary Navy
Use dark navy for application chrome, sidebars, chart backgrounds, report builders, and primary dark panels.

- Deep navy: `#031c37`
- Gradient start: `#072944`
- Gradient end: `#011830`
- Muted blue navy: `#193D5A`

Typical use:

```css
background: linear-gradient(40deg, #072944, #011830);
color: var(--color-background);
```

### Accent Green
Use green sparingly for finance/data emphasis, active selections, hover states, chart lines, and borders.

- Main green: `#6FE4A8`
- Light green: `#baf1d6`
- Faint green background: `rgba(166, 255, 187, 0.20)`
- Strong green text: `rgba(166, 255, 187, 0.82)`

Typical use:

```css
border-bottom: 2px dashed var(--color-success);
stroke: var(--color-success);
background: var(--color-faint-grn);
```

### Light Workspace
Most content pages sit on a light gray workspace.

- Main background: `#EDEEF0`
- Layout background: `#f6f6f6`
- Table row white: `#ffffff`
- Subtle table header: `#f0f0f0`

## Typography

Primary font is Montserrat for almost everything.

- Headings: Montserrat, semi-bold, large and clean.
- Body: Montserrat, regular.
- Accent/quote font: Lora italic, used rarely.

Suggested type scale:

```css
html {
  font-size: 16px;
}

h1 {
  font-family: var(--font-primary);
  font-size: 3.2em;
  line-height: 1.1;
}

h2 {
  font-family: var(--font-primary);
  font-weight: 600;
}

p {
  font-family: var(--font-secondary);
}
```

Responsive scaling:

```css
@media (max-width: 768px) {
  html { font-size: 14px; }
}

@media (max-width: 480px) {
  html { font-size: 12px; }
}
```

## Layout

The main app layout uses a fixed left sidebar with a scrollable content area.

```css
.page-layout {
  display: flex;
  height: 100%;
  width: 100vw;
  background-color: #f6f6f6;
}

.main-container {
  flex: 1;
  margin-left: 67px;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
}
```

Main pages usually use:

- Top padding around `8vh` to clear the fixed header.
- Horizontal page padding between `3vw` and `5vw`.
- Content widths around `90%`.
- Grid layouts for dashboard summary sections.

Example page shell:

```css
.page-content {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 8vh;
  width: 90%;
}
```

## Sidebar

The sidebar is a narrow dark navy rail that expands on hover.

```css
.sidebar-sidebar {
  width: 6vh;
  background: linear-gradient(40deg, #072944, #011830);
  color: #ecf0f1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 3px solid #6FE4A8;
  transition: width 0.3s ease;
  z-index: 10;
  overflow: hidden;
}

.sidebar-sidebar:hover {
  width: 198px;
}
```

Sidebar links use white icons/text by default, then green-tinted hover states:

```css
.sidebar-links a:hover {
  box-shadow: 0 4px 8px rgba(166, 255, 187, 0.08);
  background-color: rgba(166, 255, 187, 0.20);
  color: rgba(166, 255, 187, 0.82);
  scale: 1.01;
}
```

## Surfaces

### Glass Panels
Use translucent panels for forms, stock cards, option sections, and secondary content.

```css
.glass-panel {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px var(--glass-shadow);
  backdrop-filter: blur(7px);
}
```

### Dark Panels
Use dark panels for high-emphasis areas: chart containers, report builder panels, prompt submission panels, dashboard profile cards.

```css
.dark-panel {
  background: linear-gradient(-165deg, rgba(7, 41, 68, 0.98), rgba(1, 24, 48, 0.97));
  color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Texture
The project uses a subtle grain/noise overlay in the main content and sidebar.

```css
.main-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://grainy-gradients.vercel.app/noise.svg');
  opacity: 0.5;
  pointer-events: none;
  z-index: -1;
}
```

## Buttons

### Dark Background Button
Use on dark panels and dashboards.

```css
.button-default-bg-drk {
  display: inline-block;
  padding: 10px 20px;
  background: none;
  color: var(--color-background);
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.03);
}

.button-default-bg-drk:hover {
  color: var(--color-faint-drkgrn);
  background: var(--color-faint-grn);
  box-shadow: 0 4px 8px rgba(166, 255, 187, 0.05);
  border: 1px solid rgba(166, 255, 187, 0.13);
  scale: 1.01;
}
```

### Light Background Button
Use for primary actions on light surfaces.

```css
.button-default-bg-light {
  padding: 0.8vh 1vw;
  background: var(--linear-gradient);
  color: var(--color-background);
  border: none;
  border-radius: 5px;
  font-size: small;
  cursor: pointer;
  box-shadow: 0 4px 6px var(--glass-shadow);
}

.button-default-bg-light:hover,
.button-default-bg-light.active {
  background: var(--color-success);
  color: var(--color-secondary);
}
```

### Operator Buttons
Use for filters, time periods, report sections, quick prompt actions, and toggles.

```css
.operator-button {
  flex: 1;
  padding: 10px 20px;
  border: 0.2px solid var(--glass-border);
  border-radius: 5px;
  background: var(--glass-background);
  box-shadow: 0 4px 8px var(--glass-shadow);
  color: var(--color-secondary);
  font-size: clamp(0.6em, 0.9em, 1.2em);
  font-weight: bold;
  cursor: pointer;
  backdrop-filter: blur(7px);
}

.operator-button:hover {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 6px 12px var(--glass-shadow);
  transform: scale(1.02);
}

.operator-button.active {
  background: var(--linear-gradient);
  color: white;
  box-shadow: 0 0 4px var(--color-success);
}
```

## Forms

Inputs are transparent/glass with navy text on light surfaces.

```css
input,
textarea,
.glassmorphism-select {
  background: var(--glass-background);
  color: var(--color-secondary);
  border: 1px solid var(--glass-border);
  padding: 10px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: var(--font-secondary);
  backdrop-filter: blur(10px);
}

input:focus,
textarea:focus,
.glassmorphism-select:focus {
  outline: none;
  border-color: var(--color-background);
  box-shadow: 0 4px 6px var(--glass-shadow), 0 0 3px var(--color-success);
}
```

On dark panels, textareas and buttons should use light text:

```css
.submit-section textarea,
.submit-section textarea::placeholder,
.submit-section button {
  color: var(--color-background);
}
```

## Tables

Tables are clean, white, compact, and designed for scanner/financial data.

```css
.scanner-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: var(--color-background);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  overflow-x: auto;
}

.scanner-table th {
  background-color: #f0f0f0;
  color: var(--color-primary);
  padding: clamp(8px, 2vw, 16px);
  text-transform: uppercase;
  border-bottom: 2px solid #dddddd;
  position: sticky;
  top: 0;
}

.scanner-table td {
  background-color: #ffffff;
  color: var(--color-secondary);
  border-bottom: 1px solid #dddddd;
  padding: clamp(8px, 2vw, 16px);
  text-align: left;
}

.scanner-table tbody tr:hover td {
  background-color: var(--color-success-lght);
}
```

## Charts

Charts use dark navy containers with green lines and faint green gridlines.

```css
.chart-container {
  position: relative;
  width: 100%;
  height: 50vh;
  background: linear-gradient(-165deg, rgba(7, 41, 68, 0.98), rgba(1, 24, 48, 0.97));
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
}

.line {
  fill: none;
  stroke: #6FE4A8;
  stroke-width: 1.5;
  opacity: 0.90;
}

.x-axis line,
.y-axis line {
  stroke: var(--color-success);
  opacity: 0.13;
  stroke-dasharray: 3, 3;
}

.x-axis text,
.y-axis text {
  fill: var(--color-background);
  font-size: small;
  font-weight: bold;
}
```

Tooltips are light panels over dark charts:

```css
.tooltip {
  position: absolute;
  background-color: var(--color-background);
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  font-size: 14px;
  border-radius: 4px;
  color: var(--color-secondary);
}
```

## Dashboard Pattern

Dashboard pages use a two-column grid on desktop and one column on tablet/mobile.

```css
.dashboard-top-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: space-between;
  padding-top: 8vh;
  padding-bottom: 3vh;
  margin-bottom: 5vh;
  gap: 5vw;
}

@media (max-width: 1024px) {
  .dashboard-top-container {
    grid-template-columns: 1fr;
    padding-right: 5vh;
    gap: 1vh;
  }
}
```

Section headings use italic oversized labels with green dashed dividers:

```css
.background-titles h2 {
  color: var(--color-secondary);
  font-style: italic;
  font-size: 5vh;
  margin: 0;
  border-bottom: 2px dashed var(--color-success);
}
```

## Stock Overview Pattern

Stock overview cards are glass panels with a title/price grid.

```css
.stock-info-container {
  background: var(--glass-background);
  color: var(--color-secondary);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  backdrop-filter: blur(7px);
}

.stock-info {
  display: grid;
  grid-template-columns: 3fr auto;
  align-items: center;
  width: 100%;
  gap: 1vh;
}

.stock-name {
  font-style: italic;
  font-size: clamp(2em, 2.8em, 3em);
  text-align: left;
}
```

## AI / Chat Pattern

Chat uses glass message containers and high-contrast message bubbles.

```css
.chat-messages {
  overflow-y: auto;
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  padding: 10px;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px var(--glass-shadow);
  max-height: 70vh;
  min-height: 15vh;
  text-align: left;
}

.message-bubble {
  padding: 2vw;
  max-width: 70%;
  border-radius: 15px;
  background-color: var(--color-secondary);
  box-shadow: 0 4px 6px var(--glass-shadow);
  font-size: 14px;
  word-wrap: break-word;
}

.message.bot .message-bubble {
  background-color: var(--color-success);
  color: var(--color-secondary);
}
```

Prompt settings use collapsible glass sections and a dark submission panel.

```css
.settings-container {
  background-color: var(--glass-background);
  border-bottom: 1px dashed var(--color-success);
  border-radius: var(--border-radius);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: var(--dropdown-transition);
  backdrop-filter: blur(7px);
}

.settings-container.show {
  max-height: 1000px;
  opacity: 1;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.submit-section {
  display: flex;
  flex-direction: column;
  background: var(--linear-gradient);
  padding: 2vw;
  color: var(--color-background);
  border-radius: 5px;
}
```

## Report Builder Pattern

Report builder pages use a dark header, glass options grid, and dark ordered-section panel.

```css
.genreports-head-container {
  background: var(--linear-gradient);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.genreports-head-container h2 {
  color: var(--color-background);
  font-size: 2em;
}

.genreports-options-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  background: var(--glass-background);
  border-radius: var(--border-radius);
  border-bottom: 1px dashed var(--color-success);
  border-left: 4px solid var(--color-secondary);
  padding: 0 2vw 2vh;
}
```

Available sections are glass tiles:

```css
.draggable-section-available {
  padding: 1vh;
  margin: 1vh;
  height: 8vh;
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  cursor: pointer;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px var(--glass-shadow);
  text-align: center;
  align-content: center;
}
```

## Spacing And Radius

General rules:

- Border radius is usually `5px`; larger cards sometimes use `8px`.
- Page top padding is usually `8vh`.
- Page horizontal padding is usually `3vw` to `5vw`.
- Card padding is usually `16px`, `2vh`, or `2vw`.
- Use dashed green borders for section breaks.
- Use thin borders and shadows rather than heavy outlines.

## Motion

The project uses light transitions and small scale effects.

```css
* {
  transition: all 0.3s ease;
}

html, body, div, span, p, a, h1, h2, h3, h4, h5, h6, button, input, textarea, table {
  transition: none;
}
```

Practical guidance:

- Use `0.3s ease` for hover transitions.
- Use `scale: 1.01` or `transform: scale(1.02)` for hover emphasis.
- Use collapsible sections with `max-height`, `opacity`, and padding transitions.

## Responsive Behavior

Main responsive moves:

- Reduce base font size under `768px` and `480px`.
- Collapse dashboard grids from two columns to one column under `1024px`.
- Reduce table font size and padding under `1024px` and `768px`.
- Keep primary content around `90%` width and avoid horizontal overflow.

## Implementation Notes For A New Project

To bring this style into another project:

1. Copy the design tokens from `:root`.
2. Build a fixed expandable sidebar with the dark navy gradient and green border.
3. Use a light gray app workspace with optional noise texture.
4. Use glass panels for forms and secondary cards.
5. Use dark gradient panels for charts, report builders, prompt areas, and profile/action cards.
6. Reuse the three button types: dark background, light background, and operator buttons.
7. Keep charts dark with green lines and faint dashed green gridlines.
8. Use green dashed dividers for major analytical sections.
9. Use compact tables with sticky uppercase headers and green row hover.
10. Keep generated AI/report interfaces dense and tool-like rather than spacious or marketing-like.

## Quick Copy Starter

```css
:root {
  --font-primary: 'Montserrat', sans-serif;
  --font-secondary: 'Montserrat', sans-serif;
  --font-accent: 'Lora', serif;
  --color-primary: #193D5A;
  --color-secondary: #031c37;
  --color-accent: #65BFE2;
  --color-background: #EDEEF0;
  --color-success: #6FE4A8;
  --color-success-lght: #baf1d6;
  --color-grey: #8f8f8f;
  --color-faint-grn: rgba(166, 255, 187, 0.20);
  --color-faint-drkgrn: rgba(166, 255, 187, 0.82);
  --linear-gradient: linear-gradient(40deg, #072944, #011830);
  --border-radius: 5px;
  --glass-background: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.4);
  --glass-shadow: rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  font-family: var(--font-secondary);
  background: #f6f6f6;
}

.glass-panel {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px var(--glass-shadow);
  backdrop-filter: blur(7px);
}

.dark-panel {
  background: var(--linear-gradient);
  color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.accent-divider {
  border-bottom: 2px dashed var(--color-success);
}
```
