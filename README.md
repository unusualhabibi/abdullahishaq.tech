# abdullahishaq.tech

Premium consulting website rebuilt on Next.js App Router.

## Stack

- Next.js (App Router, static generation)
- Tailwind CSS v4 + custom design tokens
- CMS-ready content layer with Sanity client + local fallback content
- API routes for contact and newsletter capture

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Environment variables

```bash
# Optional Sanity CMS
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=2024-01-01

# Optional analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Optional newsletter delivery
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
```

## Legacy archive

The previous single-file SPA has been archived under `/legacy` for reference.
