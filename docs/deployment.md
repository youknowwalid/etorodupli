# Development and deployment

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm 10+

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app defaults to local/demo-only behavior. No backend or third-party API is required.

## Tests and production build

```bash
npm test
npm run build
npm run preview
```

`npm run build` runs the TypeScript check and emits static files to `dist/`. The preview command is for local QA.

## Static deployment

The frontend can be deployed to a static host after `npm run build`. Configure SPA fallback so a direct request to `/demo/settings` returns `index.html`. Do not deploy a credential form, enable real financial actions, or connect to private eToro services. Retain the visible local-demo disclaimer unless a separately reviewed, appropriately authorized production experience replaces it.

`.env.example` has only non-secret demo flags. Never commit `.env.local`, credentials, cookies, tokens, or private user data. `VITE_TARGET_COUNTRY` is informational only; it does not establish service availability or regional compliance.
