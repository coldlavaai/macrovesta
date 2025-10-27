# Macrovesta - Complete Assets Inventory

**Capture Date:** October 27, 2025
**Original Site:** https://macrovesta.ai/

---

## Downloaded Assets Summary

### Images (WebP)
Total: 8 WebP files

| Filename | Size | Original URL | Usage |
|----------|------|--------------|-------|
| logo-small.webp | ~1.2 KB | /_next/image?url=%2Flogo-small.webp&w=64&q=75 | Navigation logo (32x32) |
| macrovesta-logo-white.webp | ~24 KB | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmacrovesta-logo-white.9054cf82.webp&w=2048&q=75 | Hero logo (1000x500), Footer logo (229x80) |
| main-bg.webp | ~417 KB | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-bg.3217afa2.webp&w=3840&q=75 | Hero background (2560x1440) |
| prob-bg.webp | ~90 KB | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprob-bg.e6739fb3.webp&w=3840&q=75 | Problem section background |
| prob-person.webp | ~51 KB | /_next/image?url=%2Fprob-person.webp&w=1920&q=75 | Problem section person (800x800) |
| sol-bg.webp | ~120 KB | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsol-bg.7b0a1bfa.webp&w=3840&q=75 | Solution section background |
| sol-person.webp | ~65 KB | /_next/image?url=%2Fsol-person.webp&w=1920&q=75 | Solution section person (800x800) |

**Total WebP Size:** ~768 KB

### Vector Graphics (SVG)
Total: 1 SVG file

| Filename | Size | Original URL | Usage |
|----------|------|--------------|-------|
| greece-flag.svg | ~1.8 KB | /flags/GR.svg | Testimonial country flag (36px height) |

### Images (JPG)
Total: 1 JPG file

| Filename | Size | Original URL | Usage |
|----------|------|--------------|-------|
| social-sharing.jpg | ~100 KB | /social-sharing.jpg | Open Graph & Twitter Card image |

### Icons
Total: 1 icon file

| Filename | Size | Original URL | Usage |
|----------|------|--------------|-------|
| favicon.ico | ~15 KB | /favicon.ico | Browser favicon |

### Documents (PDF)
Total: 2 PDF files

| Filename | Size | Original URL | Usage |
|----------|------|--------------|-------|
| acceptable-use-policy.pdf | ~305 KB | /acceptable-use-policy.pdf | Legal document |
| modern-slavery-statement.pdf | ~56 KB | /modern-slavery-statement.pdf | Legal document |

**Total PDF Size:** ~361 KB

---

## Embedded SVG Graphics

The following SVG icons are embedded directly in the HTML and need to be extracted and saved as separate components:

### 1. Arrow Icon (3 color variants)

**File:** `ArrowIcon.svg` (create as React component)

**Gradients:**
1. **orange_to_red**: #CE5B48 → #EF1D5C (Problem section)
2. **turquoise_to_green**: #3BBCAC → #44B549 (Solution section, feature bullets)
3. **purple_gradient**: #A14CAC → #964AAE → #7B47B5 → #4F42C1 → #133BD1 (alternate)

**SVG Path:**
```svg
<svg viewBox="0 0 25 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.1878 42.0047H11.8361L11.4341 41.3079C11.4341 41.3079 1.23142 23.6002 1.17215 23.4961L0.986328 23.1725V22.7993L0.986328 0.83371L4.4593 0.83371L12.9863 15.4993L21.5134 0.835312L24.9543 0.835312L24.9863 23.3551L14.1878 42.0063V42.0047ZM3.76887 22.4292C4.89342 24.382 10.7965 34.6279 13.0152 38.4789L22.2022 22.6102L22.1782 5.22618L12.9863 21.0356L3.76887 5.18293L3.76887 22.4292Z" fill="url(#gradient_id)"/>
  <defs>
    <linearGradient id="gradient_id" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="[start_color]"/>
      <stop offset="100%" stop-color="[end_color]"/>
    </linearGradient>
  </defs>
</svg>
```

**Rotations Used:**
- -90deg (left-pointing)
- 90deg (right-pointing)

**Sizes Used:**
- w-6 h-6 (24px)
- w-8 h-8 (32px)
- w-16 h-16 (64px)

### 2. Hamburger Menu Icon

**File:** `HamburgerIcon.svg`

**SVG Path:**
```svg
<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
```

### 3. Feature Icons (6 unique icons)

These are complex multi-path SVGs embedded in the feature cards. Each needs to be extracted:

**Files to create:**
1. `InteractiveReportingIcon.svg` - Analytics/reporting symbol
2. `AIAnalysisIcon.svg` - AI/analysis symbol
3. `RealTimeDataIcon.svg` - Real-time data symbol
4. `OperationManagementIcon.svg` - Operations symbol
5. `EducationalAnalysisIcon.svg` - Education symbol
6. `AIConsultantIcon.svg` - AI consultant symbol

**Colors Used:**
- Primary: #051D38 (dark blue)
- Gradient fills (various)

**Dimensions:**
- Vary by icon (w-44 to w-56, h-44)

---

## External Assets

### Not Downloaded (Hosted Externally)

| Resource | URL | Type |
|----------|-----|------|
| YouTube Video | https://www.youtube.com/embed/jar9GeTyWIw | Video embed |
| EAP Consult Site | https://eapconsult.com/ | External link |

