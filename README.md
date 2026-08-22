# 🌿 TIK TOK Mehndi — Premium Henna Cones Showcase

[![React Version](https://img.shields.io/badge/react-19.2.7-blue.svg?logo=react&logoColor=white)](https://react.dev)
[![Vite Version](https://img.shields.io/badge/vite-8.1.1-646CFF.svg?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4.3.2-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Routing](https://img.shields.io/badge/react--router--dom-v6.30.4-red.svg?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Locales](https://img.shields.io/badge/i18next-v26.3.6-26A69A.svg?logo=i18next&logoColor=white)](https://www.i18next.com)
[![Deployment](https://img.shields.io/badge/deployed_on-Vercel-black.svg?logo=vercel&logoColor=white)](https://vercel.com)

Welcome to the official repository for the **TIK TOK Mehndi** website. This website is a modern, blazing-fast, and search-engine-optimized Single Page Application (SPA) designed to showcase premium export-quality henna cones, stencils, and traditional beauty products. It serves as a digital catalog, informational guide, and direct customer engagement platform.

---

## 🌟 Key Website Features

- ✨ **Premium Product Showcase**: Highlighted presentation of core products—Red Cone (Fast Colour), Black Cone, Bridal Cone, and Herbal Cone—complete with rich product images and descriptions.
- 🎨 **Interactive Mehndi Stencils**: A catalog of easy-to-use reusable stencils with a fluid lightbox viewer, enabling users to browse and visualize traditional & modern designs.
- 🌐 **Multilingual Support (i18n)**: Out-of-the-box internationalization supporting English and French, equipped with automatic browser language detection.
- 📖 **SEO-Optimized Henna Blogs**: A structured blog system providing valuable tips on achieving dark stains naturally, festival-specific designs, and detailed product guides.
- 📹 **Video Demo Integration**: A dedicated media section to engage users with real-time video showcases of product applications.
- 📱 **Mobile-First & Fluid UI**: High-fidelity, responsive layout powered by **Tailwind CSS v4** and animated smoothly using **Framer Motion**.
- 💬 **Direct WhatsApp CTA**: Dynamic integrations enabling wholesalers, bridal artists, and retail customers to instantly connect with sales representatives via WhatsApp link generation.

---

## 🛠️ Tech Stack & Architecture

- **React 19**: Frontend UI framework utilizing the latest concurrent features, lazy loading, and suspense patterns.
- **Vite 8**: Frontend tooling for lightning-fast hot module replacement (HMR) and optimized assets building.
- **Tailwind CSS v4**: Utilizing the new `@tailwindcss/vite` plugin for a modern, build-time CSS compilation without separate configuration files.
- **Framer Motion**: Smooth scroll, hover, and conditional render animations for premium look-and-feel.
- **React Router DOM v6**: Seamless declarative client-side routing supporting home page, stencils gallery, blog catalog, and individual blog pages.
- **React Helmet Async**: Direct control over document headers (`<title>`, `<meta>`, canonical links) dynamically mapped per page route.
- **i18next**: Multilingual system using JSON-based translation catalogs loaded asynchronously via HTTP backends.
- **Oxlint**: Modern, ultra-fast linter used in place of ESLint for high-performance syntax checking and code consistency.

---

## 📂 Project Directory Structure

```text
mehndiwebsite/
├── public/                 # Static assets
│   ├── locales/            # Multi-language translation dictionaries
│   │   ├── en/             # English translations
│   │   └── fr/             # French translations
│   ├── images/             # Product, gallery, and slider webp images
│   └── favicon.webp        # Brand icon
├── src/
│   ├── components/         # Shared UI components
│   │   ├── blogs/          # Blog presentation components (Hero, Cards, Details)
│   │   └── ui/             # Reusable design elements (Buttons, Sections, Lightbox)
│   ├── data/               # Static mock data (e.g., blog posts catalog)
│   ├── design/             # Centralized design token system (theme, colors, typography)
│   ├── i18n/               # i18next initialization and configuration
│   ├── layout/             # Structure components (Navbar, Footer, Grid, Flex, Container)
│   ├── seo/                # SEO wrappers & document Head configuration
│   ├── sections/           # High-level homepage landing sections
│   ├── App.jsx             # Root layout & client-side routes mapping
│   ├── index.css           # Global styles and Tailwind v4 theme definitions
│   └── main.jsx            # Application entrypoint
├── index.html              # Main HTML entrypoint, SEO meta, & JSON-LD schema.org structures
├── package.json            # Scripts & project dependencies
├── vercel.json             # Custom rewrite configs for hosting SPA routing on Vercel
└── vite.config.js          # Vite plugins configuration (React + Tailwind v4)
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) (v18 or higher recommended) and npm installed.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project root directory:
   ```bash
   cd mehndiwebsite
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

### Production Build

To compile and optimize the assets for production deployment:
```bash
npm run build
```
The compiled build output will be stored in the `/dist` directory.

### Preview Build

To preview the production build locally before deploying:
```bash
npm run preview
```

### Linting

To run the high-performance Oxlint linter to check for errors or potential bugs:
```bash
npm run lint
```

---

## 🎨 Design System & Customization

### Centralized Theme Tokens
All theme configuration constants (colors, margins, borders, shadows, and z-indices) are configured under the `src/design/` directory. 
- You can easily modify the brand color scheme in [colors.js](file:///d:/mehndiwebsite/src/design/colors.js):
  ```javascript
  export const colors = {
    primary: "#930101", // Deep Mehndi Red Brown
    secondary: "#b8860b", // Dark Goldenrod
    accent: "#fdfbf7",    // Cream Background
    ...
  };
  ```

### Tailwind CSS Integration
The design system coordinates dynamically with Tailwind CSS v4 in [index.css](file:///d:/mehndiwebsite/src/index.css) using custom CSS variables:
```css
@theme {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --font-serif: "Times New Roman", Times, Georgia, serif;
}
```

---

## 🌐 Localization & Translations

The application supports language switching dynamically. Translations are loaded asynchronously from the public folder.

To add or update translations, edit the JSON files located at:
- 🇺🇸 English: [`public/locales/en/translation.json`](file:///d:/mehndiwebsite/public/locales/en/translation.json)
- 🇫🇷 French: [`public/locales/fr/translation.json`](file:///d:/mehndiwebsite/public/locales/fr/translation.json)

To support a new language:
1. Add a new directory under `public/locales/` matching the language code (e.g. `es` for Spanish).
2. Create a `translation.json` file inside the new folder.
3. Update the supported languages in the configuration at [src/i18n/index.js](file:///d:/mehndiwebsite/src/i18n/index.js):
   ```javascript
   supportedLngs: ['en', 'fr', 'es']
   ```

---

## 🔍 SEO & Rich Snippets

The site is built with a strong focus on Search Engine Optimization:
- **Meta Tags**: Included comprehensive tags for Open Graph (Facebook/Instagram/LinkedIn) and Twitter cards.
- **WhatsApp Preview**: Explicitly declared metadata sizes to ensure links shared via WhatsApp generate beautiful, large image cards.
- **JSON-LD Schema**: Implemented Structured Data inside [index.html](file:///d:/mehndiwebsite/index.html) to boost Google organic search indexing:
  - **Organization Schema**: Brand details, founders, support email, phone numbers, and social channels.
  - **Product Schema**: Highlights the flagship `TIK TOK Red Cone Fast Colour` with aggregated ratings (4.8/5 from 1,000+ reviews).
  - **WebSite Schema**: Search metadata.

---

## ☁️ Deployment

This project is configured to deploy directly to **Vercel** with SPA routing support:
- [vercel.json](file:///d:/mehndiwebsite/vercel.json) redirects all route requests to `index.html`, allowing `react-router-dom` to handle client-side routing correctly without returning 404 errors on subpages:
  ```json
  {
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "framework": "vite",
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

To trigger a deployment, push your changes to your linked Git repository (GitHub/GitLab/Bitbucket), and Vercel will automatically build and deploy the production site.
