# Thomas Cook Portfolio Style Guide

## Purpose

This style guide defines the visual identity for Thomas Cook's personal portfolio site. The goal is to create a portfolio that feels professional, modern, clean, and premium while supporting a career narrative around data science, product management, pricing systems, automation, business intelligence, and analytical product work.

The portfolio should feel like a polished product interface, not a generic resume page.

---

## Brand Positioning

### Core Brand Idea

Thomas Cook builds data-driven systems that turn messy business problems into structured tools, workflows, dashboards, pricing logic, and decision systems.

### Desired Impression

The site should communicate:

- Analytical thinking
- Product ownership
- Business maturity
- Technical credibility
- Calm executive confidence
- Systems thinking
- Pricing, analytics, automation, and AI orientation
- Strong communication between business and technical teams

### Visual Direction

The visual style should feel like:

> Premium enterprise SaaS + quantitative strategy + clean personal brand.

It should avoid looking like:

- A generic developer portfolio
- A dark-mode AI startup page
- A colourful student portfolio
- A finance bro landing page
- A basic resume website

---

## Design Principles

### 1. White Dominant

The site should be mostly white and off-white. Dark colors should be used for emphasis, not as the default background.

Recommended balance:

```text
70% white / off-white
20% dark royal blue-green
10% beige, brown, and muted green accents
```

### 2. Serious but Warm

The dark royal blue-green gives the site authority. Beige, brown, and soft green accents add warmth so the portfolio does not feel sterile.

### 3. Product Interface, Not Resume Template

The portfolio should feel like an operating system for Thomas's work. Use cards, tabs, timeline rails, status pills, metric blocks, and clean case study layouts.

### 4. Proof Over Decoration

Visual elements should support proof points, project logic, and professional positioning. Avoid decorative visuals that do not help explain the work.

---

## Color Palette

## Primary Color

### Deep Royal Blue-Green

```css
#071D2B
```

Use this as the main brand color.

It should feel almost navy, but with a subtle green/teal undertone.

Use for:

- Logo mark
- Wordmark
- Primary headings
- Navigation text
- Primary buttons
- Dark cards
- Footer
- Key dividers
- Strong emphasis text

---

## Base Colors

### White

```css
#FFFFFF
```

Use for:

- Main page background
- Cards
- Project panels
- Education panels
- Navigation background

### Porcelain

```css
#F8F6F1
```

Warm off-white background.

Use for:

- Alternating page sections
- Soft card backgrounds
- Hero gradients
- Timeline backgrounds
- Project detail panels

### Warm Stone

```css
#ECE6D8
```

Use for:

- Borders
- Soft separators
- Background panels
- Timeline rails

---

## Accent Colors

### Sand Beige

```css
#D9C7A3
```

Use for:

- Subtle highlights
- Timeline dots
- Small labels
- Accent rules
- Education/course chips

### Walnut Brown

```css
#7A5A3A
```

Use sparingly for warmth.

Use for:

- Secondary accents
- Metadata
- Hover details
- Small icons
- Thin dividers

Avoid using walnut brown as a large background color.

### Deep Sage Green

```css
#41695A
```

Use for:

- Active states
- Metric highlights
- Success indicators
- Data/status pills
- Eyebrow text
- Small UI details

### Mist Green

```css
#E7F0EA
```

Use for:

- Soft highlight backgrounds
- Metric card tints
- Pills
- Tags
- Hover backgrounds

---

## CSS Variables

```css
:root {
  --ink: #071D2B;
  --ink-soft: #193545;
  --white: #FFFFFF;
  --porcelain: #F8F6F1;
  --stone: #ECE6D8;
  --sand: #D9C7A3;
  --walnut: #7A5A3A;
  --sage: #41695A;
  --mist: #E7F0EA;
  --line: #E4DED2;
  --muted: #6D746F;
}
```

---

## Logo Direction

## Recommended Logo Concept

The strongest logo direction is a refined **TC monogram**.

The mark should feel like a clean data/product identity rather than a personal signature.

### Concept

- **T** represents structure, ownership, and decision layers.
- **C** represents systems, loops, feedback, and analysis cycles.
- Combined mark should feel precise, modern, and executive.

### Logo Personality

The logo should feel:

- Minimal
- Premium
- Analytical
- Geometric
- Calm
- Professional
- Slightly technical
- Highly legible at small sizes

### Avoid

Do not use:

- Literal charts
- Bar graphs
- Arrows
- Database icons
- Code brackets
- Circuit-board clichés
- Overly sharp cyber styling
- Flashy gradients
- Cartoon or mascot elements

