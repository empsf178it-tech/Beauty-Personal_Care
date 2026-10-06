/* ==========================================================================
   LUMÉA — Skincare Platform Core JavaScript Engine
   Vanilla ES6+ Implementation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Systems
  initNavbar();
  initMobileMenu();
  initSearchOverlay();
  initFavoritesSystem();
  initScrollAnimations();
  initToastSystem();
  initBackToTop();
  initFullHeadlineReveal();
  initHeroParallaxTilt();
  initPasswordToggle();

  // Page Specific Inits
  if (document.getElementById('products-grid')) initProductsPage();
  if (document.getElementById('product-detail-view')) initProductDetailPage();
  if (document.getElementById('routine-builder-app')) initRoutineBuilder();
  if (document.getElementById('ingredients-grid')) initIngredientsPage();
  if (document.getElementById('skin-guides-grid')) initSkinGuidesPage();
  if (document.getElementById('login-form')) initLoginForm();
  if (document.getElementById('register-form')) initRegisterForm();
  if (document.getElementById('dashboard-view')) initDashboardPage();
  if (document.getElementById('contact-form')) initContactForm();
});

function initPasswordToggle() {
  const toggleButtons = document.querySelectorAll('.btn-toggle-password');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const wrapper = btn.closest('.password-input-group');
      if (!wrapper) return;
      const input = wrapper.querySelector('input');
      const icon = btn.querySelector('i');
      if (input) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        if (icon) {
          icon.className = isPassword ? 'bi bi-eye' : 'bi bi-eye-slash';
        }
      }
    });
  });
}

/* ==========================================================================
   1. DEMO PRODUCT DATASET (Uses Unique Skincare Images from /assets/images/)
   ========================================================================== */
