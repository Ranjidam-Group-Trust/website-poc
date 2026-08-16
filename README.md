# Ranjidam Group Trust (RGT) — Website POC \& GitHub Pages Deployment Guide

... (original content unchanged up to line 93) 

## 🤖 Content Generation with GPT‑OSS

The majority of the modern HTML pages, CSS styling, and JavaScript functionality in this repository were **generated using the GPT‑OSS 120B model** (medium‑sized). The model was prompted to:
- Translate the legacy Weebly HTML content into a clean, responsive design.
- Create a cohesive design system (colors, typography, micro‑animations) in `css/style.css`.
- Populate copy for each page (About Us, RGT Rise, Chapters, Volunteer opportunities, etc.) based on the original legacy text extracted from the legacy site.
- Ensure SEO‑friendly meta tags and a consistent header/footer across all pages.

All generated code has been manually reviewed and fine‑tuned to meet the project's visual and functional standards.

---

## 📁 File Structure

```text
rgt/
├── index.html        # Modern Home Page (Replaces home.html)
├── about-us.html     # Modern About Us Page (Replaces old about-us.html)
├── reach-us.html     # Modern Contact, Map, & Donation Page (Replaces reach-us.html)
├── rgtrise.html      # RGT Rise initiative page
├── rgt-chapters.html # Chapter overview page
├── what-we-did-so-far.html # Past events and milestones page
├── contribute.html   # Donation & volunteer contribution page
├── media.html        # Media gallery and videos page
├── member.html       # Membership information page
├── donor.html        # Donor information and tax benefits page
├── gifts.html        # Gift‑sponsorship program page
├── gallery.html      # Photo gallery page
├── teaching-volunteer.html # Teaching volunteer opportunities
├── working-volunteer.html  # Working volunteer opportunities
├── CNAME             # Custom Domain file for GitHub Pages (rgforhelp.org.in)
├── css/
│   └── style.css     # Unified Modern Design System Stylesheet
├── js/
│   └── main.js       # Responsive Navbar & Form Handler
├── docs/             # Documentation & Content reference files
├── home.html         # Legacy Weebly export reference
├── about-us.html     # Legacy Weebly export reference
└── reach-us.html     # Legacy Weebly export reference
```

---

## 🚀 How to Publish to GitHub Pages

... (rest of original README unchanged) 
