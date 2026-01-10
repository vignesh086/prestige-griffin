# SEO Optimization Plan - Prestige Griffin

## Executive Summary

This document outlines a comprehensive SEO optimization plan for the Prestige Griffin website (https://prestigegriffin.com/). Based on a thorough audit, the site has solid foundational SEO but requires improvements in several key areas to maximize search visibility and organic traffic.

**Current State**: React 18 SPA with Vite, client-side rendering, basic meta tags on homepage only
**Target State**: Fully optimized SPA with dynamic meta tags, optimized assets, complete sitemap, and analytics tracking

---

## Priority Matrix

| Priority | Category | Impact | Effort |
|----------|----------|--------|--------|
| 🔴 Critical | Image Optimization | High | Low |
| 🔴 Critical | Dynamic Meta Tags | High | Medium |
| 🔴 Critical | Complete Sitemap | High | Low |
| 🟡 High | Google Analytics Setup | High | Low |
| 🟡 High | Page Load Performance | High | Medium |
| 🟢 Medium | Additional Structured Data | Medium | Medium |
| 🟢 Medium | Code Splitting | Medium | Medium |
| 🔵 Low | SSR Migration | High | High |

---

## Phase 1: Critical Fixes (Immediate Priority)

### 1.1 Image Optimization

**Current Issues:**
- `griffin-logo.png`: 1.56 MB (unacceptable for web)
- `PG.png`: 305 KB (can be reduced)
- No WebP alternatives
- No responsive image sizes
- No lazy loading

**Action Items:**

1. **Compress existing PNGs**
   ```bash
   # Use tools like TinyPNG, ImageOptim, or squoosh.app
   # Target: 60-70% reduction
   ```

2. **Create WebP versions**
   ```bash
   # Install vite-plugin-imagemin or similar
   npm install vite-plugin-imagemin -D
   ```

3. **Create responsive sizes**
   - `logo-small.webp` (128x128) - Mobile header
   - `logo-medium.webp` (256x256) - Tablet
   - `logo-large.webp` (512x512) - Desktop
   - `logo-og.webp` (1200x630) - Open Graph

4. **Implement lazy loading**
   ```jsx
   // Add to all non-critical images
   <img src="image.webp" loading="lazy" alt="Description" />
   ```

5. **Add width/height attributes** to prevent CLS (Cumulative Layout Shift)
   ```jsx
   <img src="logo.webp" width="128" height="128" alt="Prestige Griffin Logo" />
   ```

**Expected Results:**
- Page load time improvement: 40-60%
- Logo size reduction: 1.56MB → ~50KB (97% reduction)
- Better Core Web Vitals scores

---

### 1.2 Dynamic Meta Tags with React Helmet

**Current Issue:** Only homepage has complete meta tags. Subpages only update `document.title`.

**Implementation:**

1. **Install React Helmet Async**
   ```bash
   npm install react-helmet-async
   ```

2. **Wrap App with HelmetProvider**
   ```jsx
   // main.jsx
   import { HelmetProvider } from 'react-helmet-async';

   <HelmetProvider>
     <App />
   </HelmetProvider>
   ```

3. **Create SEO Component**
   ```jsx
   // components/SEO.jsx
   import { Helmet } from 'react-helmet-async';

   const SEO = ({
     title,
     description,
     canonical,
     ogImage = '/PG.png',
     noindex = false
   }) => {
     const siteTitle = 'Prestige Griffin';
     const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

     return (
       <Helmet>
         <title>{fullTitle}</title>
         <meta name="description" content={description} />
         <link rel="canonical" href={canonical} />

         {/* Open Graph */}
         <meta property="og:title" content={fullTitle} />
         <meta property="og:description" content={description} />
         <meta property="og:url" content={canonical} />
         <meta property="og:image" content={ogImage} />

         {/* Twitter */}
         <meta name="twitter:title" content={fullTitle} />
         <meta name="twitter:description" content={description} />

         {noindex && <meta name="robots" content="noindex, nofollow" />}
       </Helmet>
     );
   };

   export default SEO;
   ```

4. **Add SEO component to each page**

   | Page | Title | Description |
   |------|-------|-------------|
   | Home | Investing in Strategic Growth | Advisory & Strategic Solutions in Finance, Technology & Defense |
   | About | About Us | Learn about Prestige Griffin's mission, vision, and global approach to strategic advisory |
   | Services | Our Services | Comprehensive advisory services in Finance, Technology, Defense & Commodities |
   | Careers | Career Opportunities | Join Prestige Griffin - Explore exciting career opportunities in strategic advisory |
   | Contact | Contact Us | Get in touch with Prestige Griffin for strategic advisory solutions |
   | Get In Touch | Get In Touch | Send us a message - We'd love to hear from you |
   | Privacy | Privacy Policy | Prestige Griffin's privacy policy and data protection practices |
   | Terms | Terms & Conditions | Terms and conditions for using Prestige Griffin services |
   | Disclaimer | Disclaimer | Legal disclaimer for Prestige Griffin website |

---

### 1.3 Complete Sitemap

**Current Issue:** Only 4 of 10 pages included in sitemap.xml

**Updated sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://prestigegriffin.com/</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/about</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/services</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/careers</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/contact</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/get-in-touch</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/privacy</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/terms</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://prestigegriffin.com/disclaimer</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## Phase 2: High Priority Improvements

### 2.1 Google Analytics 4 Setup

**Action Items:**

1. **Create GA4 Property** at analytics.google.com

2. **Add tracking script to index.html**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Track page views on route change**
   ```jsx
   // In App.jsx or a useEffect hook
   import { useLocation } from 'react-router-dom';

   const location = useLocation();

   useEffect(() => {
     if (window.gtag) {
       window.gtag('config', 'G-XXXXXXXXXX', {
         page_path: location.pathname,
       });
     }
   }, [location]);
   ```

4. **Track form submissions**
   ```jsx
   // In GetInTouch.jsx on successful submission
   window.gtag('event', 'form_submission', {
     event_category: 'Contact',
     event_label: 'Get In Touch Form',
   });
   ```

5. **Set up Google Search Console**
   - Verify domain ownership
   - Submit sitemap.xml
   - Monitor indexing status
   - Review Core Web Vitals

---

### 2.2 Page Load Performance

**Current Issues:**
- 5-second loading screen blocks content
- No code splitting
- Large bundle size

**Action Items:**

1. **Reduce loading screen duration**
   ```jsx
   // App.jsx - Change from 5000ms to 1500ms or use progress-based loading
   useEffect(() => {
     const timer = setTimeout(() => setIsLoading(false), 1500);
     return () => clearTimeout(timer);
   }, []);
   ```

2. **Implement route-based code splitting**
   ```jsx
   import { lazy, Suspense } from 'react';

   const About = lazy(() => import('./pages/About'));
   const Services = lazy(() => import('./pages/Services'));
   const Careers = lazy(() => import('./pages/Careers'));
   // ... other pages

   // In routing
   <Suspense fallback={<LoadingSpinner />}>
     <Routes>
       <Route path="/about" element={<About />} />
       {/* ... */}
     </Routes>
   </Suspense>
   ```

3. **Optimize Vite configuration**
   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import compression from 'vite-plugin-compression';

   export default defineConfig({
     plugins: [
       react(),
       compression({ algorithm: 'gzip' }),
       compression({ algorithm: 'brotliCompress', ext: '.br' }),
     ],
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom', 'react-router-dom'],
             aos: ['aos'],
           },
         },
       },
       minify: 'terser',
       terserOptions: {
         compress: {
           drop_console: true,
         },
       },
     },
   });
   ```

4. **Preload critical fonts**
   ```html
   <link rel="preload" href="fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
   <link rel="preload" href="fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" crossorigin>
   ```

---

## Phase 3: Medium Priority Enhancements

### 3.1 Additional Structured Data

**Job Posting Schema (Careers Page)**
```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Investment Analyst",
  "description": "Join our team as an Investment Analyst...",
  "datePosted": "2025-01-01",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Prestige Griffin",
    "sameAs": "https://prestigegriffin.com"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY"
    }
  }
}
```

**Breadcrumb Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://prestigegriffin.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://prestigegriffin.com/services"
    }
  ]
}
```