const LUMEA_PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Hydra Veil Serum',
    category: 'Serums',
    concern: 'Hydration',
    ingredient: 'Hyaluronic Acid',
    price: 48,
    image: 'assets/images/8.jpg',
    secondaryImage: 'assets/images/25.jpg',
    description: 'Deeply penetrates epidermal layers to restore moisture reservoir, plumping fine lines and leaving a luminous satin finish.',
    keyIngredients: ['Hyaluronic Acid 2%', 'Panthenol B5', 'Botanical Glycerin'],
    texture: 'Lightweight fluid gel',
    rating: '4.9 (Demo Rating)'
  },
  {
    id: 'prod-02',
    name: 'C-Glow Concentrate',
    category: 'Serums',
    concern: 'Brightening',
    ingredient: 'Vitamin C',
    price: 54,
    image: 'assets/images/9.jpg',
    secondaryImage: 'assets/images/26.jpg',
    description: 'Stabilized Vitamin C formula designed to neutralize free radicals, diminish hyperpigmentation, and enhance radiant tone.',
    keyIngredients: ['15% L-Ascorbic Acid', 'Ferulic Acid', 'Kakadu Plum Extract'],
    texture: 'Silky liquid concentrate',
    rating: '4.8 (Demo Rating)'
  },
  {
    id: 'prod-03',
    name: 'Barrier Restoration Cream',
    category: 'Moisturizers',
    concern: 'Barrier Care',
    ingredient: 'Ceramides',
    price: 52,
    image: 'assets/images/10.jpg',
    secondaryImage: 'assets/images/27.jpg',
    description: 'Rich ceramide-infused moisture shield that heals compromised skin barriers, locking in hydration for 48 hours.',
    keyIngredients: ['Ceramides NP/AP/EOP', 'Colloidal Oat', 'Squalane'],
    texture: 'Velvety rich cream',
    rating: '5.0 (Demo Rating)'
  },
  {
    id: 'prod-04',
    name: 'Daily Shield Mineral SPF 50',
    category: 'Sunscreen',
    concern: 'Daily Protection',
    ingredient: 'Zinc Oxide',
    price: 42,
    image: 'assets/images/11.jpg',
    secondaryImage: 'assets/images/28.jpg',
    description: 'Ultra-sheer 100% mineral sunscreen providing broad-spectrum protection against UVA/UVB and HEV blue light without white cast.',
    keyIngredients: ['Zinc Oxide 18%', 'Ectoin', 'Green Tea Polyphenols'],
    texture: 'Invisible lightweight lotion',
    rating: '4.9 (Demo Rating)'
  },
  {
    id: 'prod-05',
    name: 'Calm Cleanse Gentle Elixir',
    category: 'Cleansers',
    concern: 'Sensitive Skin',
    ingredient: 'Aloe Vera',
    price: 36,
    image: 'assets/images/12.jpg',
    secondaryImage: 'assets/images/29.jpg',
    description: 'pH-balanced low-foaming cleanser that removes impurities, makeup, and pollutants without stripping essential lipids.',
    keyIngredients: ['Aloe Barbadensis Juice', 'Chamomile Extract', 'Amino Acids'],
    texture: 'Soothing micellar gel',
    rating: '4.7 (Demo Rating)'
  },
  {
    id: 'prod-06',
    name: 'Night Renewal Retinol Treatment',
    category: 'Serums',
    concern: 'Anti-aging',
    ingredient: 'Retinol',
    price: 68,
    image: 'assets/images/13.jpg',
    secondaryImage: 'assets/images/30.jpg',
    description: 'Time-release encapsulated retinol micro-emulsion that accelerates cellular renewal while soothing botanicals prevent irritation.',
    keyIngredients: ['0.5% Encapsulated Retinol', 'Bakuchiol', 'Niacinamide'],
    texture: 'Nourishing oil-serum hybrid',
    rating: '4.9 (Demo Rating)'
  },
  {
    id: 'prod-07',
    name: 'Botanical Nectar Facial Oil',
    category: 'Oils',
    concern: 'Hydration',
    ingredient: 'Squalane',
    price: 58,
    image: 'assets/images/40.jpg',
    secondaryImage: 'assets/images/31.jpg',
    description: 'Cold-pressed organic seed oils rich in omega fatty acids that seal in vital moisture and impart a healthy glass-skin radiance.',
    keyIngredients: ['100% Plant Squalane', 'Rosehip Seed Oil', 'Jojoba Oil'],
    texture: 'Fast-absorbing dry oil',
    rating: '4.8 (Demo Rating)'
  },
  {
    id: 'prod-08',
    name: 'Clarifying Willow Bark Mask',
    category: 'Masks',
    concern: 'Oil Control',
    ingredient: 'Niacinamide',
    price: 44,
    image: 'assets/images/41.jpg',
    secondaryImage: 'assets/images/32.jpg',
    description: 'Purifying bio-cellulose mask formulated with natural BHA to refine pores and regulate sebum without over-drying.',
    keyIngredients: ['Niacinamide 5%', 'White Willow Bark', 'Kaolin Clay'],
    texture: 'Smooth whipped clay mask',
    rating: '4.7 (Demo Rating)'
  },
  {
    id: 'prod-09',
    name: 'Peptide Complex Eye Serum',
    category: 'Eye Care',
    concern: 'Anti-aging',
    ingredient: 'Peptides',
    price: 46,
    image: 'assets/images/42.jpg',
    secondaryImage: 'assets/images/33.jpg',
    description: 'Targeted cooling eye treatment that reduces periorbital puffiness, lightens dark circles, and firms delicate contours.',
    keyIngredients: ['Triple Peptide Complex', 'Caffeine 3%', 'Hydra-hyaluronic'],
    texture: 'Cooling gel-lotion',
    rating: '4.9 (Demo Rating)'
  },
  {
    id: 'prod-10',
    name: 'Phyto-Calm Recovery Toner',
    category: 'Cleansers',
    concern: 'Sensitive Skin',
    ingredient: 'Panthenol',
    price: 34,
    image: 'assets/images/43.jpg',
    secondaryImage: 'assets/images/34.jpg',
    description: 'Soothing botanical mist that rebalances skin pH post-cleansing and preps the lipid matrix for optimal serum absorption.',
    keyIngredients: ['Panthenol 3%', 'Centella Asiatica', 'Cucumber Extract'],
    texture: 'Refreshing fine essence mist',
    rating: '4.8 (Demo Rating)'
  },
  {
    id: 'prod-11',
    name: 'Radiance Enzyme Exfoliator',
    category: 'Masks',
    concern: 'Brightening',
    ingredient: 'Vitamin C',
    price: 40,
    image: 'assets/images/44.jpg',
    secondaryImage: 'assets/images/35.jpg',
    description: 'Fruit enzyme gentle peel that dissolves dull dead skin cells, promoting smooth texture and illuminated luminosity.',
    keyIngredients: ['Papaya & Pineapple Enzymes', 'Lactic Acid 5%', 'Sea Buckthorn'],
    texture: 'Jelly enzyme mask',
    rating: '4.9 (Demo Rating)'
  },
  {
    id: 'prod-12',
    name: 'Lipid Repair Night Balm',
    category: 'Moisturizers',
    concern: 'Barrier Care',
    ingredient: 'Ceramides',
    price: 62,
    image: 'assets/images/45.jpg',
    secondaryImage: 'assets/images/36.jpg',
    description: 'Overnight intensive barrier recovery ointment that seals micro-cracks and restores supple elasticity while you sleep.',
    keyIngredients: ['Ceramide Complex', 'Shea Butter', 'Phytosterols'],
    texture: 'Melting rich balm',
    rating: '5.0 (Demo Rating)'
  }
];

