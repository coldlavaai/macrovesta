# Macrovesta.ai - Site Structure Map

## Directory Structure

```
macrovesta.ai/
├── / (Homepage)
├── /contact (Currently disabled)
├── /about (Currently disabled)
├── /acceptable-use-policy.pdf
├── /modern-slavery-statement.pdf
├── /social-sharing.jpg
├── /favicon.ico
├── /logo-small.webp
├── /macrovesta-logo-white.webp
├── /prob-person.webp
├── /sol-person.webp
└── /flags/
    └── GR.svg
```

## Page Hierarchy

### Homepage (/)
1. **Navigation Bar** (Sticky)
   - Logo (links to /)
   - Desktop nav links
   - Login button
   - Mobile hamburger menu

2. **Hero Section**
   - Full-screen background image
   - Large logo
   - Tagline
   - 2 CTA buttons

3. **Rotating Text Section**
   - Dynamic content showcasing different market data types

4. **Problem/Solution Split Section**
   - Left: The Problem (with hover effects)
   - Right: Our Solution (with hover effects)

5. **Features Grid**
   - 6 feature cards in responsive grid
   - Each with icon, title, and hover-revealed bullets

6. **Video Section**
   - YouTube embed
   - Title and description

7. **Social Proof Section**
   - Client testimonial heading
   - Company description

8. **Testimonial Card**
   - Quote
   - Attribution with flag
   - Navigation

9. **Footer**
   - 3 columns: Connect, Resources, Legal
   - Logo
   - Copyright

### External Pages
- https://eapconsult.com/ (parent company)

### Planned Pages (Currently Disabled)
- /contact
- /about

## Component Breakdown

### Reusable Components

1. **Arrow Icon SVG**
   - Used in: Problem section, Solution section, Feature bullets
   - Variants: 3 gradient colors
   - Rotations: -90deg, 90deg
   - Sizes: h-6 w-6, h-8 w-8, h-16 w-16

2. **Feature Card**
   - Structure: Icon + Title + Hidden Bullets
   - Hover behavior: Icon fades, bullets appear
   - Count: 6 instances

3. **Button**
   - Primary: Gradient background, white border
   - Secondary: Underline style, no background
   - All: text-xl, px-4 py-2, rounded-md

4. **Navigation Link**
   - Hover: underline effect
   - Disabled state: pointer-events-none

## User Flow

```
Landing → Hero CTA → Features → Video → Testimonial → Footer Links
                    ↓
                Login/Demo Request
```

## Interactive Elements

1. **Hover States**
   - Feature cards (expand content)
   - Problem/Solution sections (reveal overlay)
   - Navigation links (underline)
   - Buttons (visual feedback)

2. **Click Handlers**
   - Login button (2 instances)
   - Why Macrovesta? button
   - Request a Demo button
   - Next button (testimonials)
   - Mobile menu toggle

3. **Animations**
   - Hero logo fade-down
   - Rotating text opacity
   - Feature cards fade-right
   - Hover bullets fade-down
   - Problem/Solution transitions

## Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 768px (md)
- **Desktop:** 768px - 1024px (lg)
- **Large Desktop:** 1024px - 1280px (xl)
- **Extra Large:** > 1280px (2xl)

### Responsive Behavior

1. **Navigation**
   - Desktop: Horizontal links
   - Mobile: Hamburger menu

2. **Hero Text**
   - XL: text-3xl
   - MD: text-2xl
   - Mobile: text-xl

3. **Features Grid**
   - XL: 3 columns
   - MD: 2 columns
   - Mobile: 1 column

4. **Problem/Solution**
   - Desktop: Side-by-side
   - Mobile: Stacked

5. **Footer**
   - Desktop: Multi-column layout
   - Mobile: Stacked with centered logo

## Navigation Map

```
Homepage (/)
├── EAP Consult (external) → https://eapconsult.com/
├── Contact Us → /contact (disabled)
├── About Us → /about (disabled)
├── Acceptable Use Policy → /acceptable-use-policy.pdf
├── Modern Slavery Statement → /modern-slavery-statement.pdf
└── Login (button, destination unknown)
```

## Asset Organization

### Images
- Navigation: logo-small.webp
- Hero: main-bg.webp, macrovesta-logo-white.webp
- Problem: prob-bg.webp, prob-person.webp
- Solution: sol-bg.webp, sol-person.webp
- Flags: GR.svg (Greece)
- Social: social-sharing.jpg
- Icons: favicon.ico, plus 6 embedded SVGs for features

### Documents
- acceptable-use-policy.pdf
- modern-slavery-statement.pdf

### Embedded Media
- YouTube video: jar9GeTyWIw

## SEO Structure

### Meta Tags
- Title tag
- Description
- Open Graph (title, description, image)
- Twitter Card (title, description, image)

### Structured Data
- None currently implemented
- Recommendation: Add Organization schema

### URL Structure
- Clean URLs (no .html extensions)
- PDF documents in root
- Assets organized by type

## Accessibility Considerations

### Current Issues
1. No aria labels on buttons
2. No alt text on some decorative SVGs
3. Missing skip-to-content link
4. Color contrast may need verification

### Recommendations
- Add proper ARIA labels
- Improve semantic HTML
- Add keyboard navigation support
- Ensure color contrast meets WCAG AA
- Add focus states for keyboard users
