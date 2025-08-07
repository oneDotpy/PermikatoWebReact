# PERMIKATO Website – Developer Handover

This document serves as a technical overview and guide for maintaining, updating, and deploying the **PERMIKATO** website. It contains all the essential details a new developer will need to get up and running quickly.

---

## 1. Project Overview

**PERMIKATO** stands for *Perkumpulan Mahasiswa Indonesia Kanada Toronto*.  
We are the Indonesian students of Toronto.  
Perhimpunan Mahasiswa Indonesia di Kanada (Permika) Toronto is an Indonesian students association in Toronto, Canada. Based on our database of registered members, we accommodate **160+ Indonesian students** dispersed in **9 colleges and universities** in the Greater Toronto Area.

Our objectives are:
- Foster fruitful relationships between Indonesian students and the Indonesian diaspora in Toronto.
- Provide networking opportunities and support for members.
- Nurture the talents and aspirations of our members.
- Initiate impactful actions within our community.
- Leverage the multidisciplinary backgrounds of our committee members to build a vibrant and robust student association.

The website’s purpose is to serve as our official online platform, presenting our identity, activities, and services, while also providing a channel for outreach, event promotion, and member engagement.

---

## 2. Tech Stack

- **Frontend Framework:** React.js
- **Styling:** CSS
- **Package Manager:** **npm**
- **Hosting / Deployment:** **Vercel**
- **Version Control:** Git (GitHub repository)
---

## 3. Installation & Local Development

**Prerequisites:**
- Node.js (vXX or above)
- npm (vX)
- Git

**Setup steps:**
```bash
# Clone the repository
git clone <repo-url>
cd permikato

# Install dependencies
npm install

# Start local dev server
npm run dev
```

The development server will be available at:
```
http://localhost:3000
```

---

## 4. Environment Variables

If the project requires environment variables, create a `.env` file in the root directory based on `.env.example`.

Example:
```
REACT_APP_API_URL=https://api.permikato.com
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXX-X
```

**Do not commit `.env` to version control.**

---

## 5. Building & Deployment

**Build for production:**
```bash
npm run build
```

**Deployment on Vercel:**
- The site is hosted on **Vercel**.
- Production deploys automatically when code is pushed to the `main` branch.
- Staging/preview deployments are generated automatically for all other branches and pull requests.

To deploy manually from local:
```bash
npm run build
vercel --prod
```

---

## 6. Maintenance & Best Practices

- **Branching:**  
  - `main` → production  
  - `feature/branch-name` → for new features/fixes 
- **Assets:** Optimize images before adding to `public/`.
- **Dependencies:** Update regularly using `npm update` and run security checks (`npm audit`).
- **Testing (if set up):** Always run tests before merging.

---

## 7. Common Tasks

- **Update content:** Edit `/pages` or components.
- **Add a new page:** Create a new component/page and link it in navigation.
- **Change styling:** Update CSS files in `/styles` or component-level styles.
- **Update SEO:** Modify `<head>` tags in `public/index.html` or React Helmet.

---

## 8. Contact & Access

- **GitHub repository:** `https://github.com/oneDotpy/PermikatoWebReact`
- **Vercel dashboard:** `<vercel-dashboard-url>` #Request Via WA
- **Main contact:** [Ahnaf Keenan Ardhito, ahnaf.ardhito@mail.utoronto.ca]

---

**End of README**
