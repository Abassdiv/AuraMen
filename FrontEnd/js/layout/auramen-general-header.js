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
      // Open menu on hover
      productsBtn.addEventListener('mouseenter', () => {
        toggleProductsMenu(true);
      });
      // Close menu when leaving the button or menu
      productsBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!productsMenu.matches(':hover')) {
            toggleProductsMenu(false);
          }
        }, 100);
      });
      productsMenu.addEventListener('mouseleave', () => {
        toggleProductsMenu(false);
      });
    }

    // ---------- Search trigger (desktop) ----------
    // Note: Search functionality is now handled by searchToggleBtn.js
    // The search panel is removed and replaced with modal search

    // Close desktop panel on outside click / Escape
    document.addEventListener('click', (e) => {
      if (productsBtn && productsMenu) {
        if (!e.target.closest('#productsMenuBtn') && !e.target.closest('#productsMenu')) {
          productsMenu.setAttribute('data-open', 'false');
          productsBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (productsBtn && productsMenu) {
          productsMenu.setAttribute('data-open', 'false');
          productsBtn.setAttribute('aria-expanded', 'false');
        }
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
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach((item) => {
      const trigger = item.querySelector('.acc-trigger');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default behavior
          e.stopPropagation(); // Stop event bubbling
          const isOpen = item.classList.contains('open');
          const newState = !isOpen;
          // Toggle class
          if (newState) {
            item.classList.add('open');
          } else {
            item.classList.remove('open');
          }
          // Also update data-open for CSS compatibility
          item.dataset.open = newState.toString();
          trigger.setAttribute('aria-expanded', newState.toString());
        });
      }
    });
  }