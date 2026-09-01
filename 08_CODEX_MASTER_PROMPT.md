# CODEX MASTER PROMPT — PK-TANK V2

Build a production-ready company website for **PK-TANK**.

## Identity
PK-TANK  
Business Technology & SaaS Solutions  
Build Smarter. Work Better.

Supporting line:
**Software • AI Automation • Managed IT • Technical Project Support**

Core promise:
**PK-TANK helps businesses digitize operations, solve technical problems, and execute technology projects.**

The website must look like a technology company, not a personal freelancer resume.

## First action
Inspect the repository, package.json, current framework, routes, environment variables and working functionality before editing. Preserve useful code. Do not blindly copy the legacy Firebase site.

## Business emphasis
- 60% Software/SaaS/AI/Web
- 25% IT/Network/Technical Support
- 10% B2B/Product/Project Enablement
- 5% Creative experimentation

Software/SaaS/AI must be visually dominant.

## Brand
Use existing `/public/brand/` assets. Do not redesign logo.

Colors:
- #0A1D3A navy
- #1D5FFF blue
- #007AFF bright blue
- #FFFFFF white
- #1F2937 charcoal

Font: Inter.

Style: corporate, clean, technical, spacious, reliable.

Avoid military/tank visuals, gaming, hacker neon, heavy gradients, excessive animation and stock-photo-heavy design.

## Stack
- latest stable Next.js App Router
- TypeScript
- Tailwind
- Supabase/PostgreSQL
- Zod
- Vercel

Prefer Server Components. Keep dependencies minimal.

Create `.env.example`:
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

Service role must be server-only.

## Routes
/
 /solutions
 /services
 /work
 /work/[slug]
 /industries
 /pricing
 /about
 /contact
 /privacy

Also build sitemap, robots, metadata, favicon and professional not-found page.

## Navigation
Home | Solutions | Services | Work | Industries | Pricing | About | Contact

CTA: **Discuss Your Project**

## Homepage
Hero headline:
**Technology That Connects Business, Software & Technical Operations**

Hero copy:
PK-TANK helps growing businesses digitize operations, automate repetitive work, solve IT problems and manage technology projects with practical software and technical support.

Buttons:
Discuss Your Project
Explore Solutions

Capability strip:
Software & SaaS | AI Automation | Managed IT | Technical Project Support

Problems section:
- too much manual work
- poor operational visibility
- repetitive support
- IT/network interruptions
- disorganized technical projects
- difficult technical product launches

Four pillars:
1. Digital Business Systems
2. Managed IT & Technical Support
3. Technical Project Support
4. B2B Technology & Project Enablement

Featured solutions:
Customer & Order, Inventory, HR, Service/RMA, Requisition/Approval, AI Support, Dashboards, Managed IT, Technical Project Desk, Product Launch Support.

Featured projects:
- Tailoring Business Management System
- CSP Requisition & Stock Workflow
- HR Management Platform
- AI Technical Support Platform

Add a smaller “Selected Past Technical & Business Experience” area.

Add industries, process, managed monthly support and final CTA:
**Tell Us the Problem — Not the Technology**

## Services page
Organize under the four pillars.

### Digital Business Systems
Business software, SaaS implementation, AI automation, websites/portals, dashboards, databases.

### Managed IT & Technical Support
Remote users, network/router/Wi-Fi/LAN, IP/DHCP/DNS, printers/software, SaaS/product support, testing and documentation.

### Technical Project Support
Research, vendor/product comparison, BOQ assistance, documentation, reports, handover documents, layouts, monitoring/IoT software prototypes and troubleshooting reports.

Show scope notice for regulated/safety-critical work: final design/sign-off must be performed by appropriately qualified/licensed professionals where required.

### B2B Technology & Project Enablement
Product launch support, market research, dealer/channel research, proposals, tender-document organization, costing support, product documentation and project coordination.

Do not imply legal advice or guaranteed tender success.

## Work page
Filters:
All / Digital Systems / IT & Technical / Technical Projects / Business Enablement

Status types:
PK-TANK Project / Founder’s Past Experience / Prototype / Internal Product / Demonstration / Research-Lab Project.

Never imply all legacy work was performed under the present company structure.

Each case study:
Overview, Problem, Context, Role, Solution/Work, Deliverables/Features, Technologies/Tools, Business Benefit, Media, CTA.

No fake outcomes.

## Industries
Retail & Service; Fashion/Tailoring; IT & Technology; Healthcare SMEs; Education; Distribution; Engineering/Project Businesses; SaaS/Remote Technology Companies.

## Pricing
START — Digital Launch — from BDT 15,000
GROW — Business System — from BDT 40,000
MANAGED — Technology Partner — from BDT 3,000/month

Quote-only:
AI/SaaS Implementation; Remote Technical Operations; Technical Project Desk; Product Launch/Business Enablement.

## About
Company first, founder second.

Heading:
**Built From Cross-Functional Technology Experience**

Mission:
To help businesses reduce manual work, improve visibility, solve technology problems and execute projects more efficiently through practical and affordable technology.

Vision:
To become a trusted remote-first technology solutions company serving local and international clients through software, SaaS, automation, managed support, technical project services and proprietary digital products.

Do not invent founder details.

## Contact
Heading:
**Tell Us the Problem — Not the Technology**

Fields:
Name, Company, Country, Email, Phone/WhatsApp, Service Type, Budget, Project Description.

Service choices:
Business Software; SaaS/AI; Website/Portal; IT/Network; Technical Project; Product/Business Enablement; Managed Monthly Support; Not Sure Yet.

Submit through Next.js server action/route -> Zod -> server-only Supabase.

Use `supabase/001_leads.sql`.

Add honeypot, validation, length limits and safe errors.

## Trust
Do not copy old testimonials, logos, contact details or confidential documents automatically.

No fake metrics, clients or testimonials.

Use “Founder’s Past Experience” for historical work where needed.

## SEO
Unique metadata, Open Graph, sitemap, robots, truthful Organization schema and canonical URL only when valid.

## Accessibility/performance
Semantic HTML, keyboard support, focus states, good contrast, 360px mobile, no horizontal scroll, Next/Image, optimized fonts, minimal JS.

## Legacy migration
Keep https://pk-tank.web.app/ online while the new site is built. Deploy new site separately. Only redirect/archive the old site after approval. Custom domain comes later.

## Quality gate
Run lint, TypeScript check and production build. Fix every error. Do not disable checks to force success.

## Final report
Report repository state, routes, components, data/content structure, lead flow, SQL changes, environment variables, local run, Vercel deploy, migration steps, tests, manual tasks and limitations.

Start implementation now.