### Fonts
- System fonts (no custom fonts downloaded)
- Font stack: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"

---

## Asset Optimization Recommendations

### Images

**Current State:**
- Format: WebP (good)
- Total size: ~1.2 MB
- Optimization: Some images could be smaller

**Recommendations:**
1. **Main background (417 KB)** → Could be reduced to ~150 KB with better compression
2. **Social sharing (100 KB)** → Optimize to ~50 KB
3. Consider AVIF format for even better compression (with WebP fallback)
4. Generate multiple sizes for responsive images
5. Add blur placeholder for hero images

### Proposed Sizes

**Logo Small:**
- Current: 32x32
- Add: 64x64 (Retina)

**Logo Large (Hero):**
- Current: 1000x500
- Generate: 500x250, 750x375, 1000x500, 1500x750 (responsive)

**Main Background:**
- Current: 2560x1440
- Generate: 1920x1080, 1280x720, 960x540, 640x360 (responsive)
- Mobile: 480x270

**Person Images:**
- Current: 800x800
- Generate: 400x400, 600x600, 800x800 (responsive)

**Social Sharing:**
- Current: Likely 1200x630 (OG standard)
- Keep at 1200x630
- Optimize compression

---

## SVG Extraction Tasks

- [ ] Extract Arrow SVG with 3 gradient variants
- [ ] Extract Hamburger menu SVG
- [ ] Extract Feature Icon 1: Interactive Reporting
- [ ] Extract Feature Icon 2: AI-Assisted Analysis
- [ ] Extract Feature Icon 3: Real Time Industry Data
- [ ] Extract Feature Icon 4: Operation Management
- [ ] Extract Feature Icon 5: Educational Analysis
- [ ] Extract Feature Icon 6: AI Digital Consultant

---

## Color Palette (Extracted from Assets)

### Primary Colors
- **Dark Blue**: #051D38
- **Blue 700**: (mv-blue-700) - TBD exact hex
- **Blue 900**: (mv-blue-900) - TBD exact hex
- **Blue Gray**: (mv-blue-gray) - TBD exact hex
- **White**: #FFFFFF

### Gradient Colors

**Problem (Red/Orange):**
- Start: #CE5B48
- End: #EF1D5C

**Solution (Green/Turquoise):**
- Start: #3BBCAC
- End: #44B549

**Purple Variant:**
- Stops: #A14CAC, #964AAE, #7B47B5, #4F42C1, #133BD1

---

## Missing Assets to Capture

### Additional Country Flags
The site may have more testimonials with different flags. Check for:
- /flags/US.svg
- /flags/UK.svg
- /flags/CN.svg
- /flags/IN.svg
- etc.

### Static Assets Not Visible
May exist in the Next.js build:
- Additional logos
- Loading spinners
- Error page images
- 404 page graphics

---

## Asset Integration Checklist

### Phase 1: Setup
- [ ] Create `/public/images` directory structure
- [ ] Create `/public/documents` directory
- [ ] Create `/public/icons` directory
- [ ] Create `/src/components/icons` for SVG components

### Phase 2: Images
- [ ] Copy all WebP images to `/public/images`
- [ ] Generate responsive variants
- [ ] Optimize file sizes
- [ ] Create AVIF versions
- [ ] Add blur placeholders

### Phase 3: Documents
- [ ] Copy PDFs to `/public/documents`
- [ ] Verify PDF accessibility

### Phase 4: Icons & SVGs
- [ ] Extract embedded SVGs
- [ ] Create React components for each icon
- [ ] Implement gradient variants
- [ ] Create icon library

### Phase 5: Optimization
- [ ] Implement lazy loading
- [ ] Add proper alt text
- [ ] Configure Next.js Image
- [ ] Set up CDN (Vercel automatic)

---

## File Naming Conventions

### Images
- Kebab-case: `hero-background.webp`
- Descriptive: `problem-section-person.webp`
- Variants: `logo-small@2x.webp`, `logo-small@3x.webp`

### Icons
- PascalCase components: `ArrowIcon.tsx`
- Descriptive: `InteractiveReportingIcon.tsx`

### Documents
- Kebab-case: `acceptable-use-policy.pdf`
- Lowercase: `modern-slavery-statement.pdf`

---

## Storage Locations

```
/Users/oliver/Documents/macrovesta/
├── original-assets/          ✅ Downloaded
│   ├── images/               ✅ 8 WebP, 1 JPG, 1 ICO, 1 SVG
│   ├── acceptable-use-policy.pdf      ✅
│   └── modern-slavery-statement.pdf   ✅
├── docs/                     ✅ Documentation
│   ├── COMPLETE_CONTENT_INVENTORY.md  ✅
│   ├── SITE_STRUCTURE.md              ✅
│   ├── MODERNIZATION_PLAN.md          ✅
│   └── ASSETS_INVENTORY.md            ✅ (this file)
└── [Future: src/, public/, etc.]
```

---

## Total Assets Summary

| Category | Count | Total Size |
|----------|-------|------------|
| WebP Images | 7 | ~768 KB |
| JPG Images | 1 | ~100 KB |
| SVG Graphics | 1 (downloaded) + 9 (embedded) | ~1.8 KB + TBD |
| Icons | 1 | ~15 KB |
| PDFs | 2 | ~361 KB |
| **TOTAL** | **12 files** | **~1.24 MB** |

**Note:** Does not include embedded SVG icons or external resources (YouTube video).
