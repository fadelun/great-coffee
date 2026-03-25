# Design System: The Editorial Monograph

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Digital Curator."** We are not building a standard utility; we are composing a high-end, editorial experience that mirrors the tactile luxury of a boutique coffee journal.

To break the "template" look, we move away from rigid, boxy layouts in favor of **Intentional Asymmetry**. Large-scale serif typography should bleed across sections, and imagery should overlap container boundaries to create a sense of depth and curated motion. The goal is to provide a "slow-tech" experience—one that encourages breathing room through massive whitespace and sophisticated tonal transitions rather than loud, distracting UI elements.

---

## 2. Colors: The Cream & Caramel Palette

Our palette is rooted in the warmth of a perfect brew. It uses a rich foundation of creams (`surface`) and deep roasted browns (`primary`).

### The Palette (Material Convention)

- **Surface Foundation:** `background: #fafaf5` | `surface: #fafaf5`
- **The Roast (Primary):** `primary: #371f17` (Deep Espresso) | `primary_container: #4f342b`
- **The Garnish (Secondary):** `secondary: #745b20` (Caramel)
- **The Canvas (Neutral Tiers):**
- `surface_container_low: #f4f4ef`
- `surface_container_high: #e8e8e3`
- `surface_container_highest: #e3e3de`

### Core Color Rules

- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To define boundaries, use background color shifts. For example, a featured article section should use `surface_container_low` to sit quietly against the `surface` background.
- **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper. A card (`surface_container_lowest: #ffffff`) should sit on a background of `surface_container_low` to create an organic lift.
- **The "Glass & Gradient" Rule:** For floating navigation or elevated modals, use **Glassmorphism**. Apply a semi-transparent `surface` color with a 12px backdrop-blur.
- **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary (#371f17)` to `primary_container (#4f342b)` at a 135-degree angle. This mimics the sheen of a polished coffee bean.

---

## 3. Typography: Editorial Sophistication

We use a high-contrast pairing of the elegant serif **Newsreader** for narrative elements and the modern sans-serif **Manrope** for functional clarity.

- **Display (Newsreader):** Use `display-lg` (3.5rem) and `display-md` (2.75rem) for hero statements. These should be set with a slightly tighter letter-spacing (-0.02em) to feel like a printed masthead.
- **Headline (Newsreader):** `headline-lg` (2rem) handles section titles. Always use `on_surface` (#1a1c19) to maintain an authoritative presence.
- **Body (Manrope):** `body-lg` (1rem) is our workhorse. Use a generous line-height (1.6) to ensure the "Editorial" feel isn't lost in dense blocks of text.
- **Label (Manrope):** `label-md` (0.75rem) should be used for metadata and small tags, often in uppercase with 0.05em tracking to differentiate from body text.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too aggressive for this aesthetic. We achieve hierarchy through **Ambient Light**.

- **The Layering Principle:** Depth is "stacked." Place a `surface_container_highest` element behind a `surface_container` element to create recess, or a `surface_container_lowest` element on top to create prominence.
- **Ambient Shadows:** For elements that truly "float" (like a shopping cart or a main menu), use a shadow with a 40px blur, 0px spread, and 4% opacity of the `on_surface` color. It should feel like a soft glow, not a hard drop.
- **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use the `outline_variant` (#d4c3bf) at **15% opacity**. Never use a 100% opaque border.
- **Roundedness:**
- **Cards/Sections:** `lg` (1rem) or `xl` (1.5rem) to maintain the "soft" brand personality.
- **Buttons:** `full` (9999px) for a premium, pebble-like feel.

---

## 5. Components

### Buttons

- **Primary:** Background: `primary` gradient. Text: `on_primary` (#ffffff). Shape: `full`. Padding: `1rem` (vertical) / `2rem` (horizontal).
- **Secondary:** Background: `surface_container_high`. Text: `primary`. Shape: `full`. No border.
- **Tertiary:** Text: `primary`. Style: Underlined with a 2px `secondary` offset. No container.

### Cards & Content Lists

- **Rule:** Forbid divider lines.
- **Execution:** Separate list items using `spacing-6` (2rem) of vertical white space. Use an image with `rounded-md` (0.75rem) as the anchor for each list item.

### Input Fields

- **Style:** Minimalist. No bounding box. Use a bottom-only `outline_variant` at 20% opacity. Upon focus, the line transitions to `primary` at 100% opacity.
- **Labels:** Always use `label-md` in `primary_fixed_variant` (#5d4037) to keep the warm tone.

### Signature Component: The "Editorial Feature" Card

A large-format card using `surface_container_low`. The image should be offset by `-1rem` on the X-axis, overlapping the container edge. The headline should use `headline-lg` in `Newsreader`, creating a layout that feels custom-designed for the content.

---

## 6. Do's and Don'ts

### Do

- **Do** use asymmetrical spacing. A left margin might be `spacing-12` (4rem) while the right is `spacing-24` (8.5rem) to create visual tension.
- **Do** prioritize high-quality photography of coffee textures, steam, and ceramics. The UI is the frame; the content is the art.
- **Do** use `on_surface_variant` (#504442) for secondary text to maintain the "warm" greyscale.

### Don't

- **Don't** use pure black (#000000). Use `primary` (#371f17) for the deepest tones.
- **Don't** use sharp 90-degree corners. Everything must feel "softened" and approachable.
- **Don't** overcrowd the screen. If you feel a section is too empty, add more whitespace, not more elements. In this design system, whitespace is a luxury asset.
