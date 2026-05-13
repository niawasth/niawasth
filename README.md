# SNSN Fintech — Mortgage Broker Website

A modern, responsive website for SNSN Fintech, an Australian mortgage brokerage firm. Built with React and Vite.

🌐 **Live Site:** [https://niawasth.github.io/niawasth/](https://niawasth.github.io/niawasth/)

## Features

- **Modern UI** — Glassmorphism, animated gradient backgrounds, bento grids, floating orbs, and smooth transitions
- **Fully Responsive** — Optimised for desktop, tablet, and mobile
- **Fast** — Vite-powered build with code splitting and optimised assets
- **Accessible** — Semantic HTML, ARIA labels, keyboard-navigable
- **SEO-friendly** — Meta tags, structured headings, mortgage broker keyword-rich content
- **Auto-deploy** — GitHub Actions workflow deploys to GitHub Pages on every push
- **Custom Logo** — SVG logo and favicon for brand consistency

## Tech Stack

| Layer     | Technology       |
|-----------|-----------------|
| Framework | React 18        |
| Bundler   | Vite 5          |
| Styling   | CSS (no library)|
| Hosting   | GitHub Pages    |
| CI/CD     | GitHub Actions  |

## Getting Started

### Prerequisites

- Node.js 18+ (20 recommended)
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
niawasth/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── logo.svg                   # Full brand logo
│   └── favicon.svg                # Browser tab icon
├── src/
│   ├── components/
│   │   ├── Header.jsx / .css      # Fixed nav with logo & mobile menu
│   │   ├── Hero.jsx / .css        # Hero with animated orbs & dashboard card
│   │   ├── TrustBar.jsx / .css    # Animated lender marquee
│   │   ├── Services.jsx / .css    # 6 mortgage broker service cards
│   │   ├── About.jsx / .css       # Bento grid stats + features
│   │   ├── Process.jsx / .css     # 4-step broker journey
│   │   ├── Testimonials.jsx / .css# Client reviews
│   │   ├── CTA.jsx / .css         # Call-to-action banner
│   │   ├── Contact.jsx / .css     # Contact form + office info
│   │   └── Footer.jsx / .css      # Footer with logo, links & disclaimer
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles & CSS variables
├── index.html                     # HTML shell with favicon
├── vite.config.js                 # Vite configuration
└── package.json
```

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

### Setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment" source, select **GitHub Actions**
4. Push to `main` — the workflow builds and deploys automatically

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure DNS with your domain registrar
3. Update `base` in `vite.config.js` to `'/'`
4. Update the favicon href in `index.html` to `/favicon.svg`

## Configuration

| File              | Purpose                                      |
|-------------------|----------------------------------------------|
| `vite.config.js`  | Build config — update `base` if repo name changes |
| `src/index.css`   | Design tokens (colours, spacing, fonts)      |
| `public/logo.svg` | Brand logo used in header & footer           |
| `public/favicon.svg` | Browser tab icon                          |

## Customisation

- **Colours** — Edit CSS variables in `src/index.css` (`:root` block)
- **Content** — Edit text directly in each component file
- **Lenders** — Update the lender list in `src/components/TrustBar.jsx`
- **Contact info** — Update address/phone/email in `Contact.jsx` and `Footer.jsx`
- **Logo** — Replace `public/logo.svg` and `public/favicon.svg` with your own

## Repository

- **Remote:** https://github.com/niawasth/niawasth.git
- **Branch:** `main`

## Licence

This project is proprietary to SNSN Fintech Pty Ltd. All rights reserved.
