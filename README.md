# Macrovesta - Website Modernization Project

> **Modernizing the future of agricultural risk management & trading**

## Project Overview

This repository contains a complete clone and modernization of the [Macrovesta.ai](https://macrovesta.ai/) website - a platform for agricultural commodity market intelligence, trading, and risk management.

**Client:** Earlam & Partners Ltd (Macrovesta)
**Industry:** Agricultural Technology / Commodity Trading
**Target Audience:** Commodity traders, cotton industry professionals, agricultural businesses
**Project Start:** October 27, 2025

---

## 🎯 Objectives

- ✅ **Preserve 100% of original content** (text, images, messaging)
- 🎨 **Modernize visual design** while maintaining brand identity
- ⚡ **Improve performance** (Core Web Vitals, Lighthouse scores)
- ♿ **Enhance accessibility** (WCAG 2.1 AA compliance)
- 📱 **Optimize mobile experience**
- 🔍 **Boost SEO** capabilities
- 🌙 **Add dark mode** support
- 🧩 **Enable disabled features** (Contact, About pages)

---

## 📁 Repository Structure

```
macrovesta/
├── README.md                  # This file
├── docs/                      # Comprehensive documentation
│   ├── COMPLETE_CONTENT_INVENTORY.md  # Every piece of content mapped
│   ├── SITE_STRUCTURE.md              # Site architecture & hierarchy
│   ├── MODERNIZATION_PLAN.md          # Technical roadmap
│   └── ASSETS_INVENTORY.md            # All images, files, assets
├── original-assets/           # All downloaded original assets
│   ├── images/                # WebP, JPG, SVG, ICO files
│   ├── acceptable-use-policy.pdf
│   └── modern-slavery-statement.pdf
└── [Future: src/, public/, next.config.js, etc.]
```

---

## 📚 Documentation

### 📖 [Complete Content Inventory](./docs/COMPLETE_CONTENT_INVENTORY.md)
Every word, button, link, and element from the original site mapped in detail.

**Includes:**
- Page metadata (title, description, Open Graph, Twitter Cards)
- Navigation structure
- Hero section content
- Feature descriptions
- Testimonials
- Footer content
- Color gradients
- Animations

### 🏗️ [Site Structure](./docs/SITE_STRUCTURE.md)
Complete breakdown of the site architecture, components, and user flows.

**Includes:**
- Page hierarchy
- Component breakdown
- Responsive breakpoints
- Navigation map
- Accessibility considerations

### 🚀 [Modernization Plan](./docs/MODERNIZATION_PLAN.md)
Detailed technical specification and roadmap for the rebuild.

**Includes:**
- Technology stack (Next.js 14+, Tailwind CSS, TypeScript)
- Design improvements
- Feature additions
- Performance goals
- SEO strategy
- Testing plan
- Deployment strategy

### 🖼️ [Assets Inventory](./docs/ASSETS_INVENTORY.md)
Complete catalog of all images, documents, and assets.

**Includes:**
- All downloaded files with sizes
- Embedded SVG graphics to extract
- Color palette
- Optimization recommendations
- Asset integration checklist

---

## 🛠️ Technology Stack (Planned)

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation

### Tooling
- **Package Manager:** npm/pnpm
- **Linting:** ESLint + Prettier
- **Testing:** Jest + React Testing Library + Playwright
- **Analytics:** Vercel Analytics

### Hosting
- **Platform:** Vercel
- **Domain:** macrovesta.ai
- **CDN:** Vercel Edge Network
- **Image Optimization:** Next.js Image component

---

## 📊 Current Status

### ✅ Completed
- [x] Full content audit and documentation
- [x] All assets downloaded (images, PDFs, icons)
- [x] Site structure mapped
- [x] Technical specification created
- [x] Modernization roadmap defined

### 🚧 In Progress
- [ ] Technology stack finalization
- [ ] Development environment setup

### ⏳ Pending
- [ ] Next.js project initialization
- [ ] Component development
- [ ] Page implementation
- [ ] Testing
- [ ] Deployment

---

## 🎨 Design Highlights

### Visual Style
- **Primary Color:** Custom blue (mv-blue-700, mv-blue-900)
- **Accent Colors:**
  - Problem section: Red-orange gradient (#CE5B48 → #EF1D5C)
  - Solution section: Turquoise-green gradient (#3BBCAC → #44B549)
- **Typography:** System fonts (to be modernized)
- **Layout:** Responsive grid with full-screen hero

### Key Features
- Interactive hover effects on feature cards
- Split problem/solution section with overlays
- Rotating text showcasing market data types
- YouTube video integration
- Client testimonials carousel
- PDF document downloads

---

## 📦 Assets Summary

| Category | Count | Size |
|----------|-------|------|
| WebP Images | 7 | ~768 KB |
| JPG Images | 1 | ~100 KB |
| SVG Graphics | 1 downloaded + 9 embedded | ~2 KB |
| Icons | 1 | ~15 KB |
| PDFs | 2 | ~361 KB |
| **Total** | **12 files** | **~1.24 MB** |

### Images Included
- Logo (small & large, white versions)
- Hero background (2560x1440)
- Problem/Solution backgrounds
- Problem/Solution person illustrations
- Greece flag (testimonial)
- Social sharing image
- Favicon

### Documents
- Acceptable Use Policy PDF
- Modern Slavery Statement PDF

---

## 🔗 Key Links

- **Original Site:** https://macrovesta.ai/
- **Parent Company:** https://eapconsult.com/
- **GitHub Repo:** https://github.com/coldlavaai/macrovesta
- **YouTube Video:** https://www.youtube.com/embed/jar9GeTyWIw

---

## 📝 Original Site Pages

### Active
- ✅ Homepage (/)
- ✅ Acceptable Use Policy (PDF)
- ✅ Modern Slavery Statement (PDF)

### Disabled (To Be Enabled)
- ❌ Contact (/contact) - pointer-events-none
- ❌ About (/about) - pointer-events-none

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Git

### Installation (Coming Soon)
```bash
# Clone the repository
git clone https://github.com/coldlavaai/macrovesta.git

# Navigate to project
cd macrovesta

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

---

## 🧪 Testing

### Testing Strategy
- **Unit Tests:** Component rendering, utilities
- **Integration Tests:** User flows, forms
- **E2E Tests:** Critical journeys, cross-browser
- **Visual Regression:** Screenshot comparisons
- **Accessibility:** Axe, WAVE, Lighthouse

---

## 📈 Performance Goals

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

---

## ♿ Accessibility Goals

- **Standard:** WCAG 2.1 Level AA
- **Keyboard Navigation:** Full support
- **Screen Readers:** Optimized
- **Color Contrast:** AA compliant
- **ARIA Labels:** Comprehensive

---

## 🔐 Security

- HTTPS only
- Content Security Policy headers
- CORS configuration
- Rate limiting
- Input sanitization
- Environment variable protection

---

## 📞 Contact

**Developer:** Oliver Tatler
**Business:** Cold Lava - AI Automation
**Email:** oliver@otdm.net
**GitHub:** @coldlavaai

**Client:** Macrovesta (Earlam & Partners Ltd)
**Industry:** Agricultural Market Intelligence

---

## 📄 License

Copyright © 2025 Earlam & Partners Ltd. All rights reserved.

This project is for the modernization of Macrovesta.ai. All content, branding, and intellectual property belongs to Earlam & Partners Ltd.

---

## 🙏 Acknowledgments

- Original Macrovesta team for the comprehensive content and branding
- EAP Consult for world-class commodity market expertise
- The cotton industry professionals who trust Macrovesta

---

## 📅 Project Timeline

- **Phase 1:** Foundation & Setup (Week 1)
- **Phase 2:** Homepage Development (Week 2)
- **Phase 3:** Additional Pages (Week 3)
- **Phase 4:** Enhancements (Week 4)
- **Phase 5:** Testing & Launch (Week 5)

---

## 🎯 Success Metrics

### Performance
- Lighthouse score improvement: Target 90+
- Page load time: Target < 2s
- Mobile responsiveness: 100%

### Business
- Organic traffic increase: +30%
- Demo requests: +40%
- Contact submissions: +35%
- Session duration: +25%

---

**Last Updated:** October 27, 2025
**Version:** 1.0.0 (Documentation Phase)
**Status:** Planning & Asset Collection Complete ✅
