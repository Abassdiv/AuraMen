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
      }
    })
    .catch(error => console.error('Error loading footer:', error));
});