# 🚀 Deployment Guide - GitHub & Vercel

This guide will help you deploy your Roblox Tutorial website to Vercel using GitHub.

---

## 📁 File Structure

Make sure your project has this structure:

```
your-project/
├── index.html
├── styles.css
├── script.js
├── README.md (optional)
└── .gitignore (optional)
```

---

## 🐙 Step 1: GitHub Setup

### Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in top right → **"New repository"**
3. Fill in:
   - **Repository name**: `roblox-admin-tutorial` (or your preferred name)
   - **Description**: "Modern Roblox Admin Panel Tutorial Website"
   - **Public** or **Private** (your choice)
   - ✅ Check "Add a README file" (optional)
4. Click **"Create repository"**

### Upload Your Files

**Option A: Using GitHub Web Interface** (Easiest)
1. Click **"Add file"** → **"Upload files"**
2. Drag and drop:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Click **"Commit changes"**

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd your-project

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🔷 Step 2: Vercel Deployment

### Create Vercel Account

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Deploy Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find your repository (`roblox-admin-tutorial`)
4. Click **"Import"**

### Configure Project Settings

Vercel will auto-detect it as a static site. You can customize:

**Framework Preset**: `Other` (default is fine)

**Root Directory**: `./` (leave as default)

**Build Settings**:
- Build Command: (leave empty)
- Output Directory: (leave empty)
- Install Command: (leave empty)

**Environment Variables**: None needed

5. Click **"Deploy"**

---

## ⚙️ Vercel Configuration File (Optional)

Create a `vercel.json` file in your root directory for advanced settings:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

This ensures proper routing for your static site.

---

## 🎉 Post-Deployment

### Your Site is Live!

After deployment (takes ~30 seconds):
- Vercel provides a URL like: `https://your-project.vercel.app`
- You can visit this URL immediately

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

### Automatic Deployments

Every time you push to GitHub:
- Vercel automatically detects changes
- Rebuilds and deploys your site
- Takes ~30 seconds

---

## 🛠️ Making Updates

### Update Your Website

1. Edit your files locally (or on GitHub)
2. Push changes to GitHub:
```bash
git add .
git commit -m "Updated tutorial content"
git push
```
3. Vercel automatically deploys the changes!

---

## 📝 Useful Git Commands

```bash
# Check status
git status

# Add specific file
git add index.html

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log
```

---

## 🐛 Troubleshooting

### Site Not Loading Properly

1. Check browser console (F12) for errors
2. Verify file paths are correct
3. Ensure all files are in the root directory
4. Check Vercel deployment logs

### CSS/JS Not Working

1. Make sure file names match exactly:
   - `styles.css` (not `style.css`)
   - `script.js` (not `scripts.js`)
2. Check the `<link>` and `<script>` tags in HTML
3. Files must be in the same directory as `index.html`

### Changes Not Showing

1. Clear browser cache (Ctrl + Shift + R)
2. Check if changes were pushed to GitHub
3. Verify Vercel deployment was successful
4. Wait ~30 seconds for deployment to complete

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Guides](https://guides.github.com)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)

---

## 🎯 Quick Checklist

- [ ] Create GitHub repository
- [ ] Upload files (index.html, styles.css, script.js)
- [ ] Create Vercel account
- [ ] Connect GitHub to Vercel
- [ ] Import and deploy project
- [ ] Test live site
- [ ] Set up custom domain (optional)

---

## 💡 Pro Tips

1. **Use branches** for major changes:
   ```bash
   git checkout -b new-feature
   # Make changes
   git add .
   git commit -m "Added new feature"
   git push -u origin new-feature
   ```

2. **Preview deployments**: Every branch gets its own preview URL on Vercel

3. **Environment Variables**: Use Vercel dashboard to add secrets

4. **Analytics**: Enable Vercel Analytics in project settings

5. **Performance**: Vercel automatically optimizes your static files

---

**Need Help?** 
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Support: [support.github.com](https://support.github.com)

Good luck with your deployment! 🚀
