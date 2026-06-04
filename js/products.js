/* =============================================
   BELIEVE YOURSELF — Products Data & Rendering
   ============================================= */

const PRODUCTS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Noise-Cancelling Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 14382,
    badges: ["bestseller", "hot"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Sony+WH-1000XM5",
    description: "Industry-leading noise cancellation with Auto NC Optimizer, crystal clear hands-free calling.",
    featured: true
  },
  {
    id: 2,
    title: "Smart LED Desk Lamp with Wireless Charging",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 5821,
    badges: ["deal"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Smart+LED+Desk+Lamp+Wireless+Charging",
    description: "Touch-sensitive control, 5 color temperatures, USB-A charging port, memory function.",
    featured: true
  },
  {
    id: 3,
    title: "Anker Soundcore Bluetooth Speaker 360°",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 9234,
    badges: ["trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Bluetooth+Speaker+360",
    description: "360° immersive sound, 24-hour battery, IPX7 waterproof, Bluetooth 5.0.",
    featured: true
  },
  {
    id: 4,
    title: "Hydro Flask 32 oz Wide Mouth Bottle",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    price: 34.95,
    originalPrice: 44.95,
    rating: 4.9,
    reviews: 22015,
    badges: ["bestseller"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Hydro+Flask+32oz",
    description: "Keeps drinks cold 24 hours, hot 12 hours. BPA-free 18/8 stainless steel.",
    featured: false
  },
  {
    id: 5,
    title: "USB-C Hub 7-in-1 Multiport Adapter",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=400&h=400&fit=crop",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviews: 7654,
    badges: ["deal"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=USB-C+Hub+7-in-1",
    description: "4K HDMI, 100W PD, USB-A 3.0, SD/TF card reader, compact aluminum design.",
    featured: true
  },
  {
    id: 6,
    title: "Lululemon Align Yoga Mat 5mm",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop",
    price: 29.99,
    originalPrice: 48.00,
    rating: 4.6,
    reviews: 4312,
    badges: ["sale"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Yoga+Mat+5mm+Non-Slip",
    description: "Non-slip natural rubber base, moisture-wicking surface, extra wide 72\" length.",
    featured: false
  },
  {
    id: 7,
    title: "Oral-B Pro 3000 Electric Toothbrush",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1559591937-000df859b22e?w=400&h=400&fit=crop",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 11250,
    badges: ["hot", "deal"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Oral-B+Pro+3000+Electric+Toothbrush",
    description: "3 brushing modes, pressure sensor, 2-minute timer, charges in 12 hours.",
    featured: true
  },
  {
    id: 8,
    title: "iOttie Easy One Touch 5 Car Mount",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.5,
    reviews: 18765,
    badges: ["trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Car+Phone+Mount+Dashboard",
    description: "One-touch locking, 360° rotation, fits phones 2.3"–3.7" wide, sticky gel base.",
    featured: false
  },
  {
    id: 9,
    title: "Keychron K2 Wireless Mechanical Keyboard",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 8932,
    badges: ["new", "trending"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Keychron+K2+Wireless+Mechanical+Keyboard",
    description: "Hot-swappable Gateron switches, RGB backlit, Bluetooth 5.1 + USB-C, Mac/Windows.",
    featured: true
  },
  {
    id: 10,
    title: "Ninja AF101 Air Fryer 4 Quart",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 25441,
    badges: ["bestseller", "hot"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Ninja+AF101+Air+Fryer",
    description: "Air fry, roast, reheat & dehydrate. Up to 75% less fat. 4-qt ceramic-coated basket.",
    featured: true
  },
  {
    id: 11,
    title: "Fitbit Charge 5 Fitness Tracker",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e97fd29?w=400&h=400&fit=crop",
    price: 59.95,
    originalPrice: 99.95,
    rating: 4.6,
    reviews: 13201,
    badges: ["sale", "trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Fitness+Tracker+Smart+Watch",
    description: "Built-in GPS, heart rate + ECG, stress management, sleep tracking, 7-day battery.",
    featured: true
  },
  {
    id: 12,
    title: "Pioneer Pet Stainless Steel Water Fountain",
    category: "Pets",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
    price: 32.99,
    originalPrice: 44.99,
    rating: 4.5,
    reviews: 3845,
    badges: ["new"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Pet+Water+Fountain+Stainless+Steel",
    description: "60 oz capacity, replaceable charcoal filter, dishwasher safe, quiet pump.",
    featured: false
  }
];

/* ---- Helper: render stars ---- */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  let html = '<span class="stars">';
  for (let i = 0; i < full; i++) html += '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  if (half) html += '<svg width="14" height="14" viewBox="0 0 24 24"><defs><clipPath id="h"><rect width="12" height="24"/></clipPath></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#e5e7eb"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" clip-path="url(#h)"/></svg>';
  for (let i = 0; i < empty; i++) html += '<svg width="14" height="14" viewBox="0 0 24 24" style="color:#e5e7eb"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  html += '</span>';
  return html;
}

/* ---- Helper: format price ---- */
function fmtPrice(price) {
  return '$' + price.toFixed(2);
}

/* ---- Helper: discount % ---- */
function discountPct(original, current) {
  return Math.round((1 - current / original) * 100);
}

/* ---- Helper: badge HTML ---- */
function renderBadges(badges) {
  const labelMap = {
    hot: '🔥 Hot',
    deal: '💰 Deal',
    new: '✨ New',
    trending: '📈 Trending',
    bestseller: '🏆 Best Seller',
    sale: '🏷️ Sale'
  };
  return badges.slice(0, 2).map(b => `<span class="badge badge-${b}">${labelMap[b] || b}</span>`).join('');
}

/* ---- Render Product Card ---- */
function renderProductCard(product) {
  const discount = discountPct(product.originalPrice, product.price);
  const sourceLabel = product.source === 'amazon' ? 'Check Price on Amazon' : 'View Deal on AliExpress';
  const sourceBtnClass = product.source === 'amazon' ? 'btn-amazon' : 'btn-aliexpress';
  const sourceIcon = product.source === 'amazon' ? '🛒' : '🛍️';

  return `
    <article class="product-card fade-in-up" itemscope itemtype="https://schema.org/Product">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy" itemprop="image"/>
        <div class="product-card-badges">${renderBadges(product.badges)}</div>
        <div class="product-card-actions">
          <button class="card-action-btn wishlist-btn" aria-label="Add to wishlist" title="Wishlist">
            <span class="icon">🤍</span>
          </button>
          <a href="product-review.html?id=${product.id}" class="card-action-btn" aria-label="Quick view" title="View Review">👁️</a>
        </div>
      </div>
      <div class="product-card-body">
        <p class="product-category-tag">${product.category}</p>
        <h3 class="product-title" itemprop="name">${product.title}</h3>
        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
          ${renderStars(product.rating)}
          <span class="rating-number" itemprop="ratingValue">${product.rating}</span>
          <span class="rating-count" itemprop="reviewCount">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <span class="price-current" itemprop="price">${fmtPrice(product.price)}</span>
          <span class="price-original">${fmtPrice(product.originalPrice)}</span>
          <span class="price-save">Save ${discount}%</span>
          <meta itemprop="priceCurrency" content="USD"/>
        </div>
        <div class="product-card-footer">
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" 
             class="btn ${sourceBtnClass} btn-full btn-sm"
             data-affiliate="${product.source}" data-product="${product.id}">
            ${sourceIcon} ${sourceLabel}
          </a>
          <a href="product-review.html?id=${product.id}" class="btn btn-outline btn-full btn-sm">
            📖 Read Review
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ---- Render Deal Card ---- */
function renderDealCard(product) {
  const discount = discountPct(product.originalPrice, product.price);
  return `
    <div class="deal-card fade-in-up">
      <div class="deal-card-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy"/>
      </div>
      <div class="deal-card-body">
        <div>${renderBadges(product.badges)}</div>
        <p class="deal-title">${product.title}</p>
        <div class="rating-display" style="margin: 8px 0;">
          ${renderStars(product.rating)}
          <span style="color:rgba(255,255,255,0.5);font-size:0.8rem;">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="deal-price-row">
          <span class="deal-price-current">${fmtPrice(product.price)}</span>
          <span class="deal-discount">-${discount}% OFF</span>
        </div>
        <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored"
           class="btn ${product.source === 'amazon' ? 'btn-amazon' : 'btn-aliexpress'} btn-full btn-sm"
           style="margin-top:14px;"
           data-affiliate="${product.source}" data-product="${product.id}">
          ${product.source === 'amazon' ? '🛒 Amazon Deal' : '🛍️ AliExpress Deal'}
        </a>
      </div>
    </div>
  `;
}

/* ---- Load Homepage Featured Products ---- */
function loadFeaturedProducts() {
  const container = document.querySelector('#featured-products');
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 6);
  container.innerHTML = featured.map(renderProductCard).join('');
  initWishlistButtons(container);
}

/* ---- Load Homepage Trending Deals ---- */
function loadTrendingDeals() {
  const container = document.querySelector('#trending-deals');
  if (!container) return;
  const deals = PRODUCTS.filter(p => p.badges.includes('deal') || p.badges.includes('hot')).slice(0, 4);
  container.innerHTML = deals.map(renderDealCard).join('');
}

/* ---- Load Best Sellers ---- */
function loadBestSellers() {
  const container = document.querySelector('#best-sellers');
  if (!container) return;
  const sellers = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  container.innerHTML = sellers.map(renderProductCard).join('');
  initWishlistButtons(container);
}

/* ---- Load Products Page ---- */
function loadProductsPage() {
  const container = document.querySelector('#products-grid');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search') || '';
  const category = params.get('category') || '';

  let filtered = PRODUCTS;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    const searchTitle = document.querySelector('#search-result-title');
    if (searchTitle) searchTitle.textContent = `Results for "${searchQuery}" (${filtered.length} found)`;
  }

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
        <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
        <h3 style="font-family:var(--font-heading);margin-bottom:8px;">No products found</h3>
        <p style="color:var(--color-text-muted);">Try a different search term or browse our categories.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top:20px;">Browse All Products</a>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(renderProductCard).join('');
    initWishlistButtons(container);
  }
}

/* ---- Load Category Page Products ---- */
function loadCategoryProducts() {
  const container = document.querySelector('#category-products');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat') || 'Electronics';

  const filtered = PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());

  const catTitle = document.querySelector('.category-page-title');
  if (catTitle) catTitle.textContent = category;

  const catCount = document.querySelector('.category-page-count');
  if (catCount) catCount.textContent = `${filtered.length} Products`;

  container.innerHTML = (filtered.length > 0 ? filtered : PRODUCTS.slice(0, 6))
    .map(renderProductCard).join('');
  initWishlistButtons(container);
}

/* ---- Load Product Review Page ---- */
function loadProductReview() {
  const reviewMain = document.querySelector('#review-product-data');
  if (!reviewMain) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  // Update page title and meta
  document.title = `${product.title} Review — Believe Yourself`;

  // Populate product data
  const titleEl = document.querySelector('#review-product-title');
  if (titleEl) titleEl.textContent = product.title;

  const imgEl = document.querySelector('#review-product-img');
  if (imgEl) { imgEl.src = product.image; imgEl.alt = product.title; }

  const priceEl = document.querySelector('#review-price');
  if (priceEl) priceEl.textContent = fmtPrice(product.price);

  const ratingEl = document.querySelector('#review-rating-num');
  if (ratingEl) ratingEl.textContent = product.rating;

  const starsEl = document.querySelector('#review-stars');
  if (starsEl) starsEl.innerHTML = renderStars(product.rating);

  const reviewCountEl = document.querySelector('#review-count');
  if (reviewCountEl) reviewCountEl.textContent = `(${product.reviews.toLocaleString()} verified reviews)`;

  const amazonBtn = document.querySelector('#btn-amazon');
  if (amazonBtn) {
    amazonBtn.href = product.affiliateUrl;
    amazonBtn.setAttribute('data-product', product.id);
    if (product.source !== 'amazon') amazonBtn.style.display = 'none';
  }

  const aliBtn = document.querySelector('#btn-aliexpress');
  if (aliBtn) {
    aliBtn.href = `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(product.title)}`;
    aliBtn.setAttribute('data-product', product.id);
    if (product.source === 'amazon') aliBtn.style.display = 'none';
  }

  const ctaPrice = document.querySelector('#cta-price');
  if (ctaPrice) ctaPrice.textContent = fmtPrice(product.price);

  const ctaOrig = document.querySelector('#cta-orig');
  if (ctaOrig) ctaOrig.textContent = fmtPrice(product.originalPrice);
}

/* ---- Init Wishlist Buttons ---- */
function initWishlistButtons(container) {
  container.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = btn.querySelector('.icon');
      if (icon) {
        if (icon.textContent === '🤍') {
          icon.textContent = '❤️';
          if (window.showToast) window.showToast('❤️ Added to your wishlist!');
        } else {
          icon.textContent = '🤍';
          if (window.showToast) window.showToast('Removed from wishlist.');
        }
      }
    });
  });
}

/* ---- Initialize on DOM Ready ---- */
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
  loadTrendingDeals();
  loadBestSellers();
  loadProductsPage();
  loadCategoryProducts();
  loadProductReview();

  // Re-observe newly rendered cards
  const animEls = document.querySelectorAll('.fade-in-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  animEls.forEach(el => obs.observe(el));
});
