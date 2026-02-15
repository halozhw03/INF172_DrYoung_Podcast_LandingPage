# Young and Hungry — Podcast Landing Page

A podcast landing page built with React, TypeScript, Vite, and GSAP.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/       # React components
│   ├── Header/
│   ├── Hero/
│   ├── WhoAreWe/
│   ├── EmpowerCards/   # Flip cards (Parents / Teachers) with GSAP
│   ├── HostProfiles/
│   ├── EpisodesList/
│   └── Footer/
├── data/
│   └── content.ts     # All copy and content — edit here
├── styles/
│   ├── variables.css  # Design tokens
│   └── global.css     # Global styles
└── main.tsx
```

## Replacing Assets

- **Hero video**: Replace the `Video` placeholder in `Hero.tsx` with your YouTube/Vimeo embed or video element.
- **Hero illustration**: Replace the `Illustration` placeholder with your hero image (boy + robot, etc.).
- **Empower cards**: Replace the circular image placeholders in `EmpowerCards.tsx` with Parents/Teachers illustrations.
- **Host photos**: Replace the `Photo` placeholders in `HostProfiles.tsx` with headshot image paths.
- **Header icons**: Replace the letter placeholders (S, A, Y, X) with actual SVG icons for Spotify, Apple Podcasts, YouTube, X.

All placeholder locations are marked with comments in the code.

## Features

- **Flip cards**: Interactive Parents/Teachers cards with GSAP 3D flip animation
- **Accessibility**: `aria-expanded`, keyboard (Enter/Space), `prefers-reduced-motion` fallback (fade instead of 3D flip)
- **Responsive**: Desktop-first, works on tablet and mobile
- **Design system**: Warm palette, IBM Plex Sans, WCAG AA contrast

## Build

```bash
npm run build
npm run preview   # Preview production build
```

## Deploy to GitHub Pages

1. Push the code to GitHub. The workflow will run automatically on push to `main`.
2. In your repo: **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions** (instead of "Deploy from a branch").
4. After the workflow completes, the site will be live at `https://<username>.github.io/INF172_DrYoung_Podcast_LandingPage/`.
