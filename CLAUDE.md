# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16.2.1** with App Router (note: this version has breaking changes from earlier Next.js)
- **React 19** with TypeScript
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **shadcn/ui** (base-nova style) with `lucide-react` icons
- **Framer Motion** for animations

### Directory Structure
```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # React components (Navbar, Footer, Hero, etc.)
├── context/       # React contexts (CartContext for shopping cart)
└── lib/           # Utilities (utils.ts) and data (data.ts)
```

### Key Patterns

**Client/Server Split:**
- `layout.tsx` is a Server Component that wraps children in `ClientProviders`
- `ClientProviders` wraps the app with `CartProvider` and renders `CartSidebar`
- Components needing state/hooks use `"use client"` directive

**Cart System:**
- `CartContext` provides global cart state via `useCart()` hook
- Cart items extend `MenuItem` with a `quantity` field
- Price parsing expects format `"$5.50"` (dollar sign + number)

**Data Layer:**
- `src/lib/data.ts` is the single source of truth for:
  - `MenuItem` type and `menuItems` array
  - `businessInfo` object (address, contact, hours, social)
  - `navLinks`, `categories`, `testimonials`, `processSteps`

**Path Aliases:**
- `@/*` maps to `./src/*` (e.g., `@/components`, `@/lib`, `@/context`)

## Design System

This project follows "The Editorial Monograph" design system documented in `_docs/design-system.md`. Key principles:

**Colors:**
- Surface: `#fafaf5` (cream background)
- Primary: `#371f17` (deep espresso) - use instead of black
- Secondary: `#745b20` (caramel)
- Use tonal layering via `surface_container_*` variants instead of borders

**Typography:**
- Display/Headlines: **Newsreader** (serif)
- Body/Labels: **Manrope** (sans-serif)

**Styling Rules:**
- No 1px solid borders - use background color shifts for separation
- Rounded corners: `lg`/`xl` for cards, `full` for buttons
- Soft shadows with low opacity (4%) for floating elements
- Prioritize whitespace over additional UI elements

## Next.js Version Notes

This project uses Next.js 16 with breaking changes. When working with APIs or file structure, consult the guides in `node_modules/next/dist/docs/` for version-specific documentation.
