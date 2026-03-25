# Project Rules

These rules define the product and design guardrails for this repository. They apply to all UI, copy, and architecture decisions unless explicitly overridden by the project owner.

## 1) Brand and Design Direction

- Design style must remain **premium, minimal, futuristic, and wealth-focused**.
- Every UI decision should feel like a **premium fintech / AI brand**.
- Use a **money-green inspired palette**, **muted gold accents**, and **deep dark neutral backgrounds**.
- Keep visual expression restrained and elegant.

## 2) Color and Visual Constraints

- Avoid bright neon colors.
- Avoid oversaturated gold.
- Avoid cheap "crypto-looking" visual treatment.
- Prefer subtle gradients, clean surfaces, and quiet contrast.

## 3) UX and Conversion Priorities

- Prioritize **conversion and clarity** over visual clutter.
- Prefer clean landing-page patterns and a strong CTA hierarchy.
- Keep content concise, high-value, and easy to scan.
- Remove decorative elements that do not support user intent.

## 4) Component and File Organization

- Keep components reusable and composable.
- Keep files well organized by concern (layout, sections, UI, lib).
- Reuse primitives before creating one-off implementations.

## 5) Architecture Scope (MVP Guardrail)

- Do not overcomplicate architecture for MVP.
- Favor simple, maintainable implementations over speculative abstractions.
- Add complexity only when it unlocks immediate product value.

## 6) Workflow and Communication Rules

- Always explain what changed after editing.
- For complex changes, propose a short plan first.
- Keep change summaries practical: what changed, why, and what remains next.

## 7) PR and Review Checklist

Before finalizing any UI-related change, verify:

- [ ] Visual style remains premium/minimal/futuristic/wealth-focused.
- [ ] Palette follows money-green + muted gold + deep dark neutral backgrounds.
- [ ] No neon, no oversaturated gold, no low-trust crypto aesthetic.
- [ ] Layout improves conversion clarity and preserves CTA hierarchy.
- [ ] Components are reusable and file structure remains organized.
- [ ] MVP architecture remains lean and not over-engineered.
- [ ] Change explanation is provided (and short plan included if change is complex).
