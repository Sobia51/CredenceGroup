# Credence Group — website

React + TypeScript + Vite site for the three public pages: the group site, the
workforce accommodation portal and the deposit claims page. The staff admin
panel is **not** part of this project.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Routes

| Route | Component |
| --- | --- |
| `/` | `src/pages/Home.tsx` |
| `/accommodation` | `src/pages/Accommodation.tsx` |
| `/deposit-claims` | `src/pages/DepositClaims.tsx` |

## Layout

```
.github/workflows/
  build.yml           builds and attaches dist/ as a downloadable zip
  deploy.yml          builds and FTPs dist/ to Bluehost public_html
public/
  .htaccess           SPA routing + cache headers; ships with the build
  dubai-map.html      Leaflet map in an iframe, talks over postMessage
  assets/             photography
src/
  main.tsx            entry; loads the design system stylesheet first
  App.tsx             router
  components/A.tsx    anchor that routes internal paths through react-router
  hooks/              page state: useAccommodation, useDepositClaims
  lib/sx.ts           CSS-string → style-object helper
  pages/              one component per route
  styles/
    nocturne.css      design system: tokens + .btn/.tag/.input/.field/.card
    base.css          Credence palette overrides + shared page CSS
    home.css          page CSS, including hover states lifted from the design
    accommodation.css
    deposit-claims.css
```

## Deploying to Bluehost

Bluehost is shared cPanel hosting with no build step, so the build happens on
GitHub and only the output is uploaded.

**Get a zip without installing anything:** Actions tab → **Build site** → **Run
workflow**. When it finishes, open the run and download the `credence-site`
artifact. Unzip it and upload its *contents* into `public_html` via cPanel File
Manager — not the folder itself.

**Or deploy automatically:** add `FTP_SERVER`, `FTP_USERNAME` and `FTP_PASSWORD`
as repository secrets (Settings → Secrets and variables → Actions), from cPanel →
FTP Accounts. Every push to `main` then builds and uploads. FTP is file-by-file,
so expect a few minutes.

`public/.htaccess` does two necessary jobs: it routes `/accommodation` and
`/deposit-claims` back to `index.html` so direct visits and refreshes work, and
it sets cache headers — long for fingerprinted assets, none for `index.html`.

Two gotchas. If the site ends up in a subfolder rather than the domain root, set
`base: '/subfolder/'` in `vite.config.ts` and rebuild, or every asset 404s and
you get a blank page. And `dubai-map.html` loads Leaflet from a CDN over HTTPS,
so enable the free SSL certificate in cPanel or the map silently fails.

## Conventions

**Styling is inline style objects plus the design-system classes.** Every value
comes from a `var(--color-*)`, `var(--font-*)` or `var(--radius-*)` token defined
in `nocturne.css` and retuned in `base.css`. Change the palette there, not in the
components.

**`sx()`** parses a CSS declaration string into a style object, used only where a
style is computed at runtime (selected cluster, step chips, occupancy bars).
Static styles are plain objects. Refactoring the hooks to return objects and
deleting `sx` is a safe cleanup.

**`.pin` / `.over`** in `base.css` drive the scroll-pinned photographic sections:
a sticky full-height image with content pulled over it by `margin-top: -100vh`.
Keep both classes on the same section.

**Hover states** authored inline are now `.hv-<page>-<n>:hover` rules at the
bottom of each page stylesheet. Rename them as you componentise.

## Not wired up yet

UI-complete, local state only:

- `useDepositClaims.verify()` accepts any agreement number of 6+ characters.
  Point it at the deposit-ledger API; the mismatch path belongs on the server.
- `useDepositClaims.advance()` is a demo control that steps the status timeline.
  Remove it once status comes from the API.
- `useAccommodation.submitQuote()` sets a confirmation message; it should POST to
  an enquiries endpoint.
- The contact form on `/` has no submit handler.
- Site data (`SITES` in `useAccommodation.ts`) is hard-coded — 7 of 25 sites. This
  should move behind an API first; bed counts change weekly.

## Images

Three photographs load by absolute URL from the original Lovable deployment
(`royal-uae-portals.lovable.app/assets/...`), referenced in the pages and in
`SITES`. Move them into `public/assets/` and update the paths before launch —
that host should not be a production dependency.
