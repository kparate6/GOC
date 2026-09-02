# Recipe Galley (recipegalley.in)

A simple multi-page website for healthy recipes.

## Site structure

```
recipegalley/
├── index.html                          → https://recipegalley.in/
├── css/styles.css
├── js/recipe-nav.js
└── receipe/
    ├── vermacilly/index.html           → https://recipegalley.in/receipe/vermacilly
    ├── watermelon-juice/index.html     → https://recipegalley.in/receipe/watermelon-juice
    └── rice-flour-paratha/index.html   → https://recipegalley.in/receipe/rice-flour-paratha
```

## Preview locally

Python is not installed on this PC yet. Pick one option:

**Option 1 – Install Python (recommended)**

1. Download from [python.org/downloads](https://www.python.org/downloads/)
2. During install, check **“Add Python to PATH”**
3. Restart PowerShell, then run:

```powershell
cd C:\Users\kirti\recipegalley
python -m http.server 8080
```

4. Open http://localhost:8080/ in your browser

**Option 2 – Cursor Live Server extension**

Install the “Live Server” extension in Cursor, open `index.html`, and click **Go Live**.

**Option 3 – Deploy first**

Upload to Netlify (see below) and preview on your live URL immediately.

> Do not double-click HTML files — styles use `/css/...` paths and need a web server.

## Deploy to recipegalley.in

### Option A: Netlify (easiest, free)

1. Create a free account at [netlify.com](https://www.netlify.com).
2. Drag and drop the entire `recipegalley` folder onto the Netlify dashboard.
3. Go to **Domain settings** → **Add custom domain** → enter `recipegalley.in`.
4. Netlify will show DNS records. In your domain registrar (GoDaddy, Namecheap, etc.), add:
   - **A record**: `@` → Netlify IP (shown in dashboard, often `75.2.60.5`)
   - **CNAME**: `www` → your Netlify site URL (e.g. `yoursite.netlify.app`)
5. Wait 15–60 minutes for DNS to propagate.

### Option B: GitHub Pages (free)

1. Install [Git](https://git-scm.com/download/win) if needed.
2. Create a GitHub repository and push this folder.
3. In repo **Settings → Pages**, set source to `main` branch, folder `/ (root)`.
4. Add a file named `CNAME` containing: `recipegalley.in`
5. At your domain registrar, point DNS to GitHub Pages (A records for `@`, CNAME for `www`).

### Option C: Traditional web hosting (cPanel / Hostinger / etc.)

1. Log in to your hosting control panel.
2. Open **File Manager** → go to `public_html` (or `www`).
3. Upload all files keeping the same folder structure.
4. Ensure `index.html` is in the root of `public_html`.
5. Point your domain A record to your hosting provider’s IP.

## Add more recipes later

1. Create a new folder: `receipe/your-recipe-name/index.html`
2. Copy any existing recipe page and edit the content.
3. Add a new `<option>` in the dropdown on every page (search for `recipe-dropdown`).

## Notes

- URL path uses `receipe` (as you specified), not `recipe`.
- Vermicelli URL uses `vermacilly` (as you specified).
