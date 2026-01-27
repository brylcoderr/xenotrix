# XenotriX - Web, Mobile & AI Development Excellence

![XenotriX Banner](https://img.shields.io/badge/XenotriX-Innovating_the_Future-00ff88?style=for-the-badge&logo=react)

A production-ready, single-page agency website built with cutting-edge technologies and a unique coding/developer aesthetic. This project showcases modern web development practices with stunning visual effects, smooth animations, and comprehensive SEO implementation.

## 🚀 Live Demo

Visit the live site: [xenotrix.com](https://xenotrix.com)

## ✨ Features

### 🎨 Visual Design

- **Matrix Rain Effect** - Animated falling code background in hero section
- **Coding Aesthetic** - Terminal-style elements, code brackets, and syntax highlighting throughout
- **Glass Morphism** - Modern glassmorphic cards and components
- **Animated Grid Background** - Dynamic grid patterns with perspective
- **Particle Effects** - Floating particles and connection lines
- **Custom Cursor** - Crosshair cursor with glow effect
- **Glitch Effects** - Hover animations with glitch distortion

### 🎭 Animations

- **Framer Motion** - Smooth page transitions and component animations
- **Typing Animation** - Realistic typing effect in hero section
- **Counter Animations** - Scroll-triggered number counting
- **Hover Effects** - 3D tilt, scale, and rotation on cards
- **Scroll Animations** - Elements fade and slide in on scroll
- **Floating Elements** - Continuous floating animation for icons

### 📱 Sections

1. **Navigation** - Sticky header with scroll progress bar and mobile menu
2. **Hero** - Matrix background, typing animation, and floating code snippets
3. **Partner Logos** - Infinite horizontal scroll animation
4. **About** - Company overview with animated stats counter
5. **Why XenotriX** - Statistics with particle background
6. **Services** - 8 service cards with hover code previews
7. **Projects** - Tabbed showcase (Web Apps, Mobile Apps, AI Solutions)
8. **Comparison** - Old Way vs XenotriX Way side-by-side
9. **CTA** - Animated stars background with pulsing button
10. **Footer** - Comprehensive links with scroll-to-top button

### 🔍 SEO Implementation

- ✅ Complete meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data for rich snippets
- ✅ Semantic HTML5 markup
- ✅ Sitemap.xml with all pages
- ✅ Robots.txt with crawl rules
- ✅ Optimized heading hierarchy
- ✅ Alt text for all images
- ✅ Canonical URLs
- ✅ Mobile-friendly viewport

### ♿ Accessibility

- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Screen reader friendly
- ✅ Color contrast ratio 4.5:1+
- ✅ Skip to content link

### ⚡ Performance

- ✅ Lazy loading for images
- ✅ Code splitting
- ✅ Optimized animations (60fps)
- ✅ Debounced scroll listeners
- ✅ Memoized components
- ✅ WebP image format support

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - Latest React with concurrent features
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Libraries & Tools

- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **react-intersection-observer** - Scroll animations
- **react-type-animation** - Typing effects

### Development Tools

- **ESLint** - Code linting
- **Turbopack** - Fast bundler
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/xenotrix.git
   cd xenotrix
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   Navigate to http://localhost:3000
   ```

## 🏗️ Build for Production

### Build the application

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Start production server

```bash
npm start
```

## 📁 Project Structure

```
xenotrix/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles with coding aesthetic
├── components/
│   ├── Navigation.tsx      # Sticky navigation with scroll progress
│   ├── Hero.tsx            # Hero section with Matrix rain
│   ├── PartnerLogos.tsx    # Infinite scroll partner logos
│   ├── About.tsx           # About section with stats
│   ├── WhyXenotrix.tsx     # Statistics with counters
│   ├── Services.tsx        # Services grid with hover effects
│   ├── Projects.tsx        # Tabbed project showcase
│   ├── Comparison.tsx      # Old vs New comparison
│   ├── CTA.tsx             # Call-to-action with stars
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # SEO sitemap
│   └── favicon.ico         # Site favicon
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --color-primary: #00ff88; /* Matrix green */
  --color-secondary: #00d9ff; /* Cyan */
  --color-accent: #bd00ff; /* Purple */
  --color-bg-deep: #0a0a0a; /* Deep black */
  --color-bg-surface: #1a1a1a; /* Card background */
}
```

### Fonts

Fonts are loaded from Google Fonts in `app/globals.css`:

- **Headings**: JetBrains Mono
- **Body**: Inter

To change fonts, update the `@import` statement and font-family values.

### Content

All content is in the component files. Update text directly in:

- `components/Hero.tsx` - Hero headline and subheadline
- `components/About.tsx` - Company description
- `components/Services.tsx` - Service descriptions
- `components/Projects.tsx` - Project details
- `components/Footer.tsx` - Footer links and description

### Animations

Adjust animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  'fadeIn': 'fadeIn 0.6s ease-out',  // Change duration
  'float': 'float 3s ease-in-out infinite',
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Custom Server

1. Build: `npm run build`
2. Start: `npm start`
3. Serve on port 3000

## 🔧 Environment Variables

Create `.env.local` file (if needed):

```env
NEXT_PUBLIC_SITE_URL=https://xenotrix.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@xenotrix.com
```

## 📊 Performance Metrics

Target Lighthouse scores:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimization Tips

1. Use WebP images (<200KB each)
2. Enable lazy loading
3. Minimize JavaScript bundles
4. Use CDN for static assets
5. Enable Gzip compression

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Animation Performance

- Reduce particle count in Hero and CTA components
- Disable Matrix rain on mobile devices
- Use `will-change` CSS property sparingly

### Styling Issues

```bash
# Rebuild Tailwind CSS
npm run dev
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**XenotriX**

- Website: [xenotrix.com](https://xenotrix.com)
- Email: contact@xenotrix.com
- Phone: +91-95576 60208
- LinkedIn: [linkedin.com/company/xenotrix](https://linkedin.com/company/xenotrix)

## 🙏 Acknowledgments

- **React Team** - For React 19
- **Vercel** - For Next.js framework
- **Tailwind Labs** - For Tailwind CSS
- **Framer** - For Framer Motion

---

<div align="center">

**Built with ❤️ and `<code />` by XenotriX**

![Made with React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Made with Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js)
![Made with TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Made with Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

</div>
