# Anas Murtaza · Personal engineering website

A dark editorial portfolio built with React, TypeScript, Vite, and custom CSS. The complete homepage is prerendered into static HTML, then hydrated for navigation, system concepts, and expandable engineering stories. No backend, API keys, database, analytics, or external widgets.

## Run locally

Use **Node.js 24** (`nvm use`, if you use nvm).

```sh
npm install
npm run dev
```

Vite prints the local URL. To verify and preview the production site:

```sh
npm run check
npm run preview
```

`npm run build` performs TypeScript validation, builds the browser assets, prerenders the complete homepage, and removes the temporary server bundle. Publish only `dist/`. `npm run check` also verifies production content, links, structured data, and required assets. A normal build has no server runtime requirement.

The project `.npmrc` selects the public npm registry so installations and the lockfile remain portable across personal computers and GitHub Actions.

## Publish to anmurtaz.github.io

1. Create the GitHub repository **anmurtaz/anmurtaz.github.io**. The account must be `anmurtaz` to publish at the requested address; the portfolio links to the `anmurtaz` GitHub profile.
2. Add the project files, including `package-lock.json` and `.github/workflows/deploy.yml`, to the repository and push to `main`.
3. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. Run the **Deploy portfolio to GitHub Pages** workflow manually once, or push a new commit to `main`.
5. Wait for the workflow to succeed, then open **https://anmurtaz.github.io/**.

