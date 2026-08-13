# PERMIKATO Website

The public website for PERMIKA Toronto. It is a React single-page application whose events, news, and executive profiles are loaded from published Google Sheets.

## Quick Start

Requirements: Node.js 18 or newer and npm.

```bash
git clone git@github.com:oneDotpy/PermikatoWebReact.git
cd PermikatoWebReact
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000). The project does not use environment variables.

After making changes, verify the production build:

```bash
npm run build
```

## Project Map

```text
src/
├── app/                  # Router and application shell
├── assets/               # Images imported by React
├── components/           # Shared layout and feedback UI
├── features/             # Page content grouped by domain
│   ├── events/           # Event list, detail page, and event copy
│   ├── executives/       # Team UI and division rules
│   ├── guides/           # AD/ART and survival guide
│   ├── home/             # Home-page sections
│   └── news/             # News list and Markdown article view
├── pages/                # Pages that compose multiple features
├── utils/                # Shared image-path compatibility helper
├── index.js              # React entry point
└── index.css             # Global design tokens and base styles

public/
└── assets/               # Files served directly: PDFs and Sheet-linked images
```

`src/app/App.js` is the route table. The navbar and footer live in the application shell, so every route gets the same site layout.

## Ownership and Access

The incoming web associate is responsible for routine website maintenance after handoff. PERMIKATO's organization administrators retain ownership and recovery access to every service.

| Resource | Permanent owner | Associate access |
| --- | --- | --- |
| [GitHub repository](https://github.com/oneDotpy/PermikatoWebReact) | PERMIKATO GitHub administrators | Write access |
| [permikato.com](https://permikato.com/) and DNS | PERMIKATO domain administrator | DNS access when required |
| [Vercel project](https://vercel.com/dashboard) | PERMIKATO Vercel project owner | Project member with deployment access |
| Three Google Sheets listed below | PERMIKATO Google Drive owners | Editor access |
| Membership Form and WhatsApp group | PERMIKATO membership administrators | Form editor and group admin access |
| Linktree, email, and social profiles | PERMIKATO communications administrators | Role-based account access |

Do not commit passwords, recovery codes, private editor URLs, API keys, or personal account details. Transfer them in a private chat or the organization password manager.

Before completing the handoff:

- Give the associate GitHub write access and Vercel project access.
- Give the associate editor access to all three Sheets and the membership Form. Published CSV links are read-only and are not editor links.
- Transfer access to the domain registrar, DNS provider, Linktree, organization email, and social accounts.
- Confirm the associate can deploy, update one Sheet row, and roll back a Vercel deployment.
- Keep at least two PERMIKATO administrators on every critical account for recovery.

## External Links

These are the stable external services referenced by the website. Event gallery links and news image URLs are managed inside their Sheets and are intentionally not duplicated here.

### Data Feeds

- Events: [published CSV](https://docs.google.com/spreadsheets/d/e/2PACX-1vQvx5UO9CVXqc06OmTxGJZTG90ml0CpElXPpNhYZtMdcF4yJJ4BjVUJUz76is0YzAf5RTwJpAI3a3jQ/pub?output=csv)
- Executives: [published CSV](https://docs.google.com/spreadsheets/d/e/2PACX-1vRah_tCFZe8QB6HJ14l1K5qym0P4qADtwvtHHdzApUT49Tc8AioJUv7LohNFn6guL-G-QOcSWbyMVGV/pub?output=csv)
- News: [published CSV](https://docs.google.com/spreadsheets/d/e/2PACX-1vTl5Lf7ZrC8xKCeXSfHuA-4KSYWu2Iz3KXQFP2KtAytBIObOkS4HmS7t_d7tYFT61LHzdDTHx44OslS/pub?output=csv)

### Membership and Community

- [Membership application Form](https://docs.google.com/forms/d/e/1FAIpQLSfiITgSGltBr0DSf6GkNlid6dp1KhVoumtZU9iEKexg7_nfAw/viewform?usp=header)
- [Member WhatsApp group](https://chat.whatsapp.com/EzJvTS4xRgT3OFEtybw5dS)
- [PERMIKATO Linktree](https://linktr.ee/permikatoronto)
- [Lapor Diri / Peduli WNI](https://peduliwni.kemlu.go.id/beranda.html)

### PERMIKATO Accounts

- Email: [permikato@gmail.com](mailto:permikato@gmail.com)
- [Instagram](https://www.instagram.com/permikato/)
- [Threads](https://www.threads.net/@permikato)
- [TikTok](https://www.tiktok.com/@permikato)
- [YouTube](https://youtube.com/@permikatoronto?si=Qf2cLMmPe3YX5Fq0)
- [LinkedIn](https://www.linkedin.com/company/permika-toronto/)

### Partner Student Associations

- [UTISA](https://www.instagram.com/uoftisa/)
- [IDNSA UTSC](https://www.instagram.com/idnsautsc/)
- [UTM ISA](https://www.instagram.com/isautm/)
- [ISA Humber](https://www.instagram.com/isa_humber/)
- [TMU ISA](https://www.instagram.com/tmuisa/)
- [UW ISA](https://www.instagram.com/uw_isa/)
- [YorkU ISA](https://www.instagram.com/yorkuisa/)

The site also loads the Montserrat font from [Google Fonts](https://fonts.google.com/specimen/Montserrat).

## Updating Content

Most routine content changes do not require a deployment.

| Content | Source | Required columns |
| --- | --- | --- |
| Events | URL in `src/features/events/data.js` | `title`, `description`, `image`, `galleryLink` |
| Executives | URL in `src/features/executives/data.js` | `name`, `title`, `university`, `program`, `imgSrc`, `year` |
| News | URL in `src/features/news/data/news.js` | `slug`, `title`, `date`, `category`, `preview`, `image`, `content` |

Keep each sheet published as CSV. Column names are case-sensitive.

### Events

- Put event images in `public/assets/events/` and use a path such as `/assets/events/event-name.jpg` in the Sheet.
- Add long-form event copy and its URL slug in `src/features/events/data.js` when an event needs a detail page.
- Without a slug, clicking an event opens its gallery link.

### Executives

- Put portraits in `public/assets/ExecPhotos/<team>/<division>/`.
- Add each new term and its accepted job titles to `DIVISION_RULES` in `src/features/executives/data.js`.
- A Sheet title must exactly match a title in those rules or the person will not be shown.

### Guides and Static Images

- Replace the PDF and cover preview in `public/assets/guides/` to update the current survival guide. Update their labels and filenames in `SurvivalGuide.js` when the edition changes.
- `public/assets/` is for direct URLs used by Sheets or downloads. Use `src/assets/` only for images imported by a component.
- Compress images before committing them and delete superseded files in the same change.

## Adding a Page

1. Add the feature component under `src/features/<feature>/`.
2. Register its route in `src/app/App.js`.
3. Add a link in `src/components/layout/Navbar.js` if it belongs in navigation.
4. Add the public URL to `public/sitemap.xml`.
5. Run `npm run build` and test the route directly in the browser.

## Deployment

Vercel should use these settings:

- Framework preset: Create React App
- Build command: `npm run build`
- Output directory: `build`
- Production branch: `main`

Client-side routes require Vercel to serve `index.html` as the fallback. Confirm that `/team`, `/news`, and another nested route load correctly after deployment.
