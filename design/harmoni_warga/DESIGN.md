---
name: Harmoni Warga
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#005683'
  on-tertiary: '#ffffff'
  tertiary-container: '#006fa8'
  on-tertiary-container: '#dbecff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
---

## Brand & Style

This design system establishes a welcoming, dependable, and highly accessible civic experience tailored for Indonesian neighborhood administration (Rukun Tetangga & Rukun Warga). The visual identity balances community warmth (*gotong royong*, kinship, transparency) with modern civic efficiency, replacing cumbersome physical bureaucracy with streamlined digital self-service.

The target audience spans diverse demographics, ranging from digitally fluent young householders to senior residents serving on RT/RW councils. The interface prioritizes clarity, non-intimidating interactions, legible text scales, and unequivocal visual hierarchy.

The design movement combines **Modern Civic Utility** with **Tactile Warmth**:
- Generous touch targets and crisp visual grouping via card containers.
- Calming natural greens evoking safety, flourishing neighborhoods, and public service.
- High-contrast visual cues and unmistakable status badges ensuring transparent governance (e.g., fee collection, permit letters, security patrols).
- An approachable, respectful, and reassuring digital environment free of dense bureaucratic clutter.

## Colors

The palette is engineered around civic trust, community vitality, and absolute operational clarity:

- **Primary (`#0F766E` - Deep Teal / Forest Spruce):** Represents collective well-being, trust, and institutional stability. Anchors the primary navigation, core CTAs, verified badges, and system headers.
- **Secondary Accent (`#F59E0B` - Warm Amber):** Denotes active citizen alerts, pending contributions (*iuran*), dues notices, and community announcements requiring attention.
- **Tertiary Accent (`#0284C7` - Civic Blue):** Reserved for administrative documentation, public notices, and utility links (letters of domicile, RT approvals).
- **Neutral Core (`#0F172A` - Slate Deep):** Ensures high-legibility text contrast that comfortably complies with WCAG AAA standards for body content.
- **Surfaces & Grounds:**
  - Base canvas: `#F8FAFC` (Light Slate Tint), softening eye strain while maintaining distinction against elevated surfaces.
  - Surface cards: `#FFFFFF` (Pure White) with subtle `#E2E8F0` structural outlines.
  - Success/Resolved: `#16A34A` (*Selesai*).
  - Warning/Pending: `#D97706` (*Menunggu*).
  - In Progress: `#0284C7` (*Diproses*).
  - Critical/Urgent: `#DC2626` (*Darurat / Tombol Panik*).

## Typography

The design system exclusively relies on **Plus Jakarta Sans**, a typeface born from modern Indonesian civic identity. Its geometric bones paired with humanist aperture curves communicate contemporary authority, warm approachability, and exceptional legibility across small mobile displays.

- **Legibility for All Ages:** Standard body copy is locked at a generous `16px` base for general reads and never dips below `13px` for supporting context, ensuring elder community members can digest notices without strain.
- **Numbers and Dues:** All currency and quota displays (*Iuran Bulanan*, RT funds) use tabular figures and bold weights (`700`) to avoid misreading financial records.
- **Hierarchical Discipline:** Section titles rely on confident semi-bold and bold weights to provide instant scanning while moving through community feeds, billing summaries, and emergency panels.

## Layout & Spacing

This mobile-first design system employs a strict 4px/8px incremental spatial rhythm to ensure visual balance and rapid component stacking:

- **Mobile Viewport (Primary):** Standard single-column flow with `margin-mobile` (16px) lateral padding. Fast-action service grids (*Surat Pengantar*, *Lapor Ronda*, *Tagihan Iuran*) use a compact 4-column sub-grid with an 8px (`space-sm`) gap.
- **Tablet / Large Screen Viewport (RT Dashboard / Officer Mode):** Expands to an 8-column layout with 24px margins, reflowing citizen lists and administrative review queues side-by-side.
- **Vertical Rhythm:** Content sections are grouped using `space-xl` (24px) dividers, while interactive form fields and list rows observe `space-md` (12px) to `space-lg` (16px) separation for effortless finger tapping.
- **SafeArea Compliance:** Mobile views incorporate dedicated bottom padding (at least 80px) to clear persistent community navigation bars and floating quick-action buttons.

