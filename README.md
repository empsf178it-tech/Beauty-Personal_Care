# LUMÉA — Thoughtful Skincare & Beauty Discovery Platform

> **"Skin, thoughtfully cared for."**

LUMÉA is an ultra-premium, responsive skincare brand web application built under the **Beauty & Personal Care** category. It combines the aesthetic of a high-end luxury beauty journal, an interactive skincare routine engineer, a biocompatible ingredient library, and a personalized user dashboard.

---

## 🌟 Key Features

1. **Ultra-Premium Light Editorial Visual System**:
   - Palette: Primary Background (`#F8F6F1`), Surface (`#FFFFFF`), Warm Beige (`#EEE8DE`), Soft Sage (`#A8B49F`), Deep Olive (`#394238`), Warm Terracotta (`#B8785C`), Primary Text (`#262A26`), Secondary Text (`#6D716B`), Soft Accent (`#D9C8B8`).
   - Editorial Typography: Google Fonts `Playfair Display` headings paired with crisp `Inter` body typography.
   - Consistent light aesthetic across all 11 pages (no alternating dark sections).

2. **Image-First Design Architecture**:
   - Built directly around the **77 high-resolution skincare images** inside `/assets/images/` (`1.jpg` through `77.jpg`).
   - 77 unique image assignments across hero banners, concern cards, product catalog, macro texture previews, botanical ingredient cards, and editorial guides.
   - Achieves **>95% image placement uniqueness** with zero redundant repetitions.

3. **Global Navigation & Mobile View Control (< 992px Strict Rule)**:
   - Desktop Navbar: Brand `LUMÉA`, navigation links (`Home`, `Shop`, `Routine`, `Ingredients`, `Skin Guide`, `About`), Search overlay trigger, Favorites counter, Account login, and `Find Your Routine` CTA.
   - Mobile View (< 992px): **Strictly displays ONLY LUMÉA brand logo + hamburger toggle**. All links, search, favorites, and actions smoothly open inside a fullscreen light menu overlay with scroll lock and ESC key support.

4. **Products Catalog & Instant Discovery**:
   - Dynamic Vanilla JS search without page reload (filters by name, category, concern, ingredient).
   - Category filter pills (Cleansers, Serums, Moisturizers, Sunscreen, Masks, Eye Care, Oils).
   - Concern filter pills (Hydration, Brightening, Barrier Care, Sensitive, Anti-aging, Oil Control).
   - Saved favorites heart button with instant `localStorage` persistence and toast alerts.

5. **Interactive Skincare Routine Builder**:
   - 3-step wizard allowing users to select primary skin concern (Dryness, Dullness, Sensitivity, Oiliness, Barrier Care, Protection) and time preference (Morning, Evening, Both).
   - Dynamically generates customized AM & PM routines with step numbers, product recommendations, and save to dashboard capability (`lumeaRoutine`).

6. **Ingredient Library & Editorial Education**:
   - Searchable bio-active ingredient cards (Hyaluronic Acid, Niacinamide, Vitamin C, Retinol, Ceramides, Peptides, Aloe Vera, Green Tea, Squalane, Panthenol).
   - 8 Editorial Skin Guides detailing skin barrier physics, product layering order, SPF science, and sensitive skin care.

7. **User Dashboard & Auth System**:
   - Client-side authentication (`lumeaSession`, `lumeaUser`) with sign-in, registration password strength meter, saved favorites grid, daily routine completion progress, and skin goal progress bars.

---

## 🛠️ Technology Stack

- **Structure**: HTML5
- **Styling**: Vanilla CSS3 + Bootstrap 5 CDN (Grid & Utilities)
- **Logic**: Vanilla JavaScript ES6+
- **Typography**: Google Fonts (`Playfair Display`, `Inter`)
- **Icons**: Bootstrap Icons CDN
- **Persistence**: Browser `localStorage` (`lumeaFavorites`, `lumeaRoutine`, `lumeaSession`, `lumeaUser`)

*Zero heavy framework dependencies (No React, Vue, Tailwind, jQuery, GSAP, or backend servers).*

---

## 📁 Project Directory Structure

```text
/
├── index.html               # Homepage (9 Rich Sections)
├── products.html            # Skincare Discovery Catalog & Filters
├── product-detail.html      # Product Detail View & Ingredient Breakdown
├── routine.html             # Interactive 3-Step Routine Builder Wizard
├── ingredients.html         # Bio-Active Ingredient Library & Search
├── skin-guide.html          # Editorial Skincare Journal (8 Articles)
├── about.html               # Brand Origin, Philosophy & Formulation Standards
├── contact.html             # Skincare Concierge & Contact Form
├── login.html               # Demo Sign-In Authentication
├── register.html            # Registration & Password Strength Indicator
├── dashboard.html           # User Portal, Saved Products & Goal Progress
│
├── assets/
│   ├── css/
│   │   └── style.css        # Global Editorial Design System & Styling
│   ├── js/
│   │   └── main.js          # Core JavaScript Engine & Demo Dataset
│   └── images/
│       └── 1.jpg ... 77.jpg # 77 High-Resolution Skincare Images
│
└── README.md                # Project Documentation
```

---

## 🖼️ Image Audit & Distribution (77 Images)

| Image File | Primary Usage Location | Visual Content Description |
| :--- | :--- | :--- |
| `1.jpg` | `index.html` Hero | Lifestyle banner hero |
| `2.jpg` - `7.jpg` | `index.html` Concern Cards | Hydration, Brightening, Barrier, Oil Control, Sensitive, SPF |
| `8.jpg` - `13.jpg` | `index.html` Bestsellers | Hydra Veil Serum, C-Glow, Barrier Cream, SPF 50, Calm Cleanse, Retinol |
| `14.jpg` - `17.jpg` | `index.html` Daily Ritual | 01 Cleanse, 02 Treat, 03 Hydrate, 04 Protect |
| `18.jpg` | `index.html` Editorial Split | Lifestyle editorial portrait |
| `19.jpg` - `24.jpg` | `index.html` Ingredient Spotlight | Hyaluronic, Niacinamide, Vitamin C, Ceramides, Retinol, Aloe |
| `25.jpg` - `28.jpg` | `index.html` Texture Macro | Cream, Serum, Gel, Oil textures |
| `29.jpg` - `31.jpg` | `index.html` Science & Lab | Formulation, pH testing, bio-compatibility |
| `32.jpg` | `index.html` Final CTA | Bottom CTA banner |
| `33.jpg` | `products.html` Hero | Catalog hero banner |
| `34.jpg` - `45.jpg` | `products.html` Catalog | 12 Demo Product Cards |
| `46.jpg` - `48.jpg` | `products.html` Bundles | Moisture Trio, Radiant System, Overnight Repair |
| `49.jpg` - `54.jpg` | `product-detail.html` | Detail Hero, Thumbnails, Ingredients, Macro Texture |
| `55.jpg` - `62.jpg` | `routine.html` | Routine Wizard Hero, Concerns, AM/PM Result Cards |
| `63.jpg` - `72.jpg` | `ingredients.html` | Ingredient Library Hero & Bio-active cards |
| `73.jpg` - `77.jpg` | `skin-guide.html` | Skin Guide Hero & Editorial Articles 01 - 04 |

---

## 🚀 How to Run Locally

1. Open the project root directory in any modern standard web browser.
2. Double-click `index.html` or serve using a simple local web server (e.g., Live Server or `python -m http.server 8000`).
3. Test search, product filters, routine wizard, favorites, and responsive mobile overlay (< 992px).
