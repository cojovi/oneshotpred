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

## Premium Industrial UI Refresh (Home + Shared)

### Additional Objective
- Resolve all readability/contrast issues introduced by global class overrides.
- Improve first-impression design quality with a more cohesive premium industrial style.

### Additional Decisions Made
1. Replaced utility-class hijacking (`.text-white`, `.bg-lightblack`, opacity remaps) with semantic theme tokens in `global.css`.
2. Established tokenized color variables for light/dark: surface, text, muted text, border, accent gradient, and hero overlay.
3. Tuned brand accents to a construction-oriented copper/slate palette while preserving existing utility class names for low churn.
4. Updated shared UI primitives (navbar/footer/button/input) to explicit, reliable contrast behavior in both themes.
5. Redesigned hero hierarchy and spacing rhythm to avoid visual clutter and improve narrative flow.
6. Replaced hero media treatment with a stronger AI-generated construction image and layered overlay copy block.
7. Polished home section cards and typography using semantic surface/text utilities for consistent contrast.

### Additional Files Updated
- `src/styles/global.css`
- `tailwind.config.js`
- `src/components/navbar.js`
- `src/components/footer.js`
- `src/components/Atoms/button.js`
- `src/components/Atoms/input.js`
- `src/components/Home/header.js`
- `src/components/Home/featureSection.js`
- `src/components/Home/pricing.js`
- `src/components/FeaturedBlog.js`
- `src/components/Home/testimonial.js`

### Additional Verification Notes
- Read-lint diagnostics on all edited files reported no issues.
- Color blending root causes were removed by deleting semantic-breaking global overrides and switching to token-driven styling.
