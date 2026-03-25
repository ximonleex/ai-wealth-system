<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- **Single service**: This is a single Next.js application (no monorepo, no databases, no Docker). See `README.md` for standard commands (`npm run dev`, `npm run lint`, `npm run build`).
- **Environment file**: Copy `.env.example` to `.env.local` before running. The `LEAD_WEBHOOK_URL` is optional — without it the lead form submission returns a user-friendly error but the rest of the site works.
- **Dev server**: `npm run dev` starts on port 3000 (Turbopack). Hot reload works for all source files.
- **Lead form submission** will show "We could not reach the lead delivery service" when no real webhook is configured — this is expected behavior, not a bug.