/* ==========================================================================
   2. GLOBAL NAVBAR & SCROLL DETECTOR
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.lumea-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. MOBILE MENU SYSTEM (< 992px STRICT IMPLEMENTATION)
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!toggleBtn || !overlay) return;

  function openMenu() {
    toggleBtn.classList.add('is-active');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('is-active');
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (overlay.classList.contains('is-active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const closeBtn = document.getElementById('close-mobile-menu') || overlay.querySelector('.close-mobile-menu-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close on nav link click
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ESC key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   4. GLOBAL SEARCH OVERLAY MODAL
   ========================================================================== */
function initSearchOverlay() {
  const openBtns = document.querySelectorAll('.trigger-search');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('close-search');
  const input = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-container');

  if (!overlay) return;

  function openSearch() {
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    if (input) setTimeout(() => input.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (resultsContainer) resultsContainer.innerHTML = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
      closeSearch();
    }
  });

  if (input && resultsContainer) {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        resultsContainer.innerHTML = '';
        return;
      }

      const matches = LUMEA_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.concern.toLowerCase().includes(query) ||
        p.ingredient.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="text-center py-5">
            <p class="lead-text">We couldn't find a match for "${e.target.value}".</p>
            <p class="small text-muted">Try searching for Hyaluronic, Serums, Hydration, or Sunscreen.</p>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = `
        <div class="row g-4 mt-2">
          ${matches.map(p => `
            <div class="col-md-4">
              <div class="lumea-card p-3 d-flex gap-3 align-items-center">
                <img src="${p.image}" alt="${p.name}" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                <div>
                  <span class="badge-lumea badge-terracotta mb-1">${p.category}</span>
                  <h6 class="mb-1 font-serif"><a href="product-detail.html?id=${p.id}">${p.name}</a></h6>
                  <small class="text-muted">$${p.price}.00 USD</small>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    });
  }
}

/* ==========================================================================
   5. FAVORITES SYSTEM (localStorage Persistence)
   ========================================================================== */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('lumeaFavorites')) || [];
  } catch(e) {
    return [];
  }
}

function saveFavorites(favs) {
  localStorage.setItem('lumeaFavorites', JSON.stringify(favs));
}

function initFavoritesSystem() {
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.favorite-toggle-btn');
    if (!favBtn) return;

    e.preventDefault();
    const productId = favBtn.dataset.productId;
    if (!productId) return;

    let favs = getFavorites();
    if (favs.includes(productId)) {
      favs = favs.filter(id => id !== productId);
      favBtn.classList.remove('is-active');
      favBtn.querySelector('i').className = 'bi bi-heart';
      showToast('Removed from your favorites.');
    } else {
      favs.push(productId);
      favBtn.classList.add('is-active');
      favBtn.querySelector('i').className = 'bi bi-heart-fill';
      showToast('Added to your favorites.');
    }
    saveFavorites(favs);
    updateFavCountHeader();
  });

  updateFavCountHeader();
}

