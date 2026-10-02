# Ecommerce Solutions

A multi-page agency website built with React and Vite.

## Pages

- Home (`/`)
- Services (`/services`)
- Technologies (`/technologies`)
- Selected work (`/work`)
- Pricing (`/pricing`)
- About (`/about`)
- SEO (`/seo`)
- Contact (`/contact`)
- FAQ (`/faq`)
- DMF Luxury case study (`/work/dmf-luxury`)
- World of Reading case study (`/work/world-of-reading`)

The homepage includes business outcomes, industries, case studies, technology capabilities, client-choice reasons, engagement models, a seven-step process, a small senior-led team model and client-friendly FAQs. Testimonials and quantified outcomes are intentionally omitted until approved quotes and verified evidence are available. The pricing catalogue covers six engagement types and explains how estimates are scoped without publishing unsupported rates.

Each route gets its own crawlable HTML entry, title, description and structured data where appropriate. The SEO page covers SEO, AEO and GEO foundations. The production build creates `robots.txt`; set `VITE_SITE_URL` to the deployed origin (for example, `https://www.yourdomain.com`) before building to add canonical URLs and generate a domain-specific `sitemap.xml`.

## Contact form

The form uses the EmailJS service, template and public key that were already present in the supplied project. In the EmailJS dashboard, confirm that the service is connected to the inbox you want, and that the template uses `from_name`, `from_email`, `phone`, `service`, and `message`. If the form cannot send, it offers a pre-filled email draft as a fallback. The site also links directly to `simrankhanna0798@gmail.com` and `knowledgeangel01@gmail.com`.

## Run locally

```sh
npm ci
npm run dev
```

Build production files with `npm run build`. The pricing catalogue explains the scope and estimate basis for websites, applications, commerce, SEO, automation and ongoing engineering; final commercial terms are provided in a project-specific proposal.
