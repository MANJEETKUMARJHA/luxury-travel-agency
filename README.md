# ✦ Voyage — Luxury Travel Co.

A fully responsive, multi-section luxury travel agency website built with pure HTML, CSS, and vanilla JavaScript. Designed to match a high-end bespoke travel brand aesthetic with gold accents, serif typography, and smooth interactions.

---

## 📁 Project Structure

```
luxury travel agency/
├── index.html                    # Main HTML file
├── style.css                     # All styles (layout, animations, responsive)
├── script.js                     # Interactivity (nav, slider, animations, form)
├── voyage-luxury-travel-logo.svg # Primary SVG logo (used in nav + footer)
└── logo.png                      # Alternate logo asset
```

---

## 🌐 Live Sections

| Section | Description |
|---|---|
| **Navigation** | Fixed transparent nav → dark on scroll, mobile hamburger with animated X |
| **Hero** | Full-screen background with parallax, animated title, scroll indicator |
| **Destinations** | 4-column image grid (Maldives, Amalfi, Japan, Switzerland) |
| **Art of Travel** | Split layout — image + feature highlights |
| **Experiences** | Dark green section with carousel slider |
| **Curated Journeys** | Journey cards with nights + location |
| **Journal** | Blog previews + testimonial quote block |
| **Plan Your Journey** | Contact/booking form over hero background |
| **Footer** | Brand info, nav links, newsletter signup, social icons |

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `--gold` | `#b89a5a` | Accents, buttons, highlights |
| `--gold-light` | `#d4b878` | Button hover state |
| `--dark` | `#1a1a18` | Primary dark text / footer bg |
| `--dark-green` | `#1c2b1e` | Experiences section bg |
| `--cream` | `#f9f6f1` | Alternate section bg |
| `--text-light` | `#7a7a76` | Muted body text |

### Typography
| Font | Usage |
|---|---|
| **Cormorant Garamond** (serif) | Headings, hero title, quotes |
| **Jost** (sans-serif) | Body, labels, nav links, buttons |

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `≤ 1200px` | Container padding tightened |
| `≤ 1024px` | 4-col grids → 2-col, Art of Travel 2-col layout |
| `≤ 768px` | Nav collapses to hamburger, all grids → 2-col, form rows stack |
| `≤ 480px` | Everything → single column, full-width buttons |
| `≤ 360px` | Extra-small phone polish — reduced font sizes and card heights |

---

## ⚡ JavaScript Features

- **Sticky nav** — transparent → dark backdrop on scroll (`{ passive: true }`)
- **Mobile menu** — full-screen overlay with animated hamburger ↔ X
  - Tap outside to close
  - Swipe down to close (touch gesture)
- **Scroll animations** — `IntersectionObserver` fade-up on all cards/features
- **Hero parallax** — subtle translateY on hero background image
- **Experience carousel** — prev/next slider with responsive visible-count
- **Hero counter** — auto-cycles slide indicators every 4s
- **Form handling** — toast notification on submission, no page reload
- **Back to top** — smooth scroll to top

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just double-click index.html, or:
start index.html         # Windows
open index.html          # macOS
```

### Option 2 — Local dev server (recommended for fonts/images)
```bash
# Using VS Code Live Server extension — click "Go Live"

# Or using Python
python -m http.server 3000

# Or using Node.js
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

## 🖼️ Image Sources

All destination and experience images are loaded from **Unsplash** (free to use):

| Image | Source |
|---|---|
| Hero (Santorini) | `unsplash.com/photo-1570077188670` |
| Maldives | `unsplash.com/photo-1514282401047` |
| Amalfi Coast | `unsplash.com/photo-1516483638261` |
| Japan | `unsplash.com/photo-1490806843957` |
| Switzerland | `unsplash.com/photo-1531210483974` |
| Safari | `unsplash.com/photo-1516426122078` |

> **Tip:** Replace these URLs with your own hosted images for production.

---

## 🔧 Customisation Guide

### Change Brand Name
Edit the `<title>` tag in `index.html` and update the SVG logo file.

### Change Colors
Update CSS variables at the top of `style.css`:
```css
:root {
  --gold:       #b89a5a;   /* ← change accent colour here */
  --dark-green: #1c2b1e;   /* ← change experiences section bg */
  --cream:      #f9f6f1;   /* ← change light section bg */
}
```

### Add/Remove Destinations
In `index.html`, find the `.dest__grid` section and duplicate or remove `.dest__card` blocks:
```html
<div class="dest__card">
  <img src="YOUR_IMAGE_URL" alt="Destination Name" />
  <div class="dest__info">
    <div>
      <h3>DESTINATION</h3>
      <p>Region</p>
    </div>
    <a href="#" class="dest__arrow">→</a>
  </div>
</div>
```

### Connect the Form
Replace the `handleSubmit` function in `script.js` with your backend or email service (e.g. Formspree, EmailJS):
```js
function handleSubmit(e) {
  e.preventDefault();
  // Replace with: fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })
  showToast();
}
```

---

## 📦 Dependencies

| Dependency | Version | How loaded |
|---|---|---|
| Google Fonts (Cormorant Garamond + Jost) | Latest | CDN via `<link>` |
| Unsplash Images | — | CDN via `<img src>` |

**No npm. No build step. No frameworks.** Pure HTML + CSS + JS.

---

## 🌍 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari (iOS + macOS) | ✅ Full (`-webkit-backdrop-filter` included) |
| Samsung Internet | ✅ Full |

---

## 📄 License

This project is for personal / client use. Images from Unsplash are subject to the [Unsplash License](https://unsplash.com/license). Fonts from Google Fonts are subject to the [SIL Open Font License](https://scripts.sil.org/OFL).

---

<p align="center">
  <strong>✦ VOYAGE — LUXURY TRAVEL CO. ✦</strong><br/>
  <em>Not just a destination. A better you.</em>
</p>