function updateFavCountHeader() {
  const countBadge = document.getElementById('favorites-count-badge');
  if (countBadge) {
    const count = getFavorites().length;
    countBadge.textContent = count;
    countBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

/* ==========================================================================
   6. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function initToastSystem() {
  if (!document.querySelector('.lumea-toast-container')) {
    const container = document.createElement('div');
    container.className = 'lumea-toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message) {
  let container = document.querySelector('.lumea-toast-container');
  if (!container) {
    initToastSystem();
    container = document.querySelector('.lumea-toast-container');
  }

  const toast = document.createElement('div');
  toast.className = 'lumea-toast';
  toast.innerHTML = `<i class="bi bi-sparkles"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ==========================================================================
   7. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

/* ==========================================================================
   7b. BACK TO TOP FLOATING BUTTON ENGINE
   ========================================================================== */
function initBackToTop() {
  let btn = document.getElementById('back-to-top-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top-btn';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Back to top of page');
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   7c. HERO FULL H1 HEADLINE STAGGERED WORD REVEAL & LIQUID RIBBON
   ========================================================================== */
function initFullHeadlineReveal() {
  const trigger = document.getElementById('hero-headline-trigger');
  if (!trigger) return;

  function runHeadlineReveal() {
    trigger.classList.remove('is-revealed');
    void trigger.offsetWidth; // Force reflow
    trigger.classList.add('is-revealed');
  }

  // Trigger reveal on load
  setTimeout(runHeadlineReveal, 300);

  // Re-trigger reveal on hover
  trigger.addEventListener('mouseenter', () => {
    runHeadlineReveal();
  });
}

/* ==========================================================================
   HERO INTERACTIVE 3D TILT & SMOOTH PARALLAX
   ========================================================================== */
function initHeroParallaxTilt() {
  const tiltCard = document.getElementById('hero-tilt-card');
  const shineOverlay = document.getElementById('hero-shine');
  if (!tiltCard) return;

  const cardInner = tiltCard.querySelector('.hero-image-container');
  if (!cardInner) return;

  tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // Max 7 deg tilt
    const rotateY = ((x - centerX) / centerX) * 7;

    cardInner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;

    if (shineOverlay) {
      const shineX = (x / rect.width) * 100;
      const shineY = (y / rect.height) * 100;
      shineOverlay.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  });

  tiltCard.addEventListener('mouseleave', () => {
    cardInner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
}

/* ==========================================================================
   8. PRODUCTS CATALOG PAGE LOGIC (products.html)
   ========================================================================== */
function initProductsPage() {
  const container = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-catalog-search');
  const categoryFilterBtns = document.querySelectorAll('[data-filter-category]');
  const concernFilterBtns = document.querySelectorAll('[data-filter-concern]');

  let activeCategory = 'All';
  let activeConcern = 'All';
  let searchQuery = '';

  function renderProducts() {
    let filtered = LUMEA_PRODUCTS.filter(p => {
      const catMatch = (activeCategory === 'All') || (p.category.toLowerCase() === activeCategory.toLowerCase());
      const concernMatch = (activeConcern === 'All') || (p.concern.toLowerCase() === activeConcern.toLowerCase());
      const searchMatch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.ingredient.toLowerCase().includes(searchQuery);

      return catMatch && concernMatch && searchMatch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <h4 class="font-serif mb-2">We couldn't find a match.</h4>
          <p class="text-muted">Try adjusting your filters or search term to discover other skincare formulas.</p>
        </div>
      `;
      return;
    }

    const favs = getFavorites();

    container.innerHTML = filtered.map(p => {
      const isFav = favs.includes(p.id);
      return `
        <div class="col-12 col-md-6 col-lg-4 reveal-on-scroll is-visible">
          <div class="lumea-card h-100 d-flex flex-column">
            <div class="img-hover-wrapper position-relative" style="height: 320px;">
              <button class="favorite-toggle-btn ${isFav ? 'is-active' : ''}" data-product-id="${p.id}" aria-label="Favorite product">
                <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
              </button>
              <img src="${p.image}" alt="${p.name} - ${p.category} skincare formula" loading="lazy">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge-lumea badge-terracotta">${p.category}</span>
                <small class="text-muted font-sans">${p.concern}</small>
              </div>
              <h4 class="font-serif fs-5 mb-2"><a href="product-detail.html?id=${p.id}">${p.name}</a></h4>
              <p class="small text-muted mb-3 flex-grow-1">${p.description.substring(0, 95)}...</p>
              <div class="d-flex align-items-center justify-content-between pt-3 border-top border-light">
                <span class="fw-semibold font-serif fs-5">$${p.price}.00</span>
                <a href="product-detail.html?id=${p.id}" class="btn-lumea btn-lumea-outline btn-lumea-sm">View Details</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Bind Event Listeners
  categoryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filterCategory;
      renderProducts();
    });
  });

  concernFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      concernFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeConcern = btn.dataset.filterConcern;
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  renderProducts();
}

/* ==========================================================================
   9. PRODUCT DETAIL PAGE LOGIC (product-detail.html)
   ========================================================================== */
function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'prod-01';
  const product = LUMEA_PRODUCTS.find(p => p.id === productId) || LUMEA_PRODUCTS[0];

  const mainImage = document.getElementById('detail-main-image');
  const titleEl = document.getElementById('detail-title');
  const catEl = document.getElementById('detail-category');
  const priceEl = document.getElementById('detail-price');
  const descEl = document.getElementById('detail-desc');
  const textureEl = document.getElementById('detail-texture');
  const ingredientsList = document.getElementById('detail-ingredients');
  const addRoutineBtn = document.getElementById('detail-add-routine-btn');
  const saveProductBtn = document.getElementById('detail-save-btn');

  if (mainImage) mainImage.src = product.image;
  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = `${product.category} / ${product.concern}`;
  if (priceEl) priceEl.textContent = `$${product.price}.00 USD`;
  if (descEl) descEl.textContent = product.description;
  if (textureEl) textureEl.textContent = product.texture;

  if (ingredientsList && product.keyIngredients) {
    ingredientsList.innerHTML = product.keyIngredients.map(ing => `
      <li class="mb-2 d-flex align-items-center gap-2">
        <i class="bi bi-check2-circle text-success fs-5"></i>
        <span>${ing}</span>
      </li>
    `).join('');
  }

  // Thumbnails
  const thumbContainer = document.getElementById('detail-thumbnails');
  if (thumbContainer) {
    const thumbs = [product.image, product.secondaryImage, 'assets/images/25.jpg', 'assets/images/26.jpg'];
    thumbContainer.innerHTML = thumbs.map((t, idx) => `
      <img src="${t}" alt="Thumbnail ${idx+1}" class="img-thumbnail ${idx===0?'border-dark':''}" style="width: 70px; height: 70px; object-fit: cover; cursor: pointer;">
    `).join('');

    thumbContainer.querySelectorAll('img').forEach((img, i) => {
      img.addEventListener('click', () => {
        if (mainImage) mainImage.src = thumbs[i];
        thumbContainer.querySelectorAll('img').forEach(b => b.classList.remove('border-dark'));
        img.classList.add('border-dark');
      });
    });
  }

  if (addRoutineBtn) {
    addRoutineBtn.addEventListener('click', () => {
      let routine = JSON.parse(localStorage.getItem('lumeaRoutine')) || { am: [], pm: [] };
      if (!routine.am.includes(product.name)) {
        routine.am.push(product.name);
        localStorage.setItem('lumeaRoutine', JSON.stringify(routine));
        showToast(`${product.name} added to your Morning Routine!`);
      } else {
        showToast(`${product.name} is already in your routine.`);
      }
    });
  }

  if (saveProductBtn) {
    saveProductBtn.addEventListener('click', () => {
      let favs = getFavorites();
      if (!favs.includes(product.id)) {
        favs.push(product.id);
        saveFavorites(favs);
        showToast('Saved product to your favorites list.');
      } else {
        showToast('Product is already in your saved list.');
      }
    });
  }
}

/* ==========================================================================
   10. INTERACTIVE ROUTINE BUILDER (routine.html)
   ========================================================================== */
function initRoutineBuilder() {
  const wizardContainer = document.getElementById('routine-wizard');
  const resultContainer = document.getElementById('routine-result-view');

  if (!wizardContainer) return;

  let selectedConcern = 'Hydration';
  let selectedTime = 'Morning & Evening';

  const concernCards = document.querySelectorAll('[data-wizard-concern]');
  concernCards.forEach(card => {
    card.addEventListener('click', () => {
      concernCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedConcern = card.dataset.wizardConcern;
    });
  });

  const timeCards = document.querySelectorAll('[data-wizard-time]');
  timeCards.forEach(card => {
    card.addEventListener('click', () => {
      timeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedTime = card.dataset.wizardTime;
    });
  });

  const generateBtn = document.getElementById('generate-routine-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      // Generate Routine Steps based on Concern
      let amProducts = [LUMEA_PRODUCTS[4], LUMEA_PRODUCTS[0], LUMEA_PRODUCTS[2], LUMEA_PRODUCTS[3]]; // Cleanser, Serum, Cream, SPF
      let pmProducts = [LUMEA_PRODUCTS[4], LUMEA_PRODUCTS[1], LUMEA_PRODUCTS[5], LUMEA_PRODUCTS[11]]; // Cleanser, Glow, Retinol, Night Balm

      if (selectedConcern === 'Brightening') {
        amProducts[1] = LUMEA_PRODUCTS[1]; // Vitamin C
      } else if (selectedConcern === 'Barrier Care') {
        amProducts[2] = LUMEA_PRODUCTS[2];
        pmProducts[3] = LUMEA_PRODUCTS[11];
      }

      wizardContainer.style.display = 'none';
      if (resultContainer) {
        resultContainer.style.display = 'block';
        resultContainer.scrollIntoView({ behavior: 'smooth' });

        const amContainer = document.getElementById('routine-am-list');
        const pmContainer = document.getElementById('routine-pm-list');

        if (amContainer) {
          amContainer.innerHTML = amProducts.map((p, idx) => `
            <div class="col-md-6 col-lg-3">
              <div class="lumea-card p-3 text-center h-100">
                <span class="badge-lumea badge-terracotta mb-2">Step 0${idx+1}</span>
                <img src="${p.image}" alt="${p.name}" class="rounded mx-auto mb-3" style="height: 160px; object-fit: cover; width: 100%;">
                <h6 class="font-serif mb-1">${p.name}</h6>
                <small class="text-muted d-block mb-2">${p.category}</small>
                <a href="product-detail.html?id=${p.id}" class="btn-lumea btn-lumea-outline btn-lumea-sm w-100">Explore</a>
              </div>
            </div>
          `).join('');
        }

        if (pmContainer) {
          pmContainer.innerHTML = pmProducts.map((p, idx) => `
            <div class="col-md-6 col-lg-3">
              <div class="lumea-card p-3 text-center h-100">
                <span class="badge-lumea badge-sage mb-2">Step 0${idx+1}</span>
                <img src="${p.image}" alt="${p.name}" class="rounded mx-auto mb-3" style="height: 160px; object-fit: cover; width: 100%;">
                <h6 class="font-serif mb-1">${p.name}</h6>
                <small class="text-muted d-block mb-2">${p.category}</small>
                <a href="product-detail.html?id=${p.id}" class="btn-lumea btn-lumea-outline btn-lumea-sm w-100">Explore</a>
              </div>
            </div>
          `).join('');
        }

        // Save generated routine into localStorage
        const savedRoutine = {
          concern: selectedConcern,
          time: selectedTime,
          am: amProducts.map(p => p.name),
          pm: pmProducts.map(p => p.name)
        };
        localStorage.setItem('lumeaRoutine', JSON.stringify(savedRoutine));
        showToast('Your custom skincare routine was successfully created!');
      }
    });
  }

  const resetBtn = document.getElementById('reset-routine-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (resultContainer) resultContainer.style.display = 'none';
      if (wizardContainer) wizardContainer.style.display = 'block';
    });
  }
}