## Elevation & Depth

To maintain a clean civic appearance without visual noise, the design system employs **Tonal Layering with Whispering Ambient Shadows**:

- **Layer 0 (Canvas Base):** Flat `#F8FAFC`. Houses background canvas and screen containers.
- **Layer 1 (Cards & Feed Tiles):** White `#FFFFFF` with a crisp structural hairline border (`1px solid #E2E8F0`) and an ambient shadow: `0px 1px 3px rgba(15, 23, 42, 0.05)`.
- **Layer 2 (Floating Inputs, Modals & Active Dropdowns):** Subtle elevated surface with `0px 4px 14px -2px rgba(15, 23, 42, 0.08)` and `1px solid #CBD5E1`.
- **Layer 3 (Sticky Headers & Urgent Alerts):** Backed by high-density glassmorphism (`rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(12px)`) and a lower separation border (`#E2E8F0`).
- **Emergency / Panic Layer:** Deep elevated shadow tinted with alert tones (`0px 8px 24px -4px rgba(220, 38, 38, 0.3)`) to draw instant focus during community security alerts.

## Shapes

The design system incorporates **Roundedness Level 2 (Rounded)**:
- Standard elements (inputs, interactive cards, status chips) feature `0.5rem` (8px) corner curvature, lending a clean and dependable structure.
- Large cards and notification banners scale to `rounded-lg` (`1rem` / 16px) for an approachable, friendly feeling.
- Hero action containers and floating modal sheets utilize `rounded-xl` (`1.5rem` / 24px).
- Status badges and quick citizen filters (*pill style*) apply full circular bounding radii (`9999px`) to create clear differentiation between actionable inputs and informational tags.

## Components

### Buttons
- **Primary Action (Kirim Laporan, Bayar Iuran):** Solid Teal (`#0F766E`) background, white text, bold `label-lg`, 48px minimum height for thumb precision, corner radius of `8px`. Active press scales to 98% with `#0D655E`.
- **Secondary Action (Simpan Draft, Detail):** White surface with `1.5px solid #0F766E`, text color `#0F766E`.
- **Panic Action (Tombol Darurat Ronda):** Full-bleed red tone (`#DC2626`), high-elevation amber-red shadow, bold tactile styling with confirmation hold-down gesture.

### Status Badges (*Status Warga & Pelaporan*)
Pill-shaped containers (`rounded-full`) with `12px` padding horizontal and `4px` vertical, featuring uppercase/bold `label-sm` typography:
- **Menunggu (Pending):** Background `#FEF3C7`, text `#B45309`, border `#FDE68A`.
- **Diproses (In Review):** Background `#E0F2FE`, text `#0369A1`, border `#BAE6FD`.
- **Selesai (Completed):** Background `#DCFCE7`, text `#15803D`, border `#BBF7D0`.
- **Ditolak (Rejected):** Background `#FEE2E2`, text `#B91C1C`, border `#FECACA`.

### Citizen Service Cards & Grids
- **Quick Service Grid:** Grid cards feature a white background, hairline `#E2E8F0` border, `16px` padding, centered rounded icon badge (`48x48px`) in soft tinted primary (`#CCFBF1`), and concise 2-line title.
- **Announcement / Broadcast Cards:** Emphasize community transparency; feature header metadata (e.g., "Pengurus RT 03", timestamp), clear paragraph hierarchy, and optional high-contrast image embeds with `8px` corner radius.

### Input Fields & Selectors
- Background `#FFFFFF` surrounded by `1px solid #CBD5E1`.
- Height: 48px to accommodate ergonomic thumb input.
- Focus state switches border to `2px solid #0F766E` with a soft teal outer focus ring (`box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15)`).
- Clear, sticky labels sitting outside the field with descriptive helper text below (`body-sm`).

### Lists & Activity Feeds
- Clean row architecture separated by `1px solid #F1F5F9`.
- Left-aligned categorical iconography with standard avatar circles (`40x40px`) for citizen identity.
- Right-aligned timestamp and status badge ensuring single-scan status verification for household members.