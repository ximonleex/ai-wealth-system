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

### Webhook configuration for lead form

Create a local env file:

```bash
cp .env.example .env.local
```

Set your webhook URL:

```env
LEAD_PROVIDER=webhook
LEAD_WEBHOOK_URL=https://your-webhook-endpoint.example
```

The app sends a JSON POST payload in this format:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### How to test webhook integration

1. Start the app with `npm run dev`
2. Open `http://localhost:3000`
3. Submit the lead form with a real name + email
4. Confirm your webhook endpoint received a POST request with JSON body
5. Validate UI behavior:
   - success message appears for 2xx webhook responses
   - error message appears for non-2xx responses or network failures

### Lead magnet delivery mode on thank-you page

Choose delivery behavior via env:

```env
LEAD_MAGNET_DELIVERY_MODE=download
BLUEPRINT_DOWNLOAD_URL=https://your-domain.example/ai-wealth-blueprint.pdf
```

- `LEAD_MAGNET_DELIVERY_MODE=download`: shows a direct download CTA (uses URL above, or placeholder link if omitted)
- `LEAD_MAGNET_DELIVERY_MODE=email`: hides direct download and prioritizes inbox delivery messaging

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

- Add thank-you/download flow for blueprint PDF
- Add analytics events for CTA and form conversion
- Polish SEO metadata and social preview image
