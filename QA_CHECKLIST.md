# QA Checklist

Use this checklist to validate the full funnel before release.

## Preflight

- [ ] Install dependencies:
  ```bash
  npm install
  ```
- [ ] Start the app:
  ```bash
  npm run dev
  ```
- [ ] If port 3000 is occupied, restart cleanly:
  ```bash
  pkill -f "next dev"
  npm run dev
  ```

## Core pages

- [ ] Landing page loads: `http://localhost:3000/`
  - Expected: hero, lead form, benefits and CTA sections render correctly.
- [ ] Thank-you page loads: `http://localhost:3000/thank-you`
  - Expected: signup confirmation, inbox guidance, and tools CTA visible.
- [ ] Tools page loads: `http://localhost:3000/tools`
  - Expected: premium tool cards render with CTA buttons.

## Placeholder mode tests

### Setup

- [ ] In `.env.local`, set:
  ```env
  LEAD_PROVIDER=placeholder
  LEAD_WEBHOOK_URL=https://your-webhook-endpoint.example
  ```
- [ ] Restart app after env changes.

### Success flow

- [ ] Submit form with:
  - Name: `QA Tester`
  - Email: `test@example.com`
- Expected:
  - [ ] API returns success (`ok: true`)
  - [ ] User is redirected to `/thank-you`
  - [ ] No error message appears

### Failure flow

- [ ] Submit form with:
  - Name: `QA Tester`
  - Email: `fail@example.com`
- Expected:
  - [ ] API returns failure (`ok: false`, 502)
  - [ ] Error message appears on landing page
  - [ ] User is not redirected to `/thank-you`

## Real webhook mode tests

### Setup

- [ ] In `.env.local`, set:
  ```env
  LEAD_PROVIDER=webhook
  LEAD_WEBHOOK_URL=https://YOUR_REAL_WEBHOOK_URL
  ```
- [ ] Restart app after env changes.

### Verify success path

- [ ] Submit form with valid name/email.
- Expected:
  - [ ] Webhook endpoint receives JSON payload:
    ```json
    { "name": "...", "email": "..." }
    ```
  - [ ] API returns success (`ok: true`)
  - [ ] User is redirected to `/thank-you`

### Verify failure safety

- [ ] Temporarily use invalid webhook URL or force non-2xx response.
- Expected:
  - [ ] API returns failure (`ok: false`)
  - [ ] Error message appears on landing page
  - [ ] User is not redirected to `/thank-you`

## Production readiness

### Must finish before go-live

- [ ] Replace placeholder webhook URL with real production endpoint.
- [ ] Implement blueprint delivery completion flow (email delivery or secure download).
- [ ] Configure production environment variables on hosting platform.
- [ ] Add abuse protection (rate limiting and anti-bot/CAPTCHA).
- [ ] Add privacy and terms pages with clear consent language.

### Strongly recommended

- [ ] Add analytics events for lead success/failure and CTA clicks.
- [ ] Add error monitoring/logging for webhook failures.
- [ ] Add webhook reliability protections (retries/idempotency/error queue).
- [ ] Add deliverability safeguards (double opt-in if required).
- [ ] Add automated E2E checks in CI for regression prevention.
