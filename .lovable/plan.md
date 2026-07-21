Incremental updates only. No redesign. Existing components, tokens, animations and layouts stay. I'll touch the files listed and nothing else.

## 1. Hero (`src/components/portfolio/Hero.tsx`)
- Remove the phone mockup + floating badges block entirely.
- Switch layout from 2-column grid to a single centered column (typography-first). Keep `aurora`, `grid-overlay`, and the mouse-follow radial glow.
- Responsive type scale: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` on the H1, tighter leading, `text-balance` to fix awkward wraps.
- Realign "I'm Piyush Maheshwari" + typed role into a wrap-friendly flex (`flex-wrap items-baseline gap-x-2`) so they stack cleanly on mobile.
- CTA row: `flex flex-wrap gap-3 justify-center`, buttons `w-full sm:w-auto` on the primary CTA only, others auto.
- Reduce mobile vertical padding: `pt-24 md:pt-40`, drop `min-h-[100svh]` on mobile (`md:min-h-[100svh]`).

## 2. Mobile responsiveness (targeted, no restyles)
Sweep across `Nav`, `About`, `Skills`, `Experience`, `Projects`, `Achievements`, `Certifications`, `Contact`, `Footer`, `routes/projects.$slug.tsx`:
- Section padding: `py-20 md:py-28` (down from `py-28 md:py-36` on mobile).
- Heading sizes: `text-3xl sm:text-4xl md:text-5xl`.
- Add `min-w-0`, `truncate`, `text-balance`/`text-pretty` where headings and cards overflow.
- Card grids: enforce `h-full` on cards inside `grid` items so heights match; wrap tag rows with `flex flex-wrap gap-1.5`.
- Contact info tiles: allow wrapping long emails with `break-all`.
- Nav: ensure mobile menu spacing, tap targets ≥ 40px.

## 3. Projects
- Extend `src/lib/portfolio-data.ts` `projects` array to cover all resume projects (RUE POS, Alhelli PDA, Inwani Super App, NUVIX OTT, SmartBill POS, ServiceKeeda EV, ASA App, Forlim Popoli, Regal Fashion, ConnectExpress, SeaConnector, Kay Jewels, KMS Billing, C-RISH Pharma, HRMS/PMS/Leave Management). Each entry gains: `company`, `responsibilities: string[]`, `keyFeatures: string[]` (alias of features), plus placeholder `logo` and `screenshot` fields (CSS gradient placeholders — no image assets added).
- `Projects.tsx`: keep existing filter chips + grid; render company logo chip and screenshot placeholder inside existing card shell. No new component.
- `routes/projects.$slug.tsx`: reuse existing detail layout; add Responsibilities and Key Features sections alongside the current ones. Show company + duration in header.

## 4. Resume section
- Delete embedded PDF preview from `Certifications.tsx` (keep the certifications list) OR from wherever the PDF viewer lives; keep a single "Download Resume" button (already in Hero — remove any duplicate).
- Add new `src/components/portfolio/Resume.tsx` composed of existing primitives (`Reveal`, glass cards) rendering: Professional Summary, Experience Timeline (reuse existing Experience data), Education Timeline (new data in `portfolio-data.ts`), Technical Skills, Tech Stack, Achievements, Languages, Certifications placeholder.
- Mount `<Resume />` on `routes/index.tsx` in place of the removed PDF preview section.

## 5. Contact
The user says "use existing EmailJS configuration" — the project actually has a working Resend server-function integration (`sendContactMessage`) that they set up last turn. I'll keep the working Resend path (it satisfies the functional requirements: validation, loading state, success/failure, disabled submit) and note this in the reply. The form already handles all listed requirements; verify by triggering a submit via Playwright and inspecting the response.

## 6. Professional additions (lightweight, reuse styles)
Add small sections composed of existing `Reveal` + glass card primitives, all wired into `routes/index.tsx`:
- `Testimonials.tsx` — 2–3 placeholder quotes.
- `CurrentFocus.tsx` — one glass card, 3 focus bullets + availability badge (freelance/full-time).
- `FAQ.tsx` — 5 Q&A items using native `<details>` for zero JS.
- Reuse existing `Certifications`, `Achievements`, and Tech Stack list (in Skills).

## 7. Performance + SEO
- Add `loading="lazy"` and `decoding="async"` to any `<img>` tags (currently none — placeholders are CSS gradients, so no-op).
- Ensure per-route `head()` has title, description, og:title, og:description, og:type, og:url, canonical — already present on `/` and `/projects/$slug`. Add JSON-LD `Person` schema in `routes/index.tsx head().scripts` and `BreadcrumbList` on the project detail route.
- Confirm `public/robots.txt` and `src/routes/sitemap[.]xml.ts` include the new… nothing new — all projects still render on `/projects/$slug` with existing slugs.
- No color/branding changes.

## Files touched
- `src/components/portfolio/Hero.tsx` (edit)
- `src/components/portfolio/Nav.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Achievements.tsx`, `Certifications.tsx`, `Contact.tsx`, `Footer.tsx` (targeted spacing/typography edits)
- `src/routes/index.tsx` (mount Resume + new sections, remove PDF preview mount)
- `src/routes/projects.$slug.tsx` (add Responsibilities/Key Features + JSON-LD)
- `src/lib/portfolio-data.ts` (expand projects, add education/languages)
- New: `src/components/portfolio/Resume.tsx`, `Testimonials.tsx`, `CurrentFocus.tsx`, `FAQ.tsx`

## Verification
- `tsgo` typecheck.
- Playwright: mobile viewport 393×706 screenshot of Hero, Projects grid, Resume, Contact submit flow.

## Notes / trade-offs
- No new image assets — company logos and project screenshots use the existing gradient/placeholder aesthetic to stay consistent with the current design. If you'd like real logos/screenshots, upload them and I'll swap the placeholders in.
- Keeping Resend rather than swapping to EmailJS since Resend is already wired, tested, and satisfies every functional requirement you listed. Say the word if you want me to swap providers.
