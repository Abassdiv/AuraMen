document.addEventListener('DOMContentLoaded', () => {
  fetch('FrontEnd/components/layout/auramen-landing-transparent-scroll-header.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headerContent = doc.querySelector('header').outerHTML;

      const headerContainer = document.getElementById('header');
      if (headerContainer) {
        headerContainer.outerHTML = headerContent;

        // Initialize scroll header after header is loaded
        initScrollHeader();
      }
    })
    .catch(error => console.error('Error loading header:', error));
});

// VANILLA JS: scroll-based transparent → white transition
function initScrollHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const SCROLL_THRESHOLD = 60; // px — small scroll distance before switching

    function updateHeaderState() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      const isCurrentlyScrolled = header.getAttribute('data-scrolled') === 'true';
      if (scrolled !== isCurrentlyScrolled) {
        header.setAttribute('data-scrolled', String(scrolled));
      }
    }

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState(); // set correct state on load (e.g. if page is reloaded mid-scroll)
}