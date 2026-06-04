/* =============================================
   BELIEVE YOURSELF — Main JavaScript
   ============================================= */

(function () {
  'use strict';

  /* ========================================
     STICKY HEADER
     ======================================== */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ========================================
     MOBILE MENU
     ======================================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ========================================
     SEARCH OVERLAY
     ======================================== */
  const searchBtn = document.querySelector('.header-search-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.querySelector('.search-input');

  function openSearch() {
    if (searchOverlay) {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
    }
  }

  function closeSearch() {
    if (searchOverlay) {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      if (mobileNav && mobileNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Search tags
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = tag.textContent.trim();
        searchInput.focus();
      }
    });
  });

  // Search form submit
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput ? searchInput.value.trim() : '';
      if (query) {
        closeSearch();
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  /* ========================================
     ACTIVE NAV LINK
     ======================================== */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ========================================
     SCROLL ANIMATIONS (Intersection Observer)
     ======================================== */
  const animElements = document.querySelectorAll('.fade-in-up, .fade-in');

  if (animElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animElements.forEach(el => observer.observe(el));
  }

  /* ========================================
     BACK TO TOP BUTTON
     ======================================== */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ========================================
     NEWSLETTER FORM
     ======================================== */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('.newsletter-input');
      if (email && email.value) {
        showToast('🎉 You\'ve subscribed! Check your inbox for deals.', 'success');
        email.value = '';
      }
    });
  });

  /* ========================================
     CONTACT FORM
     ======================================== */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✅ Message sent! We\'ll get back to you within 24 hours.', 'success');
      contactForm.reset();
    });
  }

  /* ========================================
     TOAST NOTIFICATIONS
     ======================================== */
  function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // Make it globally available
  window.showToast = showToast;

  /* ========================================
     GALLERY THUMBNAILS (Product Review)
     ======================================== */
  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  const galleryMain = document.querySelector('.gallery-main img');

  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      galleryThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (galleryMain) {
        galleryMain.src = thumb.querySelector('img').src;
        galleryMain.alt = thumb.querySelector('img').alt;
      }
    });
  });

  /* ========================================
     SMOOTH SCROLL (for anchor links)
     ======================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ========================================
     COUNTER ANIMATION (hero stats)
     ======================================== */
  function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 16);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll('.hero-stat-value[data-target]');
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const suffix = stat.getAttribute('data-suffix') || '';
          animateCounter(stat, target, suffix);
        });
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statObserver.observe(heroStats);

  /* ========================================
     COMPARISON TABLE — TOGGLE HIGHLIGHT
     ======================================== */
  const compHeaders = document.querySelectorAll('.comparison-table th:not(:first-child)');
  compHeaders.forEach(th => {
    th.addEventListener('click', () => {
      compHeaders.forEach(h => h.classList.remove('selected'));
      th.classList.add('selected');
    });
  });

  /* ========================================
     FILTER SIDEBAR (Category page)
     ======================================== */
  const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // In a real app, this would filter products via AJAX
      const checked = document.querySelectorAll('.filter-option input:checked').length;
      if (checked > 0) {
        showToast(`Filters applied: ${checked} active filter${checked > 1 ? 's' : ''}`);
      }
    });
  });

  /* ========================================
     PRICE RANGE SLIDER (Category page)
     ======================================== */
  const priceRange = document.querySelector('#price-range');
  const priceDisplay = document.querySelector('#price-display');
  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', () => {
      priceDisplay.textContent = `$0 – $${priceRange.value}`;
    });
  }

  /* ========================================
     COPY SHARE LINK
     ======================================== */
  const shareBtn = document.querySelector('.share-link-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('🔗 Link copied to clipboard!');
      } catch {
        showToast('Copy the URL from your address bar to share.');
      }
    });
  }

  /* ========================================
     WISHLIST BUTTON (heart toggle)
     ======================================== */
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = btn.querySelector('.icon');
      if (icon) {
        if (icon.textContent === '🤍') {
          icon.textContent = '❤️';
          showToast('❤️ Added to your wishlist!');
        } else {
          icon.textContent = '🤍';
          showToast('Removed from wishlist.');
        }
      }
    });
  });

  /* ========================================
     AFFILIATE LINK TRACKING
     ======================================== */
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    link.addEventListener('click', () => {
      const source = link.getAttribute('data-affiliate');
      const product = link.getAttribute('data-product') || 'unknown';
      // In production, send to analytics (e.g. GA4 event)
      console.log(`[Affiliate Click] Source: ${source}, Product: ${product}`);
    });
  });

  console.log('✅ Believe Yourself — Loaded successfully');

})();
