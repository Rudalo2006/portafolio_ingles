---
name: Modern Academy Design System
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b1f'
  surface-container: '#1e1f23'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e7'
  on-surface-variant: '#c4c6ce'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#2f3034'
  outline: '#8e9198'
  outline-variant: '#44474d'
  surface-tint: '#b2c8e9'
  primary: '#b2c8e9'
  on-primary: '#1b314c'
  primary-container: '#4d627f'
  on-primary-container: '#c8deff'
  inverse-primary: '#4b607d'
  secondary: '#e4beb7'
  on-secondary: '#422a26'
  secondary-container: '#5b403b'
  on-secondary-container: '#d1ada6'
  tertiary: '#e4c28a'
  on-tertiary: '#412d03'
  tertiary-container: '#775d2f'
  on-tertiary-container: '#fbd89f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#b2c8e9'
  on-primary-fixed: '#031c36'
  on-primary-fixed-variant: '#334864'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#e4beb7'
  on-secondary-fixed: '#2b1612'
  on-secondary-fixed-variant: '#5b403b'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#e4c28a'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5a4317'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343439'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4.25rem
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: 3rem
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: '0'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Source Sans 3
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system delivers a refined, contemporary educational aesthetic built for adult learners, ambitious professionals, and global scholars seeking high-caliber English fluency. Moving away from casual, gamified language apps, the visual direction embraces academic rigor married with modern executive polish.

The style operates at the intersection of **Corporate / Modern** and **Architectural Minimalism**. It conveys composure, intellectual focus, and unwavering reliability through a dark, distraction-free environment. High visual contrast pairs with precise typography to establish authority and clear institutional trust, ensuring students feel invested in a premium, transformative learning journey.

## Colors

The palette establishes an immersive, focused dark canvas structured around deep tonal separation and architectural highlights:

- **Canvas & Primary Surface (`#191A1E`):** Anchors the master viewports, providing a deep, distraction-free base that minimizes eye fatigue during extended reading and study sessions.
- **Secondary Surface & Section Tier (`#2D2A35`):** A warm, dark purple-gray reserved for alternate structural bands, card containers, interactive groupings, and side navigation rails.
- **Primary Accent (`#4D627F`):** A muted steel blue providing clear, non-aggressive focal points for key action buttons, badges, active progress states, and key navigational highlights.
- **Secondary Accent & Boundary (`#4D342F`):** A deep espresso brown used for low-contrast structural borders, card edges, dividers, and grounding decorative contours.
- **Text & Foreground Luminance (`#EFFFFA`):** An illuminated off-white with an imperceptible cool mint tint, delivering crisp contrast for body typography, critical stats, and selective inverted cards without harsh glare.

## Typography

Typographic hierarchy emphasizes structural order and high reading speed. 

- **Headlines (`Inter`):** Inter delivers technical exactness and geometric balance. It anchors headings, navigation anchors, metrics, and callouts. Negative letter spacing is applied to large sizes to enhance cohesion.
- **Body & Editorial Content (`Source Sans 3`):** Source Sans 3 provides humanized letterforms, generous open counters, and proven legibility across dense curriculum guides, course descriptions, and lesson overviews.
- **Scale Discipline:** Large viewport headlines step down proportionally on mobile targets (using dedicated mobile tokens) to prevent word breaks and visual congestion.

## Layout & Spacing

The layout is constructed on a 12-column responsive fluid grid with a maximum content container width of 1280px to preserve comfortable optical margins on ultra-wide screens.

- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, and dynamic horizontal margins starting at 48px (`3rem`).
- **Tablet (768px – 1023px):** 8 columns, 20px (`1.25rem`) gutters, and 32px (`2rem`) margins. Multi-column cards shift to 2-column matrices.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, and 20px (`1.25rem`) margins. Content shifts into a single-column stacked hierarchy.
- **Vertical Rhythm:** Structural sections deploy `space-2xl` (`4rem`) to create clean editorial breathing room. Element clusters within cards utilize `space-sm` through `space-md`.

## Elevation & Depth

Visual hierarchy is constructed primarily through **tonal layering** and **low-contrast architectural outlines** rather than heavy drop shadows:

1. **Canvas (Base 0):** `#191A1E` provides the foundational depth.
2. **Layer 1 Surfaces:** Container cards and alternating sectional ribbons sit at `#2D2A35`, separated from the base by a 1px border rendered in `#4D342F` (opacity 60–80%).
3. **Layer 2 Interactive Overlays & Modals:** Modals, tooltips, and elevated flyouts utilize `#2D2A35` complemented by subtle ambient diffusion: `0 8px 32px -4px rgba(0, 0, 0, 0.45)`.
4. **Light Card Variations:** Specialized showcase cards leverage `#EFFFFA` as an inverted background with text rendered in `#191A1E` and subtle steel-blue accent details to immediately catch viewer attention.

## Shapes

The shape vocabulary uses restrained, tailored corners with a base roundedness index of **1 (Soft)**:

- Standard controls, inputs, tags, and small cards employ `0.25rem` (4px).
- Main structural containers and showcase modules utilize `0.5rem` (8px).
- Modals, prominent banners, and hero card elements use `0.75rem` (12px).

This subtle curvature preserves an architectural, clean, and serious tone without the casual playfulness of heavy pill shapes or the harshness of raw right angles.

## Components

### Buttons
- **Primary:** Background `#4D627F`, text `#EFFFFA`, border none, 4px border radius. Hover state lightens tone by 8% and introduces a faint outer glow (`0 0 12px rgba(77, 98, 127, 0.4)`).
- **Secondary / Outline:** Background transparent, text `#EFFFFA`, 1px solid border in `#4D627F`. Hover fills with 12% opacity `#4D627F`.
- **Tertiary / Subtle:** Text `#EFFFFA`, transparent background. Hover state shows underline in `#4D627F`.

### Input Fields & Selects
- Background `#191A1E` set into `#2D2A35` card tiers.
- Border 1px solid `#4D342F`, radius 4px.
- Text `#EFFFFA`, placeholder text muted to 40% opacity.
- Focus state brings a 1px outline of `#4D627F` with zero blur offset.

### Cards
- **Dark Tier (Standard):** `#2D2A35` background with 1px border in `#4D342F`, 8px corner radius. Padding is locked to `space-lg` (`1.5rem`).
- **Inverted Showcase Card:** `#EFFFFA` background with `#191A1E` typography and `#4D627F` accent badges, reserved for top tier pricing or admissions calls to action.

### Chips & Badges
- **Curriculum / Level Badges:** Background `#191A1E`, border 1px solid `#4D627F`, typography `label-sm` in `#EFFFFA`.
- **Status / Enrollment Indicator:** Muted background tint with 4px pill-dot indicator.

### Lists & Feature Highlights
- Course module lists feature subtle horizontal dividing rules in `#4D342F` with 30% alpha.
- Checkmarks and bullet accents use `#4D627F` glyphs for disciplined consistency.

### Checkboxes & Radios
- Size 16px x 16px, 2px radius for checkboxes, full circle for radios.
- Unselected: 1.5px border `#4D342F`, surface `#191A1E`.
- Selected: Solid background `#4D627F` with `#EFFFFA` check mark indicator.