---

## Logo Variations

## Primary Logo

Dark mark on white.

```text
[TC monogram] Thomas Cook
```

Colors:

```css
Logo mark: #071D2B
Wordmark: #071D2B
Background: #FFFFFF
```

Use for:

- Header navigation
- Resume header
- Portfolio homepage
- Case study covers
- LinkedIn banner

---

## Secondary Logo

Dark mark with a small beige or sage accent.

Possible accent placements:

- Small dot inside the C
- Small line across the T
- Tiny cutout detail
- Small system-node detail

Colors:

```css
Main mark: #071D2B
Accent: #41695A or #D9C7A3
Background: #FFFFFF
```

Use only when there is enough visual space.

---

## Reversed Logo

White mark on deep royal blue-green.

Colors:

```css
Background: #071D2B
Logo: #FFFFFF
Optional accent: #D9C7A3
```

Use for:

- Footer
- Dark cards
- PDF covers
- Project title banners

---

## Favicon

Use only the monogram.

Recommended structure:

```text
TC
```

Inside a soft rounded square or circle.

Colors:

```css
Background: #071D2B
Mark: #FFFFFF
Optional accent: #41695A
```

---

## Logo Construction Rules

### Shape

- Clean geometric structure
- Slightly rounded corners
- Strong silhouette
- Balanced negative space
- No internal gradients
- No thin fragile lines

### Stroke Weight

The mark should remain clear at small sizes.

Use medium-bold strokes rather than thin strokes.

### Clear Space

Minimum clear space around the logo should equal the height of the T crossbar or roughly 25% of the mark width.

### Minimum Size

Recommended minimum sizes:

```text
Navbar mark: 28px height
Favicon: 32px by 32px
Resume header: 36px height
Large brand lockup: 56px height or larger
```

---

## Logo Generation Prompt

```text
Create a premium personal portfolio logo for “Thomas Cook,” a data, analytics, and product professional.

Design a refined TC monogram that feels modern, analytical, and executive. The mark should suggest structure, systems thinking, feedback loops, and decision intelligence without using literal charts, arrows, databases, or code symbols.

Style: clean geometric monogram, slightly rounded corners, premium SaaS / fintech aesthetic, minimal, balanced, highly legible at small sizes.

Color palette: very dark royal blue with a subtle green tint (#071D2B), white dominant, optional small accent in muted sage green (#41695A) or warm beige (#D9C7A3).

The logo should work as a navbar mark, favicon, resume header, LinkedIn banner mark, and portfolio identity. Avoid flashy gradients, generic tech icons, overly sharp cyber styling, or playful cartoon elements.
```

---

## Typography

## Font Direction

Use a modern sans-serif font that feels clean, professional, and analytical.

Recommended fonts:

1. Inter
2. IBM Plex Sans
3. Geist
4. Söhne-style sans-serif
5. Suisse-style sans-serif

Recommended default:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Use one font family across the site. Create hierarchy through size, weight, spacing, and color rather than multiple font families.

---

## Type Hierarchy

### Hero Heading

```css
.hero h1 {
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  line-height: 0.92;
  letter-spacing: -0.075em;
  color: var(--ink);
  font-weight: 650;
}
```

### Section Heading

```css
.section h2 {
  font-size: clamp(2rem, 4vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.055em;
  color: var(--ink);
  font-weight: 620;
}
```

### Body Copy

```css
body {
  font-size: 16px;
  line-height: 1.65;
  color: var(--muted);
}
```

### Eyebrow Labels

```css
.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sage);
  font-weight: 700;
}
```

---

## Layout System

## Page Structure

The portfolio should follow a clean product-page structure:

1. Hero
2. Metric proof cards
3. Tool/skill strip
4. Career timeline
5. Interactive case studies
6. Education and certificates
7. Footer/contact

## Section Width

Recommended max width:

```css
max-width: 1180px;
```

## Section Spacing

Recommended vertical spacing:

```css
section {
  padding: 96px 24px;
}
```

Large screens:

```css
section {
  padding: 120px 32px;
}
```

---

## Cards

Cards should feel like modern SaaS interface panels.

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E4DED2;
  border-radius: 28px;
  box-shadow: 0 24px 80px rgba(7, 29, 43, 0.08);
}
```

### Card Principles

- Use soft shadows, not heavy shadows.
- Use warm borders instead of cold grey borders.
- Use generous padding.
- Keep rounded corners consistent.
- Let content breathe.

---

## Buttons

## Primary Button

```css
.btn-primary {
  background: #071D2B;
  color: #FFFFFF;
  border-radius: 999px;
  border: 1px solid #071D2B;
}

