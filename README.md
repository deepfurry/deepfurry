# DeepFurry Website

[![Deploy Status](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml/badge.svg)](https://github.com/DeepFurry/DeepFurry/actions/workflows/static.yml)

Static organization website for DeepFurry, built with HTML, TypeScript, Vite, and a Tailwind CSS build step.

## Stack

- Static HTML pages
- TypeScript browser entry and dev tooling
- Vite multi-page dev server and bundler
- Tailwind CSS CLI
- GitHub Pages
- GitHub Actions for build and deploy

## Local development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the production CSS and the deployable site:

```bash
npm run build
```

Watch Tailwind while editing HTML:

```bash
npm run watch:css
```

## Project structure

- `src/tailwind.css`: Tailwind entry file
- `src/main.ts`: browser-side enhancement entry
- `css/style.css`: generated CSS output
- `pages/`: static subpages
- `scripts/dev.ts`: local dev launcher
- `vite.config.ts`: Vite multi-page configuration
- `docs/frontend-blog-guidelines.md`: project conventions
- `.github/workflows/static.yml`: GitHub Pages workflow

## Deployment

GitHub Pages is deployed from GitHub Actions. The workflow:

1. installs npm dependencies
2. builds Tailwind CSS
3. bundles the TypeScript entry and pages into `dist/`
4. uploads `dist/` to GitHub Pages
