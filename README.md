# Vaishak Balachandra - Premium Portfolio Website

A $100,000-caliber portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. This premium-tier portfolio showcases Machine Learning and GenAI expertise with stunning animations, 3D particle effects, and modern design.

## 🚀 Features

- **Ultra-Premium Design**: Modern, clean, sophisticated aesthetic with custom animations
- **3D Particle Background**: Interactive Three.js background effects
- **Smooth Animations**: Framer Motion for buttery-smooth transitions
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Optimized**: Meta tags and semantic HTML for search engines
- **Interactive Components**: 
  - Dynamic typing effect in hero section
  - Animated skill progress bars
  - Interactive project cards
  - Timeline experience view
  - Testimonial collection form
  - Contact form with validation
  - Scroll progress indicator
  - Floating stats badges

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Vaishak_Master_Resume.pdf
│   └── profile-photo.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Certifications.tsx
│       ├── Publications.tsx
│       ├── Achievements.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── ParticleBackground.tsx
│       └── ScrollProgress.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Typography**: Inter, JetBrains Mono
- **Language**: TypeScript

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Preview Production Build

```bash
npm run start
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

### Option 2: Netlify

1. Build the site: `npm run build`
2. Deploy the `out/` folder to Netlify
3. Or connect GitHub repository for automatic deployments

### Option 3: GitHub Pages

1. Build: `npm run build`
2. Push the `out/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 4: Custom Server

1. Build: `npm run build`
2. Serve the `out/` directory with any static file server (nginx, Apache, etc.)

## 🎨 Customization

### Update Personal Information
Edit content in component files:
- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Biography and story
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Project showcases
- `src/components/Skills.tsx` - Technical skills
- `src/components/Certifications.tsx` - Certifications
- `src/components/Publications.tsx` - Research papers
- `src/components/Contact.tsx` - Contact information

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Update Images
Replace files in `public/`:
- `profile-photo.png` - Your professional headshot
- `Vaishak_Master_Resume.pdf` - Your resume PDF

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized images and lazy loading
- Minimal JavaScript bundle

## 🔒 Privacy & Security

- No analytics tracking by default
- No cookies required
- Contact form data handled client-side (integrate backend for production)
- Testimonial form ready for backend integration

## 📄 License

This portfolio is proprietary and confidential. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- Email: vaishakbalachandra01252002@gmail.com
- LinkedIn: [linkedin.com/in/vaishakbalachandra](https://www.linkedin.com/in/vaishakbalachandra/)

## 🎯 Key Sections

1. **Hero**: Dynamic introduction with typing animation
2. **About**: Personal story and key statistics
3. **Experience**: Timeline of professional experience
4. **Projects**: Featured project showcases
5. **Skills**: Animated skill proficiency bars
6. **Certifications**: Professional credentials
7. **Publications**: Research papers and publications
8. **Achievements**: Awards and recognition
9. **Testimonials**: Recommendations (with collection form)
10. **Contact**: Contact form and information

---

**Built with ❤️ for elite ML engineering opportunities**

Targeting: Apple, Microsoft, Google, Meta, NVIDIA, Anthropic, Tesla, Adobe, and other top-tier tech companies.
