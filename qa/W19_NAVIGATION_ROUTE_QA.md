# W19 — Navigation, CTA, Form and Case-Study Route QA

Date: 2026-09-04
Project: PK-TANK production website
Production domain: https://pk-tank.com

## Result

**W19 PASS WITH MINOR NOTES**

The production build, local HTTP route crawl, rendered internal-link crawl, source audit, image integrity checks, metadata checks, typecheck, lint, and build all pass. Automated requests to the production domain returned HTTP 429, and the in-app interactive browser could not initialize because of a Windows sandbox failure. These limitations prevented a second live-browser confirmation of click behavior; source and rendered-local checks found no launch blocker.

## Route matrix

| Route | Status | Navigation | CTA | Images | Notes |
|---|---|---|---|---|---|
| `/` | PASS | PASS | PASS | N/A | HTTP 200; canonical and OG URL use `https://pk-tank.com`. |
| `/solutions` | PASS | PASS | PASS | N/A | HTTP 200; service query CTAs resolve to `/contact`. |
| `/services` | PASS | PASS | PASS | N/A | HTTP 200; service and footer fragment links are valid. |
| `/work` | PASS | PASS | PASS | N/A | HTTP 200; all four cards link to the expected case-study slugs. |
| `/industries` | PASS | PASS | PASS | N/A | HTTP 200. |
| `/pricing` | PASS | PASS | PASS | N/A | HTTP 200; all budget CTAs resolve to `/contact`. |
| `/about` | PASS | PASS | PASS | N/A | HTTP 200; selected-work and project CTAs are correct. |
| `/contact` | PASS | PASS | PASS | N/A | HTTP 200; required fields, limits, pending, friendly error, and success handling verified in source/rendered markup. No real submission made. |
| `/privacy` | PASS | PASS | N/A | N/A | HTTP 200; public site/contact references use the production domain. |
| `/robots.txt` | PASS | N/A | N/A | N/A | HTTP 200; host and sitemap use `https://pk-tank.com`. |
| `/sitemap.xml` | PASS | N/A | N/A | N/A | HTTP 200; 13 public URLs; no localhost, preview, or old-domain references. |
| `/work/tailoring-business-management-system` | PASS | PASS | PASS | PASS | HTTP 200; three expected screenshots return `image/png`. |
| `/work/hr-management-platform` | PASS | PASS | PASS | PASS | HTTP 200; three expected screenshots return `image/png`. |
| `/work/ai-technical-support-platform` | PASS | PASS | PASS | PASS | HTTP 200; three expected screenshots return `image/png`. |
| `/work/csp-requisition-stock-workflow` | PASS | PASS | PASS | PASS | HTTP 200; three expected screenshots return `image/png`. |
| `/this-page-does-not-exist` | PASS | PASS | PASS | N/A | HTTP 404 with branded not-found content and recovery links. |

## Navigation and link QA

- Navigation QA: **PASS**
- CTA QA: **PASS**
- Footer/email link QA: **PASS**
- Broken links remaining: **0**
- Launch blockers remaining: **0**
- Desktop and mobile menus contain the required eight routes.
- The mobile menu closes on every route link and its contact CTA through `onClick={() => setOpen(false)}`.
- Hover/focus CSS does not disable pointer input; decorative overlays use `pointer-events: none` where relevant.
- The rendered crawl checked all unique internal destinations from every main page, all case studies, and the 404 page; all returned HTTP 200 except the intentional 404 route.
- No empty href, `href="#"`, localhost, `127.0.0.1`, Vercel preview, old Firebase/Cloudflare demo, malformed route, or TODO route was found in rendered public source.
- No external application/admin links or unsafe `_blank` links were found.

## CTA results

The requested CTA destinations are correct wherever present:

- Discuss Your Project → `/contact`
- Start/contact conversation CTAs → `/contact`
- View Selected Work / View Work → `/work`
- Solution/service exploration CTAs → `/solutions` or `/services` as labeled
- Contact → `/contact`
- Privacy → `/privacy`

Other legitimate pricing, service, solution, industry, back-to-work, and case-study CTAs also resolve successfully.

## Contact-form validation

- Contact-form validation: **PASS**
- Empty required values are rejected by both rendered required constraints and the server-side Zod schema.
- Invalid email values are rejected with `Enter a valid email address.`
- Descriptions shorter than 20 characters are rejected with a friendly field message.
- Valid field shape, maximum lengths, enumerated service type, optional fields, and the honeypot are validated server-side.
- Pending state disables the submit button and displays `Sending...`.
- Success state is friendly; database exceptions and Supabase errors are replaced with a generic visitor-safe message.
- No environment values, service-role key, database details, stack trace, or raw Supabase error are returned to visitors.
- Real Supabase test row created: **No**. A database-writing production test was not necessary.

## Case-study route and screenshot QA

- Case-study route QA: **PASS**
- All four routes contain a title, accurate prototype/demonstration trust label, problem, context, role, solution, deliverables/features, product screens, technology/tools, business benefit, and contact next step.
- All 12 expected PNG files decoded successfully at 1672×941 and returned HTTP 200 with `image/png`.
- Captions and alt text match their project/screen context.
- No `screenshots coming soon`, `images will be added later`, or `supporting evidence pending` placeholder copy remains.

## Email and privacy QA

- Public email addresses found: **None**.
- Private email addresses found or removed: **None**.
- No Gmail forwarding destination appears in public source/UI.
- No Supabase service-role value or private credential appears in client-rendered source.

## Canonical-domain QA

- Canonical-domain result: **PASS**.
- Fixed missing-environment behavior so `metadataBase`, page canonicals, Open Graph URLs, JSON-LD organization URL, robots host/sitemap, and sitemap URLs safely fall back to `https://pk-tank.com`.
- Valid `NEXT_PUBLIC_SITE_URL` overrides remain supported.

## Issues found and fixed

1. Production canonical output disappeared when `NEXT_PUBLIC_SITE_URL` was unset or invalid. Fixed with the production-domain fallback.
2. Lint reported an unused destructured honeypot variable in the contact action. Fixed without changing validation or database behavior.

Broken links found: **0**  
Broken links fixed: **0**  
CTA issues found/fixed: **0 / 0**

## Automated checks

- `npm run typecheck`: **PASS**
- `npm run lint`: **PASS** (0 errors, 0 warnings)
- `npm run build`: **PASS**
- Playwright: not installed; no dependency was added.
- Local route/status crawl: **PASS**
- Local rendered-link crawl: **PASS**
- Production automated HTTP check: **MINOR NOTE — HTTP 429 from the production edge for automated requests**
- Interactive browser check: **MINOR NOTE — browser initialization blocked by the session's Windows sandbox failure**

## Files changed

- `src/lib/site-url.ts`
- `src/actions/contact.ts`
- `qa/W19_NAVIGATION_ROUTE_QA.md`

## Remaining blockers

None found in source, generated routes, local rendered output, assets, metadata, or required automated checks. A normal user-browser production smoke test is recommended because the production edge rejected automated requests with HTTP 429 during this run.