**Organization Schema (Enhanced)**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prestige Griffin",
  "url": "https://prestigegriffin.com",
  "logo": "https://prestigegriffin.com/griffin-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60126880357",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MY"
  }
}
```

---

### 3.2 Internal Linking Strategy

**Recommended Internal Links:**

| From Page | Link To | Anchor Text |
|-----------|---------|-------------|
| Home (Services section) | /services | Learn more about our services |
| Home (CTA) | /get-in-touch | Get in touch today |
| About | /services | Explore our services |
| Services | /get-in-touch | Request a consultation |
| Services | /careers | Join our team |
| Careers | /about | Learn about our culture |
| Footer | All pages | Consistent navigation |

---

### 3.3 Content Optimization

**Keyword Targeting by Page:**

| Page | Primary Keyword | Secondary Keywords |
|------|-----------------|-------------------|
| Home | Strategic advisory solutions | Finance advisory, Technology consulting, Defense solutions |
| About | Prestige Griffin company | Advisory firm, Investment consulting, Global reach |
| Services | Financial advisory services | Banking solutions, Commodities trading, Defense consulting |
| Careers | Advisory jobs | Finance careers, Consulting opportunities |
| Contact | Contact advisory firm | Business inquiry, Consultation request |

**Content Recommendations:**
1. Add more text content to Services page (currently light)
2. Include testimonials or case studies (if available)
3. Add FAQ section to improve user engagement and target question keywords
4. Create blog/insights section for fresh content (future consideration)

---

## Phase 4: Long-term Considerations

### 4.1 SSR/SSG Migration

**Current Limitation:** Client-side rendering (CSR) means:
- Search engine crawlers may not see full content
- Slower initial page load
- No content until JavaScript loads

**Options:**

1. **Next.js Migration** (Recommended)
   - Built-in SSR/SSG support
   - Automatic code splitting
   - Image optimization included
   - SEO-friendly by default

2. **Vite + vite-plugin-ssr**
   - Keep existing Vite setup
   - Add SSR capabilities
   - Smaller migration effort

3. **Prerender.io or Rendertron**
   - Keep React SPA
   - Serve pre-rendered pages to crawlers
   - Requires additional service

---

## Implementation Checklist

### Phase 1 (Week 1-2)
- [ ] Compress and optimize all images
- [ ] Create WebP versions of images
- [ ] Install react-helmet-async
- [ ] Create SEO component
- [ ] Add dynamic meta tags to all pages
- [ ] Update sitemap.xml with all pages
- [ ] Add width/height to images for CLS

### Phase 2 (Week 3-4)
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Reduce loading screen time
- [ ] Implement route-based code splitting
- [ ] Configure Vite build optimization

### Phase 3 (Week 5-6)
- [ ] Add Job Posting structured data
- [ ] Add Breadcrumb structured data
- [ ] Enhance Organization schema
- [ ] Implement internal linking improvements
- [ ] Optimize page content for keywords

### Phase 4 (Future)
- [ ] Evaluate SSR migration options
- [ ] Consider blog/content section
- [ ] Implement A/B testing
- [ ] Set up heat mapping (Hotjar/Clarity)

---

## Monitoring & KPIs

**Tools to Set Up:**
- Google Analytics 4 (traffic, behavior)
- Google Search Console (indexing, rankings)
- PageSpeed Insights (Core Web Vitals)

**KPIs to Track:**
| Metric | Current | Target |
|--------|---------|--------|
| Largest Contentful Paint (LCP) | Unknown | < 2.5s |
| First Input Delay (FID) | Unknown | < 100ms |
| Cumulative Layout Shift (CLS) | Unknown | < 0.1 |
| Page Load Time | ~6s (with loading screen) | < 3s |
| Indexed Pages | 4 | 9+ |
| Organic Traffic | Unknown | +50% in 3 months |

---

## Technical Requirements Summary

**NPM Packages to Install:**
```bash
npm install react-helmet-async
npm install -D vite-plugin-compression vite-plugin-imagemin terser
```

**Files to Modify:**
1. `index.html` - Add GA script, preload fonts
2. `main.jsx` - Add HelmetProvider
3. `vite.config.js` - Add optimization plugins
4. `public/sitemap.xml` - Add missing pages
5. All page components - Add SEO component
6. `App.jsx` - Add route-based code splitting, page view tracking

**Files to Create:**
1. `src/components/SEO.jsx` - Reusable SEO component
2. Optimized image versions (WebP, multiple sizes)

---

## Conclusion

This SEO optimization plan addresses the key gaps identified in the audit. Phase 1 and 2 items should be prioritized as they offer the highest impact with reasonable effort. The improvements will significantly enhance:

1. **Search Engine Visibility** - Through proper meta tags and structured data
2. **Page Performance** - Through image optimization and code splitting
3. **User Experience** - Through faster load times and better Core Web Vitals
4. **Analytics & Insights** - Through proper tracking implementation

Following this plan will position Prestige Griffin for better organic search rankings and improved user engagement.

---

*Document created: January 2025*
*Last updated: January 2025*
