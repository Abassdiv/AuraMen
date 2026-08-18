import { initScrollHeader } from './layout/auramen-landing-transparent-scroll-header.js';
import { initFooterAccordion } from './layout/auramen-footer.js';
import './pages/index.js';
// Load external HTML components using fetch
document.addEventListener('DOMContentLoaded', () => {
  // Load header
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

  // Load footer
  fetch('FrontEnd/components/layout/auramen-footer.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const footerContent = doc.querySelector('footer').outerHTML;

      const footerContainer = document.getElementById('footer-placeholder');
      if (footerContainer) {
        footerContainer.outerHTML = footerContent;
        // Initialize footer accordion after footer is loaded
        initFooterAccordion();
      }
    })
    .catch(error => console.error('Error loading footer:', error));
});