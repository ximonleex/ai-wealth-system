# Email Automation Handoff Plan

This document prepares the current funnel for handoff to an email automation platform while keeping the existing thank-you page and PDF download flow unchanged.

## Current state (kept as-is)

- Lead form captures **Name + Email** on landing page.
- Form submits to `POST /api/leads`.
- On success, user is redirected to `/thank-you`.
- Thank-you page includes direct PDF download CTA (`/blueprint.pdf`) and tools CTA (`/tools`).
- Webhook mode is currently available for real delivery forwarding.

## Integration objective

Connect captured leads to an automation platform (e.g. ConvertKit, Systeme.io, ActiveCampaign, Mailchimp, or webhook ingestion layer) to:

1. add subscriber to list/tag/segment
2. trigger welcome automation
3. deliver blueprint link by email
4. continue nurture sequence toward tools and monetization offers

## Current lead payload and submission path

### Frontend payload (current)

From `features/landing/sections/lead-capture.tsx`, the form posts JSON:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### API processing (current)

`app/api/leads/route.ts`:

- validates name/email
- normalizes email to lowercase
- calls `submitLead({ name, email })`
- returns success/error JSON back to UI

### Delivery forwarding (current webhook mode)

`features/leads/submit.ts` sends this JSON to `LEAD_WEBHOOK_URL`:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

## Where to connect an email platform

Primary integration file:

- `features/leads/submit.ts`

Configuration file:

- `features/leads/config.ts`

Environment variables:

- `LEAD_PROVIDER`
- `LEAD_WEBHOOK_URL`
- (future) provider-specific API keys/endpoints

## Recommended integration approach

### Option A — keep webhook, connect automation platform downstream (recommended first)

Use `LEAD_WEBHOOK_URL` to point to:

- Zapier/Make webhook
- serverless ingestion endpoint
- automation platform inbound webhook (if available)

Then map fields in the automation workflow and subscribe lead to list + automation.

### Option B — direct API integration in app backend

Implement provider-specific API calls directly inside `submitLead()` switch cases:

- `convertkit`
- `systeme`
- `custom`

This gives tighter control but requires key management and API error handling in app code.

## Payload mapping guide for email list systems

Map incoming payload fields as follows:

- `email` -> Subscriber Email (required)
- `name` -> First Name / Full Name field

Recommended additional fields/tags to attach at ingestion time:

- `source`: `ai-wealth-blueprint-landing`
- `lead_magnet`: `ai-wealth-blueprint`
- `funnel_stage`: `optin`
- `signup_timestamp`: ISO datetime

Example expanded mapped object (in automation layer):

```json
{
  "email": "jane@example.com",
  "first_name": "Jane Doe",
  "tags": ["ai-wealth-blueprint", "landing-optin"],
  "custom_fields": {
    "source": "ai-wealth-blueprint-landing",
    "funnel_stage": "optin"
  }
}
```

## Suggested automation flow

1. Trigger: webhook receives `name + email`
2. Validate: reject missing/invalid email
3. Upsert subscriber in email platform
4. Add tag/segment: `ai-wealth-blueprint`
5. Trigger automation sequence: `blueprint-welcome`
6. Send welcome email immediately
7. Optional follow-ups:
   - Day 1: implementation kickoff
   - Day 3: tools stack recommendations
   - Day 5: case-study or framework expansion

## Operational checks before enabling production automation

- Webhook endpoint returns `2xx` quickly
- Duplicate submissions handled idempotently
- Invalid emails are filtered
- Errors logged with alerting
- Platform list/tag IDs are correct

## Draft welcome email (v1)

### Subject

Your AI Wealth Blueprint Is Ready

### Body

Hi {{first_name | default: "there"}},

Welcome — your access is confirmed.

Your **AI Wealth Blueprint** is ready to download here:

{{blueprint_link}}

This guide will help you build your first AI income system with a clear, structured path.

When you are ready, explore the recommended tools stack:

{{tools_page_link}}

Suggested links for current setup:

- Blueprint PDF: `https://your-domain.com/blueprint.pdf`
- Tools page: `https://your-domain.com/tools`

You will also receive concise follow-up emails with implementation steps.

— AI Wealth Blueprint

### Email link placeholders

- `{{blueprint_link}}` -> set to hosted PDF URL
- `{{tools_page_link}}` -> set to `/tools` absolute URL

## Handoff checklist for engineering/automation owner

- [ ] Confirm production webhook endpoint URL
- [ ] Confirm provider/list/tag IDs
- [ ] Map `name` and `email` fields
- [ ] Configure and test welcome email template
- [ ] Test full path: form submit -> subscriber created -> welcome email delivered
- [ ] Monitor first 20 live submissions for errors/deliverability
