# Chuck Howard: Sapporo website and software services

React 18 + Create React App 5 + HashRouter, deployed to the existing GitHub Pages site. The homepage now prioritizes local business inquiries from outreach. Original project narratives, screens and route URLs are retained.

## Run and verify

Use Node 20. `npm ci --legacy-peer-deps`, then `npm start` for development.

- `npm test -- --watchAll=false --runInBand`: service selection, outreach contact path and missing-page recovery.
- `npm run build`: production build plus server-rendered homepage content for initial HTML and no-JavaScript readers.
- `python3 scripts/preview.py`: local production preview at `http://127.0.0.1:4400/react-gh-pages/`. The `/qa` page checks real 1440/1280/768/390/320px iframe viewports and runs axe against each preserved route. QA scripts and axe are never included in deployment.
- `npm run deploy`: rebuild and publish the verified build to `gh-pages`. Check the resulting GitHub Pages deployment before reporting it live.

## Content and outreach links

Edit `src/redesign/content.js` for project summaries/contact details and `src/redesign/Site.js` for service/FAQ content. `DESIGN.md` records direction and factual limits.

The following homepage links preselect the relevant service for a cold email:

- `https://chulps.github.io/react-gh-pages/#/?service=design`
- `https://chulps.github.io/react-gh-pages/#/?service=php`
- `https://chulps.github.io/react-gh-pages/#/?service=seo`
- `https://chulps.github.io/react-gh-pages/#/?service=software`

They do not send emails or track recipients. Contact links open the visitor's email application with a matching subject.

## Factual notes

Sapporo and BarTicket content was preserved from the current rendered site because master contained an older homepage. PHP help is described as investigation subject to reviewing the existing setup; no prior PHP project or guaranteed fix is invented. No ranking guarantees, fake results, customer quotes or price claims were added. Japanese inquiries are email-only with translation support.

The original résumé/PDF includes historical dates and “present” entries; the experience page labels that and offers a current résumé by email. The COVID dashboard is preserved as an archived route; its old third-party data API may no longer work.

Hash routes remain for backward compatibility on GitHub Pages. The homepage is prerendered and canonical; fragment routes do not become independently indexable pages. A physical `404.html`, sitemap, robots, structured data and share image are included.

Fonts: Archivo, self-hosted with its OFL license. Existing Nucleotide case-study styles are vendored locally, with obsolete remote scripts and font imports removed. Homepage project images derive from the original portfolio assets.
