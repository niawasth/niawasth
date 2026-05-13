# SNSN Fintech — Mortgage Broker Website

A modern, responsive website for SNSN Fintech, an Australian mortgage brokerage firm. Built with React and Vite.

🌐 **Live Site:** [https://your-username.github.io/snsn-fintech/](https://your-username.github.io/snsn-fintech/)

## Features

- **Modern UI** — Glassmorphism, animated gradient backgrounds, bento grids, and smooth transitions
- **Fully Responsive** — Optimised for desktop, tablet, and mobile
- **Fast** — Vite-powered build with code splitting and optimised assets
- **Accessible** — Semantic HTML, ARIA labels, keyboard-navigable
- **SEO-friendly** — Meta tags, structured headings, descriptive content
- **Auto-deploy** — GitHub Actions workflow deploys to GitHub Pages on every push

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
snsn-fintech/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── src/
│   ├── components/
│   │   ├── Header.jsx / .css      # Fixed nav with mobile menu
│   │   ├── Hero.jsx / .css        # Hero with animated orbs & dashboard card
│   │   ├── TrustBar.jsx / .css    # Animated lender marquee
│   │   ├── Services.jsx / .css    # 6 mortgage broker service cards
│   │   ├── About.jsx / .css       # Bento grid stats + features
│   │   ├── Process.jsx / .css     # 4-step broker journey
│   │   ├── Testimonials.jsx / .css# Client reviews
│   │   ├── CTA.jsx / .css         # Call-to-action banner
│   │   ├── Contact.jsx / .css     # Contact form + office info
│   │   └── Footer.jsx / .css      # Footer with links & disclaimer
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles & variables
├── index.html                     # HTML shell
├── vite.config.js                 # Vite configuration
└── package.json
```

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions.

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

## Configuration

| File              | Purpose                                      |
|-------------------|----------------------------------------------|
| `vite.config.js`  | Build config — update `base` if repo name changes |
| `src/index.css`   | Design tokens (colours, spacing, fonts)      |

## Customisation

- **Colours** — Edit CSS variables in `src/index.css` (`:root` block)
- **Content** — Edit text directly in each component file
- **Lenders** — Update the lender list in `src/components/TrustBar.jsx`
- **Contact info** — Update address/phone/email in `Contact.jsx` and `Footer.jsx`

## Licence

This project is proprietary to SNSN Fintech Pty Ltd. All rights reserved.
