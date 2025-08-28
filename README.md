# Essentis Website

A clean, minimal website for **Essentis** - built with Next.js 15, TypeScript, and plain CSS.

## 🚀 Live Demo

**https://guillemperdigo.github.io/essentis-website/**

Build rock-solid software. Ship useful data products.

## 📋 Features

- **Next.js 15** with App Router and Static Export
- **TypeScript** for type safety
- **Plain CSS** - no external UI libraries
- **Responsive design** that works on all devices
- **Clean, minimal aesthetic** with centered content
- **SEO optimized** with proper metadata
- **GitHub Pages ready** with automated deployment
- **Zero dependencies** beyond Next.js core

## 🏗️ Project Structure

```
essentis-website/
├── src/
│   └── app/
│       ├── about/
│       │   └── page.tsx          # About page
│       ├── contact/
│       │   └── page.tsx          # Contact page
│       ├── privacy/
│       │   └── page.tsx          # Privacy policy
│       ├── imprint/
│       │   └── page.tsx          # Legal imprint
│       ├── globals.css           # Global styles
│       ├── layout.tsx            # Root layout with header/footer
│       └── page.tsx              # Homepage
├── public/                       # Static assets (SVG icons)
├── out/                          # Generated static export (after build)
├── next.config.js                # Next.js config with GitHub Pages settings
├── deploy.sh                     # Deployment script for GitHub Pages
├── package.json
└── README.md
```

### GitHub Pages Branch Structure

The `gh-pages` branch contains only the built static files:

```
gh-pages branch:
├── index.html                    # Main page
├── .nojekyll                     # Prevents Jekyll processing
├── _next/                        # Next.js assets with base path
├── about/index.html              # About page
├── contact/index.html            # Contact page
├── privacy/index.html            # Privacy page
├── imprint/index.html            # Imprint page
├── favicon.ico
└── *.svg                         # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/guillemperdigo/essentis-website.git
cd essentis-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

- **Home** (`/`) - Hero section with services overview
- **About** (`/about`) - Company working principles
- **Contact** (`/contact`) - Get in touch via email
- **Privacy** (`/privacy`) - Privacy policy placeholder
- **Imprint** (`/imprint`) - Legal information placeholder

## 🎨 Design Principles

- **Minimal & Clean** - Focus on content over decoration
- **Readable Typography** - System fonts for optimal readability
- **Responsive First** - Mobile-friendly design that scales up
- **Accessible** - Proper semantic HTML and color contrast
- **Fast Loading** - No external dependencies or heavy assets

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production (creates static export in 'out/')
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages (build + deploy to gh-pages branch)
```

### Code Style

- **TypeScript** for all components
- **Functional components** with React hooks
- **CSS classes** following BEM-like naming
- **Semantic HTML** for accessibility

## 📦 Build & Deploy

### GitHub Pages Deployment (Recommended)

This project is configured for GitHub Pages with automated deployment:

```bash
# Deploy to GitHub Pages (builds and pushes to gh-pages branch)
npm run deploy
```

The deployment script:
1. Builds the project with static export
2. Switches to the `gh-pages` branch
3. Copies built files to the branch root
4. Commits and pushes to GitHub
5. Returns to your original branch

**Live site**: https://guillemperdigo.github.io/essentis-website/

### Manual Build

```bash
# Build static export locally
npm run build
# Output will be in the 'out/' directory
```

### Configuration for GitHub Pages

The project includes:
- `next.config.js` with `output: 'export'` and base path configuration
- Production-only base path: `/essentis-website`
- Image optimization disabled for static export
- `.nojekyll` file to prevent Jekyll processing

### GitHub Pages Setup

To set up GitHub Pages for your fork:

1. **Fork this repository**
2. **Enable GitHub Pages** in repository Settings:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. **Update the base path** in `next.config.js`:
   ```javascript
   basePath: isProd ? '/your-repo-name' : '',
   assetPrefix: isProd ? '/your-repo-name/' : '',
   ```
4. **Deploy**: Run `npm run deploy`

### Deploy to Other Platforms

As a static site, this can also be deployed to:
- **Netlify** (drag & drop the `out/` folder)
- **Vercel** (import from GitHub)
- **AWS S3 + CloudFront**
- **Surge.sh**
- Any static hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Technical Details

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Plain CSS with CSS custom properties
- **Deployment**: GitHub Pages with static export
- **Build Output**: Static HTML/CSS/JS files
- **Base Path**: Configured for GitHub Pages subdirectory deployment

## 📞 Contact

**Essentis** - [hello@essentis.tech](mailto:hello@essentis.tech)

**Live Site**: https://guillemperdigo.github.io/essentis-website/

---

Built with ❤️ using Next.js 15 and TypeScript • Deployed on GitHub Pages