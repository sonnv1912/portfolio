# Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 20+
- Yarn 1.22.x

## Development

```bash
yarn install
yarn dev
```

The app runs on `http://localhost:2222`.

## Build

```bash
yarn build
```

Production output is written to `dist/`.

## Deploy

```bash
yarn deploy
```

GitHub Actions also deploys the site to `gh-pages` on pushes to `main`.

## Structure

- `src/assets`: images, fonts, shared static assets
- `src/components`: reusable UI and page components
- `src/configs`: app configuration and constants
- `src/hooks`: query hooks and profile data
- `src/pages`: portfolio pages
- `src/types`: shared TypeScript types
- `src/utils`: i18n, query client, GitHub helpers
