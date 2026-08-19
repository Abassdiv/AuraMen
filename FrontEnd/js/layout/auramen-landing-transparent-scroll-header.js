// VANILLA JS: scroll-based transparent → white transition
export function initScrollHeader() {
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