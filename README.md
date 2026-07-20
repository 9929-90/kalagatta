# Anchor Himanshu Paliwal Website

Production-ready Next.js rebuild for `https://anchorhimanshupaliwal.com`, focused on local SEO, performance, accessibility, conversion, and maintainable content.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Set the production domain to `anchorhimanshupaliwal.com`.
4. Add `INQUIRY_WEBHOOK_URL` only if a secure form forwarding endpoint is available.
5. Deploy and verify `/sitemap.xml`, `/robots.txt`, contact form validation, and all service and blog routes.

## Content Editing

- Business details live in `data/site.ts`.
- Services live in `data/services.ts`.
- Testimonials live in `data/testimonials.ts`.
- Gallery image mapping lives in `data/portfolio.ts`.
- FAQs live in `data/faqs.ts`.
- Blog posts are Markdown files in `content/blog`.

Each blog post needs frontmatter for slug, title, SEO title, description, author, publish date, updated date, category, featured image, excerpt, and FAQs.

## SEO Maintenance Checklist

- Keep the central domain in `data/site.ts` accurate.
- Do not add fake awards, review ratings, client logos, or event counts.
- Keep every page title and description unique.
- Add new blog posts only when they answer real client questions.
- Link new posts to relevant services and the contact page.
- Compress new images before adding them to `public/images`.
- Recheck `/sitemap.xml` after adding pages.
- Review Search Console coverage and Core Web Vitals monthly.

## Google Search Console Submission

1. Verify `anchorhimanshupaliwal.com` in Google Search Console.
2. Submit `https://anchorhimanshupaliwal.com/sitemap.xml`.
3. Inspect the home page and key service URLs.
4. Request indexing after launch or major content changes.
5. Monitor performance queries for Udaipur anchoring terms and improve content based on real impressions.

## Google Business Profile Checklist

- Add the correct business name, phone, service area, and website URL.
- Use the verified public address only if it should be shown.
- Add categories related to event planner, entertainer, or event services as appropriate.
- Upload real event photos with permission.
- Add services such as wedding anchoring, corporate anchoring, sangeet hosting, and destination wedding hosting.
- Request genuine client reviews without incentives.
- Keep WhatsApp, phone, and website links consistent with this site.

## Spam Protection Guidance

The form includes server-side validation and a honeypot field. For production, connect `INQUIRY_WEBHOOK_URL` to a trusted server-side email, CRM, or automation endpoint. Add rate limiting or CAPTCHA if spam volume increases. Never expose API secrets in frontend code.

## Missing Factual Information Needed

- Verified Google Business Profile URL.
- Public business address, if one should be displayed.
- Verified client logos, event names, awards, media mentions, and permissions.
- Final legal business name and tax details, if required for terms.
- Preferred form destination endpoint or CRM.
- Verified pricing ranges, if pricing pages should be more specific.
