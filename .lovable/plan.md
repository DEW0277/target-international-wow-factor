
# TARGET International School – Premium Website

## Overview
A high-conversion, animated landing experience for TARGET International School built with **React, Vite, Tailwind CSS, and Framer Motion**. The site will capture attention within 3 seconds with a hero video background, smooth scroll-driven animations, and clear CTAs.

---

## Brand Colors (As Specified)
- **Primary Navy**: #042245 (70%)
- **Accent Red**: #EE1606 (CTAs only, 5%)
- **Light BG**: #EFF4F4 (25%)
- **Text Slate**: #586C7D
- **Neutral Gray**: #BBBAC2

---

## Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Home – Hero, carousels, stats, testimonials, CTA |
| `/about` | School history, mission, timeline, leadership |
| `/programs` | Academic programs with detailed cards |
| `/admissions` | Apply form, requirements, process timeline |
| `/team` | Staff profiles with filters |
| `/gallery` | Photo/video gallery with lightbox |
| `/contact` | Contact form, map placeholder, info |

---

## Key Features

### 1. Hero Section (Home)
- **Full-screen video background** with autoplay muted loop
- Gradient navy overlay for text readability
- Poster image fallback for slow connections
- Animated headline & subheadline (fade-up with stagger)
- Two CTA buttons:
  - "Apply for Admission" (Red, primary)
  - "Contact via Telegram" (Navy outline)
- Trust badges: International Curriculum, STEM & Robotics, IELTS Results, Safe Campus

### 2. Auto-Play Carousels
- **Programs Carousel**: 6 program cards, auto-rotates every 4s, pause on hover
- **Campus Life Carousel**: Photo highlights with lightbox on click
- Using Embla Carousel (already available)

### 3. Scroll Animations (Framer Motion)
- Section fade-up reveals on scroll
- Staggered card grid animations
- Animated stat counters (trigger on viewport entry)
- Timeline reveal on About page
- Accordion with smooth height transitions

### 4. Premium Navigation
- Sticky navbar: transparent at top → solid on scroll
- Active link indicators
- Smooth mobile menu with overlay
- Language dropdown (UZ/RU/EN)

### 5. Lead Capture & CTAs
- Floating Telegram button (always visible)
- Floating "Apply" button (appears after 20% scroll)
- Forms with react-hook-form + zod validation
- Phone input with +998 mask
- Success toast notifications
- Form submissions logged (console for now, Supabase-ready)

### 6. Multi-Language (i18n)
- Dictionary-based translation system
- LanguageProvider context with localStorage persistence
- Default: Uzbek, switchable to Russian/English
- All UI text via `t("key")` function

---

## Background Animations
- Subtle gradient blob animations (CSS-based)
- Floating SVG shapes with gentle movement
- Respects `prefers-reduced-motion`

---

## Components to Build
- Layout, Container, Navbar, Footer
- Button variants (primary/outline/ghost)
- AnimatedSection (scroll reveal wrapper)
- VideoHero
- ProgramsCarousel, HighlightsCarousel
- StatsCounter
- Accordion (FAQ)
- Modal/Lightbox
- Toast system
- LanguageSwitcher

---

## Content Approach
- Professional, parent-focused copy (no lorem ipsum)
- Realistic school programs: Cambridge Primary, STEM, Languages, etc.
- Compelling outcomes: exam results, university placements, safety

---

## Assets Structure
```
/public
  /videos/hero.mp4 (placeholder reference)
  /images/programs/...
  /images/gallery/...
  /images/team/...
```
Will use gradient fallbacks and placeholder images initially.

---

## Performance & Accessibility
- Lazy-load video with `preload="none"`
- Optimized images with proper dimensions
- Keyboard-accessible modals and menus
- `prefers-reduced-motion` support throughout
- Lighthouse-optimized structure

---

## Tech Additions Required
- **Framer Motion** for animations
- Existing: Embla Carousel, react-hook-form, zod, Tailwind

This plan delivers the premium, high-conversion experience you've specified, adapted to work seamlessly within Lovable's capabilities.
