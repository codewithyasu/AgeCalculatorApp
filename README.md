# HTML + Tailwind Starter Pack

Files included:
- `index.html` — Example page using Tailwind Play CDN (quick start).
- `css/main.css` — Small custom CSS.
- `js/app.js` — Starter JavaScript.
- `package.json` + `tailwind.config.cjs` + `css/input.css` — For npm-based setup (optional).
- `README.md` — This file.

## Quick start (CDN)
1. Unzip the folder.
2. Open `index.html` in your browser. It uses the Tailwind Play CDN (`https://cdn.tailwindcss.com`) so no build step is needed.

## NPM setup (optional)
If you want a local build (recommended for production):
1. Install Node.js (v16+ recommended).
2. `npm install`
3. `npm run build:css`  — generates `css/output.css` from `css/input.css`.
4. Update `index.html` to link `css/output.css` instead of `css/main.css` (or copy contents).

## Notes
- The Play CDN is great for prototyping. For production, use the npm build to purge unused styles.
- Customize `tailwind.config.cjs` to change theme, colors, or content paths.

Enjoy — modify and make it yours!
