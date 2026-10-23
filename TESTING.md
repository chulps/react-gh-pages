# Redesign verification

- `CI=true npm run build`: passed, without build warnings. Homepage content is prerendered into the initial HTML.
- `CI=true npm test -- --watchAll=false --runInBand`: four passing tests covering service discovery, selected-service email subjects, targeted outreach links and missing-page recovery.
- `node scripts/check-build.cjs`: passed. Checks initial content, a single H1/description/canonical, valid structured data, contact destination, all referenced local deployment assets, robots, sitemap and physical 404.
- Browser production QA: 14 routes at 1440px and 390px, followed by the revised build at 320px. No document overflow, broken loaded images, or WCAG A/AA axe violations in those runs. Each route has one H1. Decorative SVG paths in Clicktool extend inside a clipped graphic; they do not create document overflow.
- Manual browser checks: phone navigation, selected PHP service, matching email destination, first-screen service links, keyboard skip-link focus, and representative service/contact/project/résumé/404 screenshots. Corrected legacy case-study contrast and heading issues found in the initial pass.
- Browser console check: no captured errors on the new main pages.
- Reduced-motion styles disable transitions, perspective and smooth scrolling. GSAP effects also use reduced-motion media queries. OS-level reduced-motion and throttled field performance were not measured in this session.
- Derived 67 web-sized images from original portfolio files: 48.9 MB to 7.0 MB. Originals retained. Routes load case-study code on demand; images use lazy loading. Entry JavaScript is about 94 KB gzip.

## Intentional limits

- HashRouter preserves old case-study links, but fragment pages are not separately indexable URLs. The homepage is the canonical search landing page.
- Historical résumé dates/PDF remain labeled as such; no current employment dates were invented.
- The archived COVID route retains its original external API dependency and was not part of the 14-route business-site audit.
- Instagram supplied the reference captions but not playable video frames. The high-tech direction is an original interpretation. No anime characters were added.
