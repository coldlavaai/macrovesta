# Macrovesta.ai - Complete Content Inventory

**Original Website:** https://macrovesta.ai/
**Date Captured:** October 27, 2025
**Purpose:** Complete clone for modernization

---

## Page Metadata

- **Title:** Home | Macrovesta
- **Meta Description:** Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.
- **OG Title:** Home | Macrovesta
- **OG Description:** Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.
- **OG Image:** https://macrovesta.ai/social-sharing.jpg
- **Twitter Card:** summary_large_image
- **Twitter Title:** Home | Macrovesta
- **Twitter Description:** Gain a competitive edge with Macrovesta: the Future of Agricultural Market Intelligence. Simplify complex data with personalized dashboards and reports, and stay ahead with real-time market alerts.
- **Twitter Image:** https://macrovesta.ai/social-sharing.jpg
- **Favicon:** /favicon.ico

---

## Navigation Bar

### Logo
- Small logo image (32x32px): `/logo-small.webp`
- Links to homepage

### Desktop Navigation
- Empty link (placeholder)
- **Login** button (appears twice - desktop and mobile)

### Mobile Navigation (Hamburger Menu)
- Same links as desktop
- Hidden by default

---

## Hero Section

### Background
- Full-screen hero image: `main-bg.webp` (2560x1440)
- Gradient mask effect (gradient-mask-t-80)
- Image has zoom/scale animation on hover

### Hero Content
- **Main Logo:** Large white Macrovesta logo (1000x500px)
  - Animation: fade-down effect
  - Responsive sizing (90% width on mobile)

- **Tagline:** "The Future of Agricultural Risk Management & Trading"
  - Font sizes: xl:text-3xl md:text-2xl text-xl
  - Color: white
  - Center aligned
  - Margin top: mt-2

- **Call-to-Action Buttons:**
  1. **"Why Macrovesta?"**
     - Style: White text, gradient background (bg-gradient-to-b), white border
     - Size: text-xl, px-4 py-2
     - Border-radius: rounded-md

  2. **"Request a Demo"**
     - Style: White text, underlined, no background
     - Size: px-4 py-2
     - Border-radius: rounded-md

  - Layout: Flexbox, centered, gap-4 (md:gap-8)
  - Responsive: Column on mobile, row on desktop

---

## Rotating Text Section

### Container
- Max width: max-w-screen-2xl
- Padding: p-8
- Margins: mb-8 lg:mb-32, mt-16
- Full height with centered content

### Content
- **Static Text:** "With Macrovesta, you can confidently navigate the complexities of"
  - Font: lg:text-2xl md:text-lg
  - Color: mv-blue-700 (Macrovesta blue)
  - Font weight: extrabold
  - Text may be nowrap on medium devices

- **Rotating/Animated Text:** "Government Reports" (example - this text rotates)
  - Font size: xl:text-8xl md:text-6xl text-2xl
  - Gradient text: bg-clip-text, transparent, gradient from mv-blue-700 to mv-blue-900
  - Transition: opacity duration-[800ms]
  - Currently visible: opacity-100

**Note:** This appears to be an animated section where different market data types cycle through.

---

## Problem/Solution Split Section

### Layout
- Two-column layout on desktop (flex-1 each)
- Single column on mobile
- Each section has hover effect: hover:flex-2 (expands on hover)

### Section 1: The Problem (Left Side)

#### Background Image
- Image: `prob-bg.webp`
- Size: 64 sm:h-96 max-h-96
- Overlay: Red gradient (bg-red-900, opacity-60)
- Gradient mask: gradient-mask-t-40
- Animation: Scale-y-0 to scale-y-100 on hover (origin-bottom)

#### Person Image
- Image: `prob-person.webp` (800x800)
- Position: Absolute, right-aligned, bottom-aligned
- Size: min-w-96 w-[50%] h-[110%]
- Animation: translate-x-0, duration-1000
- Object-fit: contain

#### Content Overlay
- Position: Absolute, top-2/3, centered (translate-x-[-50%] translate-y-[-66%])
- Width: 80%
- Initial opacity: 0
- Transition: opacity duration-500

