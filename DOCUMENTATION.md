# ProtoDesignAgency Portfolio Documentation

## Project purpose
This repository is a portfolio website for a design agency, built to showcase services, products, research, internship details, and contact information. It is implemented as a production-ready Vite + React single-page application.

## Project structure
- `src/main.tsx`: application entry point
- `src/app/App.tsx`: renders the React Router provider
- `src/app/routes.ts`: route configuration using React Router
- `src/app/routePaths.ts`: central route constants and legacy redirects
- `src/app/pages/`: top-level page components for each route
- `src/app/components/`: reusable page components and layout pieces
- `src/app/components/ui/`: design system UI primitives and utility components
- `src/styles/`: CSS and Tailwind theme files

## Key pages
- `Landing.tsx`: homepage with hero content and navigation flows
- `Services.tsx`: service offerings, process, case projects, and CTA
- `Products.tsx`: product portfolio and feature highlights
- `Internship.tsx`: internship program details and opportunities
- `Research.tsx`: research capabilities and case insights
- `Contact.tsx`: contact form and direct outreach links
- `NotFound.tsx`: 404 page with redirect back to home

## UI system
Components in `src/app/components/ui` are used across the site for consistent styling:
- `Card.tsx`: card wrapper, header, title, content, footer, description
- `Button`, `Input`, `Select`, `Dialog`, and other reusable primitives in the `ui` folder
- `Navbar.tsx` and `Footer.tsx` provide global navigation and layout
- `SectionMedia.tsx` handles media sections and animation assets
- `StatusBadge.tsx` displays status labels consistently

## Styling and design
- Tailwind CSS v4 is used for utility-based styling
- `src/styles/tailwind.css` and `src/styles/theme.css` define global theme rules
- `cn()` helper in `src/app/components/ui/utils.ts` merges classes cleanly
- Animations use `tw-animate-css` and `motion`

## Routing and navigation
- `react-router` manages client-side routes
- `src/app/routePaths.ts` contains route constants:
  - `home`
  - `services`
  - `products`
  - `internship`
  - `research`
  - `contact`
- Legacy path `/internee` redirects to `/internship`

## Development workflow
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Use `http://localhost:5173/` to preview locally
4. Build production output: `npm run build`
5. Preview production build: `npm run preview`

## Quality and testing
- `npm run lint` checks code quality with ESLint
- `npm run lint:fix` fixes lint issues automatically
- `npm run test` runs unit tests with Vitest
- `npm run test:watch` watches tests during development

## Deployment
- Build with `npm run build`
- Serve static build output from `dist`
- Ensure SPA routing rewrites unknown paths to `index.html`
- For subdirectory deploys, set `VITE_BASE_PATH`

## Notes for maintainers
- Keep route definitions and page metadata centralized in `routePaths.ts`
- Use shared UI components from `components/ui` for new layouts
- Add new page-specific assets under `src/app/pages` or `src/app/components`
- Follow existing color and spacing conventions in `theme.css` and Tailwind utility classes

## Existing docs
- `README.md` contains the quick start and route list
- `guidelines/Guidelines.md` may contain additional project guidance
