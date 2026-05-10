# ⚡ QUICK START GUIDE

Get your portfolio live in 10 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
cd portfolio
npm install
```

## Step 2: Test Locally (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 - Your portfolio should be running!

## Step 3: Deploy to Vercel (5 minutes)

### 3a. Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Premium Portfolio"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 3b. Deploy

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**DONE!** 🎉 Your portfolio is live!

## Step 4: Customize (Ongoing)

### Update Your Information

1. **Profile Photo:** Replace `public/profile-photo.png`
2. **Resume:** Replace `public/Vaishak_Master_Resume.pdf`
3. **Content:** Edit files in `src/components/`

### Key Files to Update:
- `src/components/Hero.tsx` - Your name and title
- `src/components/About.tsx` - Your story
- `src/components/Contact.tsx` - Email, phone, location
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Your projects

### Test Changes Locally

```bash
npm run dev
```

### Deploy Updates

```bash
git add .
git commit -m "Updated content"
git push
```

Vercel automatically redeploys on every push!

## Customization Options

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#0ea5e9',  // Your brand color
  },
  accent: {
    600: '#d946ef',  // Accent color
  },
}
```

### Add Custom Domain

1. Buy domain (Namecheap, Google Domains)
2. In Vercel: Settings → Domains
3. Add domain and follow DNS instructions

## File Structure

```
portfolio/
├── public/              # Static assets
│   ├── profile-photo.png
│   └── Vaishak_Master_Resume.pdf
├── src/
│   ├── app/            # Next.js app configuration
│   └── components/     # All page sections
├── package.json        # Dependencies
└── README.md          # Full documentation
```

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Preview production build
npm run lint     # Check for errors
```

## Need Help?

- **Full Documentation:** See `README.md`
- **Deployment Guide:** See `DEPLOYMENT.md`
- **Issues:** Check console for errors

## Pro Tips 💡

1. **Test on mobile** - Use Chrome DevTools mobile view
2. **Check all links** - Click every button and link
3. **Dark mode** - Toggle and verify everything looks good
4. **Resume download** - Make sure it works
5. **Forms** - Test contact and testimonial forms
6. **Performance** - Run Lighthouse audit in Chrome

## What's Included

✅ Dark/Light mode
✅ Responsive design
✅ Animated sections
✅ 3D particle background
✅ Contact form
✅ Testimonial collection
✅ Resume download
✅ Social media links
✅ Project showcases
✅ Skills visualization
✅ Certification grid
✅ Publications list
✅ SEO optimized

## Next Steps

1. ✅ Deploy to Vercel
2. 📝 Customize all content
3. 🎨 Adjust colors/styling
4. 🌐 Add custom domain
5. 📊 Add analytics (optional)
6. 🔗 Share on LinkedIn
7. 📧 Update email signature
8. 💼 Include in job applications

---

## Support

Questions? Email: vaishakbalachandra01252002@gmail.com

**Now go land that dream ML Engineer role!** 🚀
