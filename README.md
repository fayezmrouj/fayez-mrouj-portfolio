# Fayez Ahmad Mrouj — International Physics Educator

A premium personal brand website for an International Physics Educator with 28+ years of experience across Jordan and the UAE.

🌐 **Live site**: https://fayez-mrouj-portfolio.vercel.app

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Manrope (display) + Inter (body) via `next/font`
- **Theme**: next-themes (dark mode default)

## Features

- 🎨 Emerald + gold + warm-neutral design system (no blue/indigo)
- 🌙 Dark mode by default (with light mode toggle)
- 📱 Fully responsive (mobile / tablet / desktop)
- ⚡ Animated physics background (canvas-based orbiting electrons)
- 📜 Interactive vertical timeline (1996 → present)
- 🏆 Filterable certifications gallery (37+ entries, 12 categories)
- 🤖 Educational Innovation section (AI, Smart Learning, Alef, Prompt Engineering)
- 🎯 Flagship Project showcase: Interactive Physics Platform
- 📺 YouTube channel + Facebook page cards
- 📨 Working contact form (API route + toast notifications)
- 📄 Downloadable professional CV (auto-generated PDF)
- 🔍 Full SEO: Open Graph, Twitter Cards, JSON-LD Person schema, sitemap.xml, robots.txt

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, SEO, JSON-LD, ThemeProvider
│   ├── page.tsx            # Single-page composition of all sections
│   ├── globals.css         # Tailwind + design tokens (light/dark)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   └── api/contact/route.ts # Contact form handler
├── components/
│   ├── sections/           # Hero, About, Journey, Philosophy, Expertise,
│   │                       # Innovation, Achievements, Certifications,
│   │                       # Gallery, ResourcesBlog, Contact, Footer
│   ├── navbar.tsx          # Sticky nav with active-section observer
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Animated dark/light switch
│   ├── physics-background.tsx # Canvas animation
│   ├── section-heading.tsx # Reusable section header
│   ├── animated.tsx        # AnimatedSection + AnimatedCounter
│   ├── icon.tsx            # Lucide icon resolver
│   └── back-to-top.tsx
├── lib/
│   ├── content.ts          # All site content (single source of truth)
│   └── utils.ts            # shadcn utility
public/
├── portrait.jpg            # Personal photo (NEW)
├── portrait.png            # Personal photo (PNG fallback)
├── logo-fayez.png          # Personal logo
├── Fayez-Mrouj-CV.pdf      # Auto-generated CV (regenerate via scripts/generate_cv.py)
├── Fayez-Mrouj-CV.docx     # Original CV (source)
└── robots.txt              # Static fallback
```

## Local Development

```bash
# Install dependencies
bun install   # or: npm install

# Run dev server
bun run dev   # or: npm run dev

# Build for production
bun run build # or: npm run build
```

Visit http://localhost:3000

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | The public URL of your deployed site (no trailing slash) | `https://fayez-mrouj-portfolio.vercel.app` |

Set this in your Vercel project settings → Environment Variables after deployment.

## Regenerating the CV

The CV PDF (`public/Fayez-Mrouj-CV.pdf`) is auto-generated from the same data source as the website.

```bash
python3 scripts/generate_cv.py
```

Requires: `reportlab`, `Pillow`. The script reads `/public/portrait.jpg` and outputs the PDF.

## Deployment

This site is deployed on Vercel. Push to GitHub → connect to Vercel → auto-deploy.

See `DEPLOYMENT.md` for step-by-step instructions.

---

© Fayez Ahmad Mrouj. All rights reserved.