/* ==========================================================================
   11. INGREDIENTS PAGE SEARCH & FILTER (ingredients.html)
   ========================================================================== */
function initIngredientsPage() {
  const searchInput = document.getElementById('ingredient-search-input');
  const cards = document.querySelectorAll('.ingredient-card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.parentElement.style.display = 'block';
        } else {
          card.parentElement.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   12. SKIN GUIDE PAGE SEARCH & FILTER (skin-guide.html)
   ========================================================================== */
function initSkinGuidesPage() {
  const filterBtns = document.querySelectorAll('[data-guide-filter]');
  const cards = document.querySelectorAll('.skin-guide-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.guideFilter;

      cards.forEach(card => {
        const cardCat = card.dataset.guideCategory;
        if (cat === 'All' || cardCat === cat) {
          card.parentElement.style.display = 'block';
        } else {
          card.parentElement.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   13. AUTHENTICATION & USER DASHBOARD DEMO
   ========================================================================== */
function initLoginForm() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const session = { email: email, name: email.split('@')[0], loggedIn: true };
    localStorage.setItem('lumeaSession', JSON.stringify(session));
    showToast('Signed in successfully! Redirecting...');
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
  });
}

function initRegisterForm() {
  const form = document.getElementById('register-form');
  const pwd = document.getElementById('reg-password');
  const meter = document.getElementById('pwd-strength-bar');

  if (pwd && meter) {
    pwd.addEventListener('input', () => {
      const len = pwd.value.length;
      if (len === 0) meter.style.width = '0%';
      else if (len < 6) { meter.style.width = '33%'; meter.className = 'progress-bar bg-danger'; }
      else if (len < 10) { meter.style.width = '66%'; meter.className = 'progress-bar bg-warning'; }
      else { meter.style.width = '100%'; meter.className = 'progress-bar bg-success'; }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const session = { email: email, name: name, loggedIn: true };
      localStorage.setItem('lumeaUser', JSON.stringify({ name, email }));
      localStorage.setItem('lumeaSession', JSON.stringify(session));
      showToast('Registration complete! Welcome to LUMÉA.');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    });
  }
}

function initDashboardPage() {
  const session = JSON.parse(localStorage.getItem('lumeaSession'));
  const userGreeting = document.getElementById('dash-user-name');
  const favGrid = document.getElementById('dash-favorites-grid');
  const logoutBtn = document.getElementById('dash-logout-btn');

  if (userGreeting) {
    userGreeting.textContent = session ? session.name : 'Guest';
  }

  if (favGrid) {
    const favIds = getFavorites();
    const favProducts = LUMEA_PRODUCTS.filter(p => favIds.includes(p.id));

    if (favProducts.length === 0) {
      favGrid.innerHTML = `
        <div class="col-12 py-4 text-center">
          <p class="text-muted">You haven't saved any favorites yet.</p>
          <a href="products.html" class="btn-lumea btn-lumea-outline btn-lumea-sm">Explore Shop</a>
        </div>
      `;
    } else {
      favGrid.innerHTML = favProducts.map(p => `
        <div class="col-md-6 col-lg-4">
          <div class="lumea-card p-3 d-flex gap-3 align-items-center">
            <img src="${p.image}" alt="${p.name}" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
            <div>
              <h6 class="font-serif mb-1"><a href="product-detail.html?id=${p.id}">${p.name}</a></h6>
              <small class="text-muted d-block">$${p.price}.00 USD</small>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('lumeaSession');
      showToast('You have been logged out.');
      setTimeout(() => window.location.href = 'index.html', 1000);
    });
  }
}

/* ==========================================================================
   14. CONTACT FORM & NEWSLETTER VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for contacting LUMÉA. We will reply within 24 hours.');
      form.reset();
    });
  }
}
