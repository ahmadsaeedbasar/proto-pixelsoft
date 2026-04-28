# Project Requirements

## Overview
This repository is a React + Vite portfolio site for the ProtoDesignAgency portfolio project. It is built using TypeScript, React Router, Tailwind CSS, and modern UI primitives.

## System requirements
- Node.js 20.x (specified in `.nvmrc`)
- npm (or compatible package manager)
- Modern browser for development and production use

## Required dependencies
The project relies on the following runtime dependencies:
- `react` / `react-dom` (peer dependencies 18.3.1)
- `@mui/material` and `@mui/icons-material`
- `@emotion/react` and `@emotion/styled`
- `@radix-ui/react-*` UI primitives for accessible components
- `react-router` for client-side routes
- `tailwindcss` v4.1.12 through `@tailwindcss/vite`
- `motion` for animation
- `recharts` for chart visuals
- `react-slick` and `embla-carousel-react` for carousel features
- `react-hook-form` for form handling
- `sonner` for toast notifications
- `react-dnd` / `react-dnd-html5-backend` for drag-and-drop interactions
- `react-popper` for popovers and tooltip positioning
- `react-day-picker` for date selection
- `tw-animate-css` for animation utility classes
- `class-variance-authority`, `clsx`, and `tailwind-merge` for class composition

## Dev dependencies
The development toolchain includes:
- `vite` 6.3.5
- `@vitejs/plugin-react` 4.7.0
- `typescript-eslint` 8.56.1
- `eslint` 9.39.3 and `@eslint/js` 9.39.3
- `eslint-plugin-react-hooks` 5.2.0
- `eslint-plugin-react-refresh` 0.4.26
- `vitest` 2.1.9
- `@tailwindcss/vite` 4.1.12
- `tailwindcss` 4.1.12

## Environment and configuration
- `package.json` defines scripts for development, build, preview, lint, and tests.
- `vite.config.ts` configures Vite for React and project assets.
- `tailwind.css` and `theme.css` define the styling pipeline.
- `postcss.config.mjs` is used by Vite for CSS processing.

## Supported routes
The application exposes the following pages:
- `/` - Landing page
- `/services` - Services page
- `/products` - Products page
- `/internship` - Internship page
- `/research` - Research page
- `/contact` - Contact page

## Build and running
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production assets: `npm run build`
- Preview production output: `npm run preview`
- Lint code: `npm run lint`
- Fix lint issues: `npm run lint:fix`
- Run tests: `npm run test`
- Run tests in watch mode: `npm run test:watch`

## Deployment requirements
- Host as a single-page app (rewrite unknown routes to `index.html`)
- Optional base path support via `VITE_BASE_PATH=/your-subpath/ npm run build`

## Developer expectations
- Use TypeScript and strict typing when adding code
- Follow the existing UI component conventions in `src/app/components/ui`
- Keep styling within Tailwind utility and component-based class patterns
- Reuse `ROUTES` from `src/app/routePaths.ts` for navigation and links
- Keep page structure consistent with current route modules

## Notes
- `package-lock.json` is used for deterministic installs
- `node_modules` should not be committed to source control
- Use `git` branches for feature work and keep changes scoped to the portfolio layout and page components