The workflow installs using `npm ci`, builds and checks the static output, uploads `dist/`, and deploys it. Deployment permissions are limited to the deploy job. Actions are pinned to immutable commits from the official [Vite deployment guide](https://vite.dev/guide/static-deploy.html). The workflow assumes GitHub Pages is enabled for the repository.

`base: '/'` in `vite.config.ts` is correct for this account homepage. Navigation uses document anchors, so there are no client-only deep routes or GitHub Pages refresh failures. Refer to the official [GitHub Pages setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for account settings.

### Custom domain later

Set the domain in GitHub Pages settings and configure its DNS. Add `public/CNAME` with the domain if needed by your workflow. Update the canonical URL, Open Graph URLs, and JSON-LD in `index.html`, `src/data/profile.ts`, `public/robots.txt`, and `public/sitemap.xml`. Keep the Vite base as `/`. Rebuild and redeploy.

## Edit content

| Content | File |
| --- | --- |
| Identity, introduction, impact, personal interests | `src/data/profile.ts` |
| Résumé, email, phone, WhatsApp, social links | `src/data/links.ts` |
| Career progression | `src/data/experience.ts` |
| Case study narratives and outcomes | `src/data/projects.ts` |
| Technical profile | `src/data/skills.ts` |
| Recognition, certifications, education | `src/data/achievements.ts` |
| Visual system and responsive styles | `src/styles/global.css` |
| Social metadata and structured data | `index.html` |

Replace **`public/resume/Anas-Murtaza-Resume.pdf`** to update the résumé download; the supplied PDF is served without modification. If its name changes, update `src/data/links.ts` and the expected asset in `scripts/check-build.mjs`.

## Content and visual accuracy

- Professional content comes from the supplied résumé and newer LinkedIn PDF. The current title is **Application Software Engineer II (IC2)**, from October 2026. The previous role ends in October 2026, following the explicit portfolio brief.
- The 6M+ figure describes the platform's users. It is not attributed to personal user acquisition. Performance metrics retain their documented workload and scope. “Up to two developer-days” is a maximum, not an average or guarantee.
- Diagrams are conceptual illustrations, not proprietary architecture. The ScanMasterPro visual is explicitly labeled **Workflow illustration**; it is not a generated product screenshot. No internal code, identifiers, URLs, screenshots, or report data were included.
- No GitHub contributions, repository counts, or stars are invented or fetched. The site links to the supplied public profile.
- The résumé download serves the owner-supplied `Anas-Murtaza-Resume.pdf` without modification.
- Personal interests and contact links were explicitly supplied by the owner.

## Accessibility and performance

Semantic sections, one primary heading, a skip link, keyboard focus states, labeled navigation, accessible menu and case study controls, and accessible system illustrations. Motion respects `prefers-reduced-motion` and the user-controlled footer setting. Animation sequences are finite. Homepage narratives are present in the production HTML and readable without JavaScript; expandable details and the mobile menu need JavaScript. Fonts are bundled and served locally with `font-display: swap`. No remote font requests, trackers, large photography, videos, or animation library.

Primary dependencies are React and React DOM. Vite and TypeScript handle builds; Fontsource provides the self-hosted DM Sans font. Icons and diagrams are lightweight SVG and CSS. Social assets are static files; `public/og-image.svg` is the editable source for the 1200 × 630 PNG.

## Before publishing

Run `npm run check` and review the production preview at desktop and mobile widths. Ensure that the repository is under the intended `anmurtaz` GitHub account. This workspace is a complete local implementation; pushing and enabling Pages are separate publishing steps.

## Professional hierarchy refinement

The opening now leads with Anas Murtaza, the full Application Software Engineer II title, and Oracle affiliation. Oracle Aconex platform scale provides immediate context. Selected engineering work follows the hero, then a shorter impact section, career progression, and contact.

Case studies lead with concrete names: Metadata Synchronization, Start Review Optimization, ScanMasterPro, and Production Reliability & Modernization. The original editorial headlines are retained as subtitles. LinkedIn, GitHub, email, and the résumé have clearer visual treatment. Social preview artwork and metadata follow the same emphasis on professional identity.

The refinement changes `src/App.tsx`, `src/sections/Hero.tsx`, `src/sections/Work.tsx`, `src/sections/Identity.tsx`, `src/data/profile.ts`, `src/data/projects.ts`, `src/styles/global.css`, `index.html`, the social artwork, and the existing production-content check. Build and browser checks passed again, including seven responsive widths and the updated accessibility audit. Professional claims and metric scope were reviewed against the existing approved content; no additional claims, external requests, or dependencies were introduced. **Secure code-generation review: PASS** for this refinement.

## Implementation verification · 9 October 2026

- `npm run check`: TypeScript, production build, prerendering, and production content/assets passed.
- Development and production servers tested in isolated Chrome sessions. No browser or hydration errors.
- Responsive layouts checked at 320, 360, 390, 540, 768, 1024, and 1440 pixels, with no page overflow.
- Four case study controls, system concept controls, mobile navigation, Escape focus, keyboard skip link, and all supplied contact links checked.
- Résumé download checked byte-for-byte against the supplied PDF.
- Reduced motion, the persistent motion setting, and readable production content without JavaScript checked.
- Axe WCAG A/AA and best-practice checks: no reported violations on desktop, mobile with the menu open, or expanded case studies. Illustration/texture contrast received visual review and a separate contrast baseline check; subtle text remains above 6:1 even under the maximum white grain contribution. This is an implementation check, not an accessibility certification.
- No third-party runtime requests. Homepage HTML, JavaScript, CSS, and font total approximately 131 KB with gzip, excluding the résumé and social artwork, which do not load during normal page viewing.
- Installation audit reported zero known dependency vulnerabilities. The portable lockfile was checked with an offline `npm ci --dry-run`.

**Secure code-generation review: PASS.** Reviewed the UI, content modules, prerendering scripts, dependency/build configuration, and deployment workflow for unsafe HTML, dynamic code execution, external requests, secret/data exposure, URL handling, type errors, and workflow permissions. Corrected development-mode hydration detection, wordmark labeling, and illustration descriptions; pinned the patched Vite toolchain and immutable CI actions. Build and browser checks passed. Deployment still requires the owner's GitHub repository and Pages settings described above. This is a lightweight code review, not a scanner-backed security assessment.
