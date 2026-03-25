# Rebrand Session Log

## Objective
Rebrand the full site from predator management to construction project management under the new identity:

- **Brand name:** One Shot Project Management
- **Domain:** `oneshotprojectmgmt.com`
- **Theme behavior:** Light mode by default, user-toggled dark mode, preference persisted

## Decisions Made

1. Reworked all user-facing messaging to construction project delivery language.
2. Updated metadata, SEO, schema, and sitemap domains to the new brand/domain.
3. Added a global Light/Dark mode toggle in the navbar.
4. Defaulted theme to **light** and persisted user choice in `localStorage`.
5. Added SSR theme initialization to reduce theme flash before hydration.
6. Replaced predator-themed imagery URLs with AI-generated construction placeholders.
7. Kept layout structure intact to minimize behavioral regressions while changing copy/theme.

## Files Updated

### Metadata and SEO
- `gatsby-config.js`
- `src/components/seo.js`
- `sitemap.xml`
- `src/sitemap.xml`
- `src/pages/sitemap.xml`
- `src/components/sitemap.xml`

### Shared Layout and Theme
- `src/components/layout.js`
- `src/components/navbar.js`
- `src/components/footer.js`
- `tailwind.config.js`
- `src/styles/global.css`
- `gatsby-ssr.js`

### Rebranded Page Content
- `src/components/Home/header.js`
- `src/components/Home/featureSection.js`
- `src/components/Home/testimonial.js`
- `src/components/Home/pricing.js`
- `src/components/FeaturedBlog.js`
- `src/components/Blog/blogHeader.js`
- `src/components/Blog/blogsContainer.js`
- `src/pages/contact.js`
- `src/pages/404.js`
- `src/components/about/aboutHeader.js`
- `src/components/about/aboutMore.js`
- `src/components/about/aboutTeamBigCard.js`
- `src/components/about/aboutGrid.js`
- `src/components/Careers/careersHeader.js`
- `src/components/Careers/careersRoles.js`
- `src/components/Pricing/pricingHeader.js`
- `src/components/Pricing/pricingFAQ.js`
- `src/components/Pricing/pricingCTA.js`

## Verification Notes

- Repository scan confirms no old predator-brand references remain in source pages/components.
- Lint diagnostics for edited files report no issues.
- Build verification could not be completed in this environment because dependency install fails on current Node/runtime constraints (`sharp`/`gatsby` install issue on this machine path + Node version), not due to code syntax/lint errors.

## Follow-Up Recommendation

- Run project on an LTS Node version commonly used with Gatsby v3 (for example Node 16/18) and rebuild to validate runtime output and refresh generated `public/` artifacts.
