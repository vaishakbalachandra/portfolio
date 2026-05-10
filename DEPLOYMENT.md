# 🚀 Deployment Guide - Vaishak's Portfolio

This guide will help you deploy your premium portfolio website to various hosting platforms.

## Quick Start (5 Minutes)

The fastest way to get your portfolio live is using Vercel:

1. Push your code to GitHub (see instructions below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Click "Deploy" - Done! Your site will be live in ~2 minutes

Your portfolio will be live at: `https://your-username.vercel.app`

---

## Option 1: Vercel (RECOMMENDED) ⭐

**Why Vercel?**
- Free hosting
- Automatic deployments on every GitHub push
- Built-in CDN and SSL
- Perfect for Next.js projects
- Custom domain support

**Steps:**

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
cd portfolio
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Premium ML Engineer Portfolio"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., vaishakbalachandra.com)
4. Follow DNS configuration instructions
5. SSL certificate is added automatically

---

## Option 2: Netlify

**Why Netlify?**
- Free hosting with generous limits
- Easy drag-and-drop deploy
- Automatic builds from Git
- Form handling built-in

**Steps:**

### Method A: Drag & Drop (Easiest)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `out/` folder to the Netlify drop zone
4. Done! Your site is live

### Method B: GitHub Integration

1. Push code to GitHub (see Vercel steps above)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

**Custom Domain:**
1. Go to "Domain settings"
2. Add custom domain
3. Update DNS records as instructed

---

## Option 3: GitHub Pages (Free)

**Why GitHub Pages?**
- Completely free
- Easy if you're already using GitHub
- Built-in version control

**Steps:**

### Step 1: Update next.config.js

Add base path if deploying to username.github.io/repository:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/repository-name', // Only if using project pages
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

### Step 2: Build and Deploy

```bash
# Build
npm run build

# The 'out' directory contains your static site

# Option A: Manual Deploy
# 1. Go to repository settings
# 2. Enable GitHub Pages
# 3. Upload 'out' folder contents to gh-pages branch

# Option B: Automated with gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d out"

# Then run:
npm run deploy
```

Your site will be at: `https://username.github.io/repository`

---

## Option 4: AWS S3 + CloudFront

**Why AWS?**
- Professional infrastructure
- Complete control
- Can be combined with other AWS services
- Good for enterprise portfolios

**Steps:**

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Go to AWS S3
   - Create bucket (e.g., `vaishak-portfolio`)
   - Enable static website hosting
   - Upload `out/` folder contents

3. **Configure CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Add SSL certificate (free with AWS Certificate Manager)

4. **Setup Route53 (Optional):**
   - Add your custom domain
   - Point to CloudFront distribution

**Cost:** ~$1-5/month depending on traffic

---

## Option 5: Custom Server (VPS/Dedicated)

**Why Custom Server?**
- Full control
- Can run backend services
- Professional setup

**Steps:**

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload to server:**
   ```bash
   scp -r out/* user@your-server:/var/www/portfolio
   ```

3. **Configure nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Custom Domain Setup

### For Vercel/Netlify:

1. **Purchase domain** from:
   - Namecheap
   - Google Domains
   - GoDaddy
   - Cloudflare

2. **Add to platform:**
   - Add domain in Vercel/Netlify dashboard
   - Get DNS records (usually A record or CNAME)

3. **Update DNS:**
   - Go to domain registrar
   - Add provided DNS records
   - Wait 24-48 hours for propagation

### Recommended Domain:
- `vaishakbalachandra.com`
- `vaishak.dev`
- `vaishak.ai`

---

## Environment Setup for Forms

To make contact/testimonial forms work, you'll need a backend:

### Option A: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update form action in Contact.tsx:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Netlify Forms

If using Netlify, add to forms:
```html
<form name="contact" netlify>
```

### Option C: Custom Backend

Create API routes or serverless functions to handle form submissions.

---

## Performance Optimization Checklist

Before deploying, ensure:

- ✅ Images are optimized (use WebP format)
- ✅ Resume PDF is compressed
- ✅ No console errors
- ✅ All links work
- ✅ Mobile responsive
- ✅ SEO meta tags are set
- ✅ Dark mode works properly
- ✅ Forms validate correctly

---

## Post-Deployment Checklist

After deployment:

1. **Test Everything:**
   - [ ] All sections load properly
   - [ ] Navigation works smoothly
   - [ ] Forms submit correctly
   - [ ] Resume downloads
   - [ ] External links open correctly
   - [ ] Mobile version works
   - [ ] Dark/light mode toggle works

2. **SEO Setup:**
   - [ ] Submit to Google Search Console
   - [ ] Create sitemap.xml
   - [ ] Add to LinkedIn profile
   - [ ] Share on social media

3. **Analytics (Optional):**
   - [ ] Google Analytics
   - [ ] Vercel Analytics
   - [ ] Hotjar for user behavior

---

## Updating Your Portfolio

### Quick Updates (Content Changes):

1. Edit component files
2. Test locally: `npm run dev`
3. Commit and push to GitHub
4. Vercel/Netlify auto-deploys

### Major Updates:

1. Create a new branch
2. Make changes
3. Test thoroughly
4. Merge to main
5. Automatic deployment

---

## Troubleshooting

**Build fails:**
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Clear cache: `rm -rf .next node_modules && npm install`

**Images not loading:**
- Ensure images are in `public/` folder
- Check file names match exactly (case-sensitive)

**Dark mode not working:**
- Clear browser cache
- Check localStorage is enabled

**Forms not working:**
- Integrate backend service (Formspree, Netlify Forms)
- Check form validation

---

## Support & Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://framer.com/motion)

---

## 🎯 Final Step: Share Your Portfolio!

Once deployed, update:

1. **LinkedIn:**
   - Add website to profile
   - Share post about new portfolio

2. **Resume:**
   - Add portfolio URL

3. **GitHub:**
   - Pin repository
   - Add website to bio

4. **Email Signature:**
   - Include portfolio link

5. **Job Applications:**
   - Include in cover letters
   - Reference in applications

---

**You're now ready to impress recruiters with your $100,000-caliber portfolio!** 🚀

For questions: vaishakbalachandra01252002@gmail.com
