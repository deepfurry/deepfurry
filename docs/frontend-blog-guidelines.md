# DeepFurry Frontend Blog Guidelines

## Purpose

This repository is a static frontend blog / organization site. The goal is to keep the homepage clear, calm, and visually intentional while leaving room for future articles, projects, and contact information.

## Source of Truth

- HTML pages are the content source.
- Tailwind CSS is the styling source.
- TypeScript is used for the client entry and development tooling.
- Vite is the local dev server and production bundler.

## Project Structure

- `index.html`: homepage
- `pages/about.html`: about page
- `pages/projects.html`: projects page
- `pages/blog.html`: blog index
- `pages/contact.html`: contact page
- `src/tailwind.css`: Tailwind entry stylesheet
- `src/main.ts`: browser-side enhancement entry
- `scripts/dev.ts`: local dev launcher
- `vite.config.ts`: Vite multi-page configuration

## Content Rules

- Keep the homepage focused on one strong promise.
- Do not fill empty states with fake content.
- Prefer short headings and short supporting copy.
- Use plain language for utility pages and editorial language only when the page needs it.
- Every page should answer one main question.

## Visual Rules

- Use restraint before decoration.
- Reduce unnecessary rounded corners; keep radius only where it improves affordance.
- Prefer layout, scale, spacing, and contrast over stacked cards.
- The first viewport should feel like an editorial cover, not a dashboard.
- Motion should support hierarchy, not compete with content.

## TypeScript Rules

- New browser-side behavior should be written in TypeScript.
- New build or dev tooling should also be written in TypeScript.
- Avoid adding plain `.js` source files unless a third-party tool requires them.
- Keep runtime code small and progressive. The site should still read well if scripting is unavailable.

## Dev Workflow

```bash
npm install
npm run dev
```

- `npm run dev` starts the Tailwind watcher and the Vite dev server.
- Edit HTML, TS, or the Tailwind entry stylesheet and refresh in the browser.

## Build Workflow

```bash
npm run build
```

- The build first regenerates `css/style.css`.
- Vite then bundles the TypeScript entry and emits the multi-page site into `dist/`.

## Review Checklist

- Is the homepage visually calm but memorable?
- Is there one clear visual anchor on the first screen?
- Are rounded corners used sparingly?
- Are empty states honest?
- Does the page still make sense when you scan only the headings?
