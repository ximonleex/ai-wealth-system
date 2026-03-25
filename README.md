# AI Wealth Blueprint Landing MVP

Premium, conversion-focused landing page MVP for capturing leads for the **AI Wealth Blueprint**.

## Project Rules

- See [`PROJECT_RULES.md`](./PROJECT_RULES.md) for repository-wide design, UX, and architecture rules.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Features in this MVP

- Premium dark wealth-tech UI
- Responsive homepage layout
- Reusable component architecture
- Placeholder lead capture form (Name + Email)
- Structured sections for conversion flow:
  - Hero
  - Lead Capture
  - Benefits
  - How It Works
  - FAQ
  - Final CTA
  - Footer

## Run locally

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

## Build and lint

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
  (marketing)/
  (app)/
    tools/
    members/
    prompts/
    resources/
  api/
components/
  shared/
    layout/
    ui/
features/
  landing/
    sections/
  leads/
lib/
types/
```

## Next steps

- Connect form to API route + email provider
- Add thank-you/download flow for blueprint PDF
- Add analytics events for CTA and form conversion
- Polish SEO metadata and social preview image