#### Title
- Icon: Arrow SVG (rotated -90deg)
  - Size: w-8 h-8 (md: w-16 h-16)
  - Gradient: orange_to_red (#CE5B48 to #EF1D5C)
  - Margin-right: mr-2 (md:mr-4)

- Text: **"The Problem"**
  - Font size: text-2xl md:text-5xl
  - Color: White
  - Font weight: semibold
  - Drop shadow
  - White-space: nowrap

#### Problem Statement

**Mobile Version:**
"To redefine resilience in agriculture, we need to answer:"

**Desktop Version:**
"To redefine resilience in the agricultural trade, we need a solution that answers two fundamental questions:"

- Left border: 1px gradient from #CE5B48 to #EF1D5C
- Padding-left: pl-4
- Text-balance property

#### Problem Questions (Bullet List)
1. "Where is my **commodity price** going?"
2. "How do I **manage** my season better?"

- **Bullet Icon:** Same arrow SVG (rotated -90deg, gradient fill)
  - Size: md:h-8 md:w-8 (h-6 w-6 on mobile)
- **Text:** White color, start-aligned
- **Bold words:** "commodity price", "manage"
- Layout: Flex, place-items-start, mb-2
- Font size: md:text-lg
- Margin-top: mt-4

---

### Section 2: Our Solution (Right Side)

#### Background Image
- Image: `sol-bg.webp`
- Size: h-64 sm:h-96 max-h-96
- Overlay: Green gradient (bg-green-900, opacity-60)
- Gradient mask: gradient-mask-t-40
- Animation: Scale-y-0 to scale-y-100 on hover (origin-bottom)

#### Person Image
- Image: `sol-person.webp` (800x800)
- Position: Absolute, left-aligned, bottom-aligned
- Size: min-w-96 w-[50%] h-[110%]
- Animation: translate-x-0, duration-1000
- Object-fit: contain

#### Content Overlay
- Position: Absolute, top-2/3, centered (translate-x-[-50%] translate-y-[-66%])
- Width: 80%
- Initial opacity: 0
- Transition: opacity duration-500

#### Title
- Text: **"Our Solution"**
  - Font size: text-2xl md:text-5xl
  - Color: White
  - Font weight: semibold
  - Drop shadow
  - White-space: nowrap
  - Margin-left: auto (right-aligned)

- Icon: Arrow SVG (rotated 90deg)
  - Size: w-8 h-8 (md: w-16 h-16)
  - Gradient: turquoise_to_green (#3BBCAC to #44B549)
  - Margin-left: ml-2 (md:ml-4)

#### Solution Statement

**Mobile Version:**
"Macrovesta leverages AI and industry expertise to forecast trends, offering clear insights and practical strategies for effective season management."

**Desktop Version:**
"Macrovesta bridges the gap between traditional analysis and the scalability of AI-powered software. By combining machine learning techniques and simplified data visualisation with industry expertise, Macrovesta forecasts market trends and prescribes actionable insights to help you manage your season more effectively."

- Right border: 1px gradient from #3BBCAC to #44B549
- Padding-right: pr-4
- Text-balance property
- Width: 90% with ml-auto (right-aligned)
- Font size: md:text-lg
- Margin-top: mt-2

---

## Features Grid Section

### Container
- Layout: Grid
- Columns: xl:grid-cols-3 md:grid-cols-2 grid-cols-1
- Max width: max-w-screen-2xl
- Padding: p-8
- Gap: gap-4
- Font size: text-xl

### Feature Card Structure
- Background: White (bg-white)
- Border: border-slate-200, border
- Border-radius: rounded-md
- Padding: p-6
- Height: h-80
- Text align: center
- Overflow: hidden
- Animation: animate-fade-right
- Position: relative
- Transition: all

### Feature Card Hover Behavior
- Hidden bullet list appears (group-hover:block)
- Hidden list animation: animate-fade-down
- Icon and title move up (translate effect)
- Opacity transitions

---

### Feature 1: Interactive Reporting

#### Icon (Non-hover state)
- SVG graphic (reporting/analytics icon)
- Size: w-52 h-44
- Colors: #051D38 (dark blue) and gradients
- Transition: opacity to 0 on hover

#### Title
- Text: **"Interactive Reporting"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
- List style: none
- Text color: slate-500
- Text align: start
- Margin-top: mt-8

**Bullets:**
1. "Interactive **reporting tools**"
2. "**Secure** sharing of custom market insights"

- **Bullet Icon:** Arrow SVG (rotated -90deg)
  - Size: min-w-8 h-8
  - Gradient: turquoise_to_green (#3BBCAC to #44B549)
  - Margin-right: mr-2
- **Bold words:** "reporting tools", "Secure"

---

### Feature 2: AI-Assisted Analysis

#### Icon (Non-hover state)
- SVG graphic (AI/analysis icon)
- Size: w-56 h-44
- Colors: #051D38 and gradients
- Transition: opacity to 0 on hover

#### Title
- Text: **"AI-Assisted Analysis"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
**Bullets:**
1. "Bullish vs bearish 5-factor **traffic light system**"
2. "**Machine learning** weighted"

- **Bullet Icon:** Same arrow SVG with gradient
- **Bold words:** "traffic light system", "Machine learning"

---

### Feature 3: Real Time Industry Data

#### Icon (Non-hover state)
- SVG graphic (real-time data icon)
- Size: w-44 h-44
- Colors: #051D38 and gradients
- Transition: opacity to 0 on hover

#### Title
- Text: **"Real Time Industry Data"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
**Bullets:**
1. "Real trade **price**"
2. "**Supply & Demand** insights and forecasts"

- **Bullet Icon:** Same arrow SVG with gradient
- **Bold words:** "price", "Supply & Demand"

---

### Feature 4: Operation Management

#### Icon (Non-hover state)
- SVG graphic (operations icon)
- Size: TBD
- Colors: #051D38 and gradients

#### Title
- Text: **"Operation Management"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
**Bullets:**
1. "**Commodity** marketplace"
2. "**Crop** and freight tracking"
3. "Position management"

- **Bullet Icon:** Same arrow SVG with gradient
- **Bold words:** "Commodity", "Crop"

---

### Feature 5: Educational Analysis

#### Icon (Non-hover state)
- SVG graphic (education icon)
- Size: TBD
- Colors: #051D38 and gradients

#### Title
- Text: **"Educational Analysis"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
**Bullets:**
1. "Educational analysis with simplified visualization"
2. "**Explainable AI**"
3. "News and data summary"

- **Bullet Icon:** Same arrow SVG with gradient
- **Bold words:** "Explainable AI"

---

### Feature 6: AI Digital Consultant

#### Icon (Non-hover state)
- SVG graphic (AI consultant icon)
- Size: TBD
- Colors: #051D38 and gradients

#### Title
- Text: **"AI Digital Consultant"**
- Font size: lg:text-3xl text-2xl
- Font weight: semibold
- Color: mv-700

#### Hover Content (Bullet List)
**Bullets:**
1. "**Personalised** market analysis and hedging strategies"
2. "**AI-powered guidance**, trained by decades worth of data and industry reports"

- **Bullet Icon:** Same arrow SVG with gradient
- **Bold words:** "Personalised", "AI-powered guidance"

---

## Video Section

### Title
- Text: **"What is Macrovesta?"**
- Style: TBD (likely centered, large heading)

### Video Embed
- Platform: YouTube
- Video ID: `jar9GeTyWIw`
- Embed URL: `https://www.youtube.com/embed/jar9GeTyWIw?autoplay=1&start=0&null`
- Properties:
  - frameborder: 0
  - credentialless: true
  - allow: accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture
  - allowfullscreen: true
- Title attribute: "Video"

### Video Description
"Discover how our platform is transforming the cotton industry. Macrovesta combines a comprehensive database of cotton industry data across the supply chain with AI-backed analytical tools designed to map market sentiment and forecast seasonal volatility. Macrovesta empowers you to cut down on extensive research, focus on strategic planning, and stay ahead of significant market developments. As your digital market advisor, Macrovesta simplifies processes to save time, reduce costs, and mitigate risks, ultimately enhancing your business's profitability. Watch now to see how you can leverage Macrovesta's innovative tools to revolutionise how you approach pricing strategy and risk management in the cotton industry."

---

## Social Proof / Client Section

### Heading
"Trusted by clients across the supply chain in 14 countries and 5 continents"

### Description
"Over the last decade the Macrovesta team have delivered world-renowned commodity market consultancy to some of the largest farms, mills and retailers in the world. Through Macrovesta we are making our expertise and critical analysis available to organisations of all sizes."

---

## Testimonial Section

### Testimonial Card

#### Content
"I spent time in your new platform and I would like to share my impression about it. It is very appealing, well organized, easy to use but most of all I appreciate the educational part of it, how you explain, in simple words and with examples, what is needed to truly understand the cotton market. Looking forward to receiving the alerts."

#### Attribution
- **Title:** Cotton Ginner and Spinner
- **Location:** Greece
- **Flag:** Greece flag SVG (36px height)
  - Source: `/flags/GR.svg`

#### Navigation
- **Button:** "Next"
  - Type: submit
  - Style: TBD

---

## Footer Section

### Background
- Gradient: bg-gradient-to-r from-mv-blue-700 to-mv-blue-900
- Width: Full width

### Container
- Max width: max-w-screen-2xl
- Padding: px-8 py-4
- Margin: mx-auto

### Footer Layout
- Desktop: flex, justify-between (md:flex md:justify-between)
- Mobile: Stacked

### Footer Columns

#### Column 1: Connect
- **Heading:** "Connect" (font-semibold, uppercase, text-mv-white)
- **Links:**
  1. **EAP Consult**
     - URL: https://eapconsult.com/
     - Target: _blank
     - Rel: noopener noreferrer
     - Style: hover:underline

  2. **Contact Us**
     - URL: /contact
     - Class: hover:underline pointer-events-none (disabled)

- Font: medium weight
- Margin-top: mt-4
- Flex direction: column
- Gap: gap-2
- Color: text-mv-blue-gray

#### Column 2: Resources
- **Heading:** "Resources" (font-semibold, uppercase, text-mv-white)
- **Links:**
  1. **About Us**
     - URL: /about
     - Class: hover:underline pointer-events-none (disabled)

- Font: medium weight
- Margin-top: mt-4
- Flex direction: column
- Gap: gap-2
- Color: text-mv-blue-gray

#### Column 3: Legal
- **Heading:** "Legal" (font-semibold, uppercase, text-mv-white)
- **Links:**
  1. **Acceptable Use Policy**
     - URL: /acceptable-use-policy.pdf
     - Target: _blank
     - Rel: noopener noreferrer
     - Style: hover:underline

  2. **Modern Slavery Statement**
     - URL: /modern-slavery-statement.pdf
     - Target: _blank
     - Rel: noopener noreferrer
     - Style: hover:underline

- Font: medium weight
- Margin-top: mt-4
- Flex direction: column
- Gap: gap-2
- Color: text-mv-blue-gray

### Footer Logo
- Image: `macrovesta-logo-white.webp` (229x80)
- Position: Centered on mobile (mx-auto)
- Margins: my-4 (md:my-0)
- Size: w-auto h-auto

### Copyright
- Text: "© 2025 **Macrovesta®** All Rights Reserved. Macrovesta is a website owned and operated by Earlam & Partners Ltd."
- Style:
  - Display: block
  - Alignment: center (md:mt-12 mb-4)
  - Font size: text-sm
  - Color: text-mv-blue-gray
  - Margin: mx-auto block
- **Bold:** "Macrovesta®" (linked to /)

---

## Complete Link Inventory

1. **Logo (top-left)** → https://macrovesta.ai/
2. **Empty nav link** → https://macrovesta.ai/
3. **Footer link** → https://macrovesta.ai/
4. **EAP Consult** → https://eapconsult.com/ (external, new tab)
5. **Contact Us** → /contact (disabled: pointer-events-none)
6. **About Us** → /about (disabled: pointer-events-none)
7. **Acceptable Use Policy** → /acceptable-use-policy.pdf (new tab)
8. **Modern Slavery Statement** → /modern-slavery-statement.pdf (new tab)
9. **Macrovesta® (copyright)** → https://macrovesta.ai/

---

## Complete Button Inventory

1. **Login** (desktop nav) - type: submit
2. **Login** (mobile nav) - type: submit
3. **Mobile menu toggle** - hamburger icon (SVG path: M4 6h16M4 12h16m-7 6h7)
4. **Why Macrovesta?** (hero CTA) - type: submit
5. **Request a Demo** (hero CTA) - type: submit
6. **Next** (testimonial navigation) - type: submit

---

## Complete Image Inventory

| File | Alt Text | Original URL | Dimensions | Location |
|------|----------|--------------|------------|----------|
| logo-small.webp | macrovesta-logo | /_next/image?url=%2Flogo-small.webp&w=64&q=75 | 32x32 | Navigation |
| main-bg.webp | Background Image | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-bg.3217afa2.webp&w=3840&q=75 | 2560x1440 | Hero section |
| macrovesta-logo-white.webp | Logo Macrovesta | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmacrovesta-logo-white.9054cf82.webp&w=2048&q=75 | 1000x500 | Hero section (large) |
| prob-bg.webp | Problem | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprob-bg.e6739fb3.webp&w=3840&q=75 | Variable | Problem section background |
| prob-person.webp | Problem Person | /_next/image?url=%2Fprob-person.webp&w=1920&q=75 | 800x800 | Problem section |
| sol-bg.webp | Problem | /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsol-bg.7b0a1bfa.webp&w=3840&q=75 | Variable | Solution section background |
| sol-person.webp | Solution Person | /_next/image?url=%2Fsol-person.webp&w=1920&q=75 | 800x800 | Solution section |
| GR.svg | Greece flag | /flags/GR.svg | 36h | Testimonial |
| macrovesta-logo-white.webp | macrovesta-logo | /_next/image?url=%2Fmacrovesta-logo-white.webp&w=640&q=75 | 229x80 | Footer |

---

## Custom Colors (Tailwind/CSS)

- **mv-blue-700**: Primary blue (darker)
- **mv-blue-900**: Primary blue (darkest)
- **mv-blue-gray**: Muted blue-gray for text
- **mv-white**: Pure white
- **mv-700**: Brand color (appears to be same as mv-blue-700)

### Gradients
1. **Navbar/Footer:** from-mv-blue-700 to-mv-blue-900
2. **Hero logo text:** from-mv-blue-700 to-mv-blue-900
3. **Problem icon:** from #CE5B48 (orange) to #EF1D5C (red)
4. **Solution icon:** from #3BBCAC (turquoise) to #44B549 (green)

---

## Animations & Transitions

1. **Hero logo:** animate-fade-down
2. **Hero background:** scale animation on hover (transform: scale(1))
3. **Feature cards:** animate-fade-right
4. **Hover bullets:** animate-fade-down
5. **Problem/Solution overlays:** opacity transition (duration-500)
6. **Problem/Solution people:** translate-x transition (duration-1000)
7. **Problem/Solution gradient:** scale-y transition (duration-500, origin-bottom)
8. **Rotating text:** opacity transition (duration-[800ms])

---

## Technical Stack (Current)

- **Framework:** Next.js (evident from /_next/ paths)
- **Styling:** Tailwind CSS (utility classes)
- **Image Format:** WebP
- **Image Optimization:** Next.js Image component
- **Fonts:** System fonts (system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)

---

## Missing Assets to Capture

1. Social sharing image: https://macrovesta.ai/social-sharing.jpg
2. Favicon: /favicon.ico
3. All SVG icons embedded in the HTML (reporting, AI, data, etc.)
4. Any additional country flags beyond Greece

---

## Notes for Modernization

- Current site uses Next.js but may be an older version
- Some navigation links are disabled (pointer-events-none)
- Mobile responsiveness is well-implemented
- Heavy use of hover states and animations
- Consider updating animation library (current uses custom classes)
- Accessibility improvements needed (aria labels, semantic HTML)
- YouTube embed could be replaced with lite-youtube or similar for performance
- Consider adding dark mode support
- Update to latest Next.js and Tailwind versions
- Implement proper routing for disabled nav links
- Add loading states for images
- Consider replacing gradient masks with modern CSS
