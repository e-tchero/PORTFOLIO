# Abdulhameed Aminu — Portfolio

Astro-powered personal portfolio for **Abdulhameed Aminu**.

- **Positioning:** Software Developer | Security Researcher | Founder at ETCHERO
- **Hosting:** Cloudflare Pages
- **Repository:** https://github.com/e-tchero/PORTFOLIO
- **Production URL:** https://abdulhameed.pages.dev
- **Production branch:** `main`

## Stack

- Astro 5 (static output) with `astro:assets` image optimization
- TypeScript (strict)
- Custom responsive CSS with light and dark themes
- Cloudflare Pages
- Web3Forms (contact form)

## Project structure

```
public/            favicon, og.jpg (social card), robots.txt, _headers
src/assets/        portrait.jpg (optimized at build time)
src/components/    Header, Hero, Work, About, Contact, Footer
src/data/          projects.ts — edit this to add or change projects
src/i18n/          translations.ts — Chinese copy for the EN / 中文 toggle
src/layouts/       Base.astro — <head>, SEO tags, structured data, language toggle runtime
src/pages/         index.astro, 404.astro
src/styles/        global.css
```

## Local development

Requires a current Node.js LTS release.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Contact form setup

The form is powered by Web3Forms. The access key is public by design and is set as a default in `src/components/Contact.astro`, so the form works out of the box.

To rotate or override the key without a code change, set `PUBLIC_WEB3FORMS_KEY` in Cloudflare Pages → Settings → Variables and Secrets (or in a local `.env`, see `.env.example`) and redeploy. If both the default and the variable were ever empty, the section falls back to GitHub and LinkedIn links.

After any key change, submit a real test message from the production site and confirm it arrives.

The Web3Forms access key is designed for browser use. Never put private API keys, passwords, or unrelated credentials in this repository.

## Project showcase

Edit `src/data/projects.ts`. Descriptions intentionally distinguish project concepts/in-progress work from verified releases. Update project status only when implementation evidence supports it.

## Languages

The site is bilingual. The `EN / 中文` control in the header switches languages in place (no reload), remembers the choice in `localStorage`, and defaults to Chinese when the browser's preferred language is Chinese. English is the default and lives in the markup; every Chinese string is keyed in `src/i18n/translations.ts` and referenced with `data-i18n`, `data-i18n-html` (copy containing `<em>`/`<br>`) or `data-i18n-attr` (attributes such as `aria-label` and `placeholder`). When copy changes, update both the markup and the matching Chinese entry.

## Theme

Light and dark are both supported. By default the site follows the device setting (`data-theme="system"`), and it updates live if the device switches while the page is open. The header control cycles system → light → dark → system, stores the choice under `portfolio-theme` in `localStorage`, and keeps the browser chrome colour in step. All colour tokens live in `src/styles/global.css`; the dark set is declared once for the device preference and once for an explicit choice, so keep those two blocks identical when changing colours.

## Social card

`public/og.jpg` (1200×630) is used for link previews. Replace it if the portrait or title changes.

## Domain

The Cloudflare Pages hostname is currently `abdulhameed.pages.dev`. When a custom domain is connected, update `site` in `astro.config.mjs` so canonical and Open Graph URLs stay correct.

## Outstanding launch checks

- [ ] Submit and verify a real contact-form message.
- [ ] Confirm the production URL loads on desktop and mobile.
- [ ] Configure a custom domain/redirect only after DNS control is available.

## Repository hygiene

Do not commit `.env` files, credentials, private keys, build output, or dependency folders. See `.gitignore`.