.btn-primary:hover {
  background: #193545;
}
```

Use for:

- Main CTA
- Explore work
- Contact
- View projects

---

## Secondary Button

```css
.btn-secondary {
  background: #FFFFFF;
  color: #071D2B;
  border: 1px solid #D9C7A3;
  border-radius: 999px;
}

.btn-secondary:hover {
  background: #F8F6F1;
}
```

Use for:

- Secondary navigation
- Case study links
- Resume link
- Timeline link

---

## Metric Cards

Metric cards should feel like executive dashboard tiles.

### Recommended Content Pattern

```text
Enterprise Clients
$400M+
Managed major Amazon operator relationships
```

```text
Pricing Algorithms
18,000+
SKUs governed by logic I built
```

```text
Ops Automation
65%
Workload reduced through automation
```

### CSS Pattern

```css
.metric-card {
  background: #FFFFFF;
  border: 1px solid #E4DED2;
  border-radius: 24px;
  padding: 24px;
}

.metric-card span {
  color: #41695A;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.metric-card strong {
  display: block;
  color: #071D2B;
  font-size: 2.75rem;
  letter-spacing: -0.06em;
  line-height: 1;
}

.metric-card p {
  color: #6D746F;
  font-size: 0.95rem;
  line-height: 1.45;
}
```

---

## Project Card System

Each project should feel like a case study for a system Thomas built.

### Project Card Content Pattern

```text
Category
Project Name
One-line system description
Metric / proof point
Tools / concepts
```

### Portfolio Categories

Use consistent categories:

- Pricing Systems
- Business Intelligence
- Sales Operations
- Marketing Science
- AI Product
- Quant Research
- Workflow Automation
- Product Analytics

### Example Project Card

```text
Pricing Systems

Forecast Adaptive Pricing Engine

A pricing control system that used Amazon marketplace signals to stabilize demand against forecast.

18,000+ SKUs
WMAPE, margin, ROI, pricing logic
```

---

## Tags and Pills

Tags should be small, muted, and product-like.

```css
.tag {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: #E7F0EA;
  color: #41695A;
  font-size: 0.78rem;
  font-weight: 650;
}
```

Use for:

- Tools
- Project categories
- Metrics
- Status labels
- Skill labels

---

## Visual Motifs

Use subtle system-inspired visuals.

Good motifs:

- Thin grid lines
- Timeline rails
- Soft coordinate dots
- Flow lines
- Dashboard panels
- Data-table patterns
- Status pills
- Monogram stamps
- Card stacks

Avoid:

- Neon gradients
- Generic AI sparkles
- Random 3D blobs
- Loud chart icons
- Heavy dark backgrounds
- Stock tech illustrations

---

## Image and Portrait Treatment

If using a professional photo:

- Place it inside a clean card or circular frame.
- Use a thin warm border.
- Avoid heavy filters.
- Avoid dramatic contrast.
- Keep the photo secondary to the work and metrics.

Recommended frame:

```css
.photo-frame {
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #E4DED2;
  background: #F8F6F1;
  box-shadow: 0 24px 80px rgba(7, 29, 43, 0.08);
}
```

---

## Tone of Voice

## Voice Attributes

The writing should be:

- Direct
- Mature
- Clear
- Specific
- Analytical
- Confident but not inflated
- Product and business oriented

## Avoid

Avoid language that sounds:

- Too junior
- Too buzzword-heavy
- Too academic
- Too simple
- Too salesy
- Too vague

## Preferred Phrasing

Use phrases like:

- Built decision systems
- Turned scattered signals into structured workflows
- Pricing as a control layer
- Made work measurable and reportable
- Connected data, tools, and operating workflows
- Translated business problems into product logic
- Improved visibility from source to outcome
- Reduced manual work through automation

---

## Homepage Positioning Copy

### Short Hero Line

```text
I build decision systems for messy client problems.
```

### Alternate Hero Lines

```text
I turn messy business workflows into measurable systems.
```

```text
I build pricing, analytics, and automation systems that help teams decide what to do next.
```

```text
I work where data science, product management, and business operations meet.
```

---

## Brand Summary

Thomas Cook's portfolio identity should be a clean, white-dominant personal brand built around a deep royal blue-green core, warm beige and brown accents, and precise SaaS-style layouts.

The brand should communicate analytical product thinking, pricing systems, automation, business intelligence, and calm executive credibility.

The logo should be a refined TC monogram: structured, minimal, and technical without relying on cliché data icons.

The final portfolio should feel like:

> A premium operating system for Thomas Cook's career.
