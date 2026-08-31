  // Simple mobile menu toggle logic
    document.addEventListener('DOMContentLoaded', () => {
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('close-menu-btn');
      const mobileNav = document.getElementById('mobile-nav');
      const overlay = document.getElementById('mobile-nav-overlay');

      function toggleMenu() {
        const isClosed = mobileNav.classList.contains('translate-x-full');
        if (isClosed) {
          mobileNav.classList.remove('translate-x-full');
          overlay.classList.remove('hidden');
        } else {
          mobileNav.classList.add('translate-x-full');
          overlay.classList.add('hidden');
        }
      }

      mobileBtn.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', toggleMenu);
    });