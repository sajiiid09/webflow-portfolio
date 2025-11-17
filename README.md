# Sajid Mahmud – Creative Developer Portfolio

A premium single-page portfolio for Sajid Mahmud built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The project mirrors the Kai template's minimalist feel while adding bespoke data (hero copy, stats, projects, blogs, etc.) sourced from `data/content.ts` and rendered through modular components in `app/page.tsx`.

## Prerequisites
- Node.js 18+ (Next.js 14 requires the active LTS).
- npm 9+ (bundled with Node).

## Local Development
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the dev server**
   ```bash
   npm run dev
   ```
3. Visit <http://localhost:3000> to preview the site with hot reload.

Useful scripts from `package.json`:
- `npm run build` – Generate an optimized production build.
- `npm run start` – Serve the last production build locally.
- `npm run lint` – Run Next.js ESLint checks.

## Project Structure
```
app/
  layout.tsx      # Global HTML structure & Inter font loader
  page.tsx        # Imports and composes all page sections
components/       # Header, Hero, About, Skills, Experience, Projects, Blog slider, Contact, etc.
data/content.ts   # Centralized stats, skills, technologies, projects, blog posts
public/           # (Optional) place static assets such as blog cover images
```

## Deployment
The live site is hosted on Vercel at <https://v0-portfolio-website-sajid-mahmud.vercel.app/>. Replace the existing codebase with the current repo by following either workflow:

### A. Git-connected deployment (recommended)
1. Push this repository to GitHub (or your preferred Git provider).
2. In the Vercel dashboard, open the **v0-portfolio-website-sajid-mahmud** project.
3. Link the project to the repository/branch that should serve production.
4. Trigger a redeploy (or push new commits); Vercel will run `npm install`, `npm run build`, and promote the new build automatically.

### B. Vercel CLI deployment to the existing project
1. Install the CLI if needed:
   ```bash
   npm install -g vercel
   ```
2. Authenticate: `vercel login`.
3. From this repo, link to the deployed project:
   ```bash
   vercel link --project v0-portfolio-website-sajid-mahmud
   ```
4. Create a production deployment:
   ```bash
   vercel deploy --prod
   ```
   Vercel will reuse the defined scripts to build and publish the site under the existing URL.

## Customizing Content
Update `data/content.ts` to change hero text, stats, skills, technologies, experience entries, project cards, and blog posts. Component-level styling and animations live under `components/`, while shared styles (fonts, smooth scrolling) are defined in `app/globals.css`.

## Troubleshooting
- If dependencies fail to install locally, ensure your network can access the npm registry and that you're running Node 18+.
- For deployment issues, inspect the "Build Logs" tab in Vercel; it mirrors the commands listed above.
