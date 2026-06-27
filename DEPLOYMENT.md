# 🚀 Deployment Guide — Fayez Mrouj Portfolio

This guide walks you through deploying the website to **GitHub + Vercel** in under 5 minutes.

---

## ✅ Prerequisites

- A [GitHub](https://github.com) account (free)
- A [Vercel](https://vercel.com) account (free — sign up with your GitHub account)
- The project files (this repository)

---

## Step 1: Create a GitHub Repository (1 min)

1. Go to https://github.com/new
2. **Repository name**: `fayez-mrouj-portfolio`
3. **Description**: `Personal brand website for Fayez Ahmad Mrouj — International Physics Educator`
4. Set to **Public** or **Private** (both work with Vercel)
5. **Do NOT** check "Add a README" or ".gitignore" — the project already has both
6. Click **"Create repository"**

You'll see a screen with instructions. Ignore them — we'll push the project differently.

---

## Step 2: Push the Project to GitHub (2 min)

### Option A: Upload via GitHub Web UI (easiest, no terminal)

1. In your new empty repo, click **"uploading an existing file"** (link in the "…or push an existing repository from the command line" section)
2. **Drag and drop** all the files from your project folder EXCEPT:
   - `node_modules/` (huge, not needed — Vercel installs dependencies itself)
   - `.next/` (build artifacts)
   - `dev.log`, `server.log`
   - `upload/`, `download/`, `worklog.md`, `scripts/extracted/`
   - `.zscripts/`, `examples/`, `mini-services/`, `db/`
   - `Caddyfile`
3. Add a commit message: `Initial commit — Fayez Mrouj portfolio`
4. Click **"Commit changes"**

### Option B: Push via terminal (if you have git installed)

```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit — Fayez Mrouj portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fayez-mrouj-portfolio.git
git push -u origin main
```

When prompted, enter your GitHub username and a Personal Access Token (not your password).
Create a token at: https://github.com/settings/tokens (classic token with `repo` scope).

---

## Step 3: Deploy to Vercel (1 min)

1. Go to https://vercel.com/new
2. **Import** your `fayez-mrouj-portfolio` repository from GitHub
   - First time? Click "Configure GitHub App" to grant Vercel access
3. On the configuration page, **leave everything default**:
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `next build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `bun install` or `npm install` (auto-detected)
4. (Optional) Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-project-name.vercel.app`
   (You'll see the actual URL Vercel assigns after the first deploy — you can update this later)
5. Click **"Deploy"**

⏱️ Vercel will build and deploy in ~2-3 minutes. You'll see live build logs.

---

## Step 4: Get Your Live URL 🎉

After deployment succeeds, Vercel gives you a URL like:

```
https://fayez-mrouj-portfolio-abc123.vercel.app
```

(or similar — based on your repo name)

You can:
- Click **"Visit"** to see your live site
- Share the URL with recruiters/schools
- Add a custom domain later (Vercel → Settings → Domains)

---

## Step 5: Update the Site URL (optional but recommended)

After your first deploy:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add or update:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://your-actual-vercel-url.vercel.app` (or your custom domain)
   - **Environment**: Production, Preview, Development
3. Click **Save**
4. Go to **Deployments** → click the ⋮ next to latest → **Redeploy**

This ensures the sitemap, robots.txt, and Open Graph tags use the correct URL.

---

## 🔄 Making Updates

Anytime you push changes to GitHub (the `main` branch), Vercel **automatically rebuilds and deploys** — usually within 60 seconds.

```bash
# Make your edits...
git add .
git commit -m "Update content / fix typo / etc"
git push
```

Watch the auto-deploy at: https://vercel.com/YOUR_USERNAME/fayez-mrouj-portfolio

---

## 🆘 Troubleshooting

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Most common: missing environment variables or a TypeScript error
- Run `bun run build` locally to test before pushing

### Images not loading
- Ensure `public/portrait.jpg`, `public/logo-fayez.png`, `public/Fayez-Mrouj-CV.pdf` are committed to GitHub
- Vercel serves files in `/public` at the root URL

### Contact form returns 500
- The form is serverless — should work out of the box on Vercel
- Check Function Logs in Vercel dashboard

### Need help?
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

---

**That's it!** Your portfolio is live on the internet. 🌍
