export function initGeneralHeader() {
    // ---------- Elevation shadow on scroll ----------
    const header = document.getElementById('siteHeader');
    if (header) {
      window.addEventListener('scroll', () => {
        header.setAttribute('data-elevated', String(window.scrollY > 4));
      }, { passive: true });
    }

    // ---------- Products dropdown (desktop) ----------
    const productsBtn = document.getElementById('productsMenuBtn');
    const productsMenu = document.getElementById('productsMenu');

    if (productsBtn && productsMenu) {
      function toggleProductsMenu(open) {
        productsMenu.setAttribute('data-open', String(open));
        productsBtn.setAttribute('aria-expanded', String(open));
      }
      productsBtn.addEventListener('click', () => {
        toggleProductsMenu(productsMenu.getAttribute('data-open') !== 'true');
      });
    }

    // ---------- Search trigger (desktop) ----------
    const searchTrigger = document.getElementById('searchTrigger');
    const searchPanel = document.getElementById('searchPanel');
    const searchInput = document.getElementById('searchInput');

    if (searchTrigger && searchPanel && searchInput) {
      function toggleSearch(open) {
        searchPanel.setAttribute('data-open', String(open));
        searchTrigger.setAttribute('aria-expanded', String(open));
        if (open) setTimeout(() => searchInput.focus(), 150);
      }
      searchTrigger.addEventListener('click', () => {
        toggleSearch(searchPanel.getAttribute('data-open') !== 'true');
      });
    }

    // Close either desktop panel on outside click / Escape
    document.addEventListener('click', (e) => {
      if (productsBtn && productsMenu) {
        if (!e.target.closest('#productsMenuBtn') && !e.target.closest('#productsMenu')) {
          productsMenu.setAttribute('data-open', 'false');
          productsBtn.setAttribute('aria-expanded', 'false');
        }
      }
      if (searchTrigger && searchPanel) {
        if (!e.target.closest('#searchTrigger') && !e.target.closest('#searchPanel')) {
          searchPanel.setAttribute('data-open', 'false');
          searchTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (productsMenu) productsMenu.setAttribute('data-open', 'false');
        if (productsBtn) productsBtn.setAttribute('aria-expanded', 'false');
        if (searchPanel) searchPanel.setAttribute('data-open', 'false');
        if (searchTrigger) searchTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    // ---------- Mobile drawer ----------
    const openBtn = document.getElementById('openMobileDrawer');
    const closeBtn = document.getElementById('closeMobileDrawer');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileOverlay');

    if (openBtn && closeBtn && drawer && overlay) {
      function openDrawer() {
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
        overlay.setAttribute('data-open', 'true');
        openBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
      function closeDrawer() {
        drawer.classList.remove('translate-x-0');
        drawer.classList.add('translate-x-full');
        overlay.setAttribute('data-open', 'false');
        openBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      openBtn.addEventListener('click', openDrawer);
      closeBtn.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
    }

    // ---------- Mobile "المنتجات" accordion ----------
    document.querySelectorAll('.acc-item').forEach((item) => {
      const trigger = item.querySelector('.acc-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isOpen = item.getAttribute('data-open') === 'true';
          item.setAttribute('data-open', String(!isOpen));
          trigger.setAttribute('aria-expanded', String(!isOpen));
        });
      }
    });
  }