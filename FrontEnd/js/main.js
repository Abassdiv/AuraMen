import { initScrollHeader } from "./layout/auramen-landing-transparent-scroll-header.js";
import { initFooterAccordion } from "./layout/auramen-footer.js";
import { initSearchModal } from "./ui/searchToggleBtn.js";
import { initAuramenHeader } from "./layout/auramen-header.js";
import { initGeneralHeader } from "./layout/auramen-general-header.js";
import "./pages/index.js";


// Get base path for GitHub Pages vs local development
const isGitHubPages = window.location.hostname.includes('github.io');
let basePath;

if (isGitHubPages) {
  basePath = '/AuraMen/FrontEnd/';
} else {
  basePath = '/FrontEnd/';
}

// Load general header using async/await
async function loadHeader() {
  try {
    const response = await fetch(basePath + "components/layout/auramen-general-header.html");
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Get header content
    const headerContent = doc.querySelector("header").outerHTML;
    const headerContainer = document.getElementById("general_header");
    if (headerContainer) {
      headerContainer.outerHTML = headerContent;
    }

    // Get mobile drawer and overlay content
    const mobileDrawer = doc.getElementById("mobileDrawer");
    const mobileOverlay = doc.getElementById("mobileOverlay");

    // Insert mobile drawer and overlay after header if they don't exist
    if (mobileDrawer && !document.getElementById("mobileDrawer")) {
      document.body.insertAdjacentHTML('beforeend', mobileDrawer.outerHTML);
    }
    if (mobileOverlay && !document.getElementById("mobileOverlay")) {
      document.body.insertAdjacentHTML('beforeend', mobileOverlay.outerHTML);
    }

    // Initialize general header functionality after loading
    initGeneralHeader();
  } catch (error) {
    console.error("Error loading general header:", error);
  }
}

// Load external HTML components using fetch
document.addEventListener("DOMContentLoaded", async () => {
  // Load general header first to avoid null errors
  await loadHeader();

  // Load header
  fetch(basePath + "components/layout/auramen-landing-transparent-scroll-header.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const headerContent = doc.querySelector("header").outerHTML;

      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.outerHTML = headerContent;
        // Initialize scroll header after header is loaded
        initScrollHeader();
        // Initialize search modal after header is loaded
        initSearchModal();
      }
    })
    .catch((error) => console.error("Error loading header:", error));

  // Load footer
  fetch(basePath + "components/layout/auramen-footer.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const footerContent = doc.querySelector("footer").outerHTML;

      const footerContainer = document.getElementById("footer-placeholder");
      if (footerContainer) {
        footerContainer.outerHTML = footerContent;
        // Initialize footer accordion after footer is loaded
        initFooterAccordion();
      }
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Load auramen header
  fetch(basePath + "components/layout/auramen-header.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const bodyContent = doc.body.innerHTML;

      const headerContainer = document.getElementById("header_placeholder");
      if (headerContainer) {
        headerContainer.outerHTML = bodyContent;
        initAuramenHeader();
      }
    })
    .catch((error) => console.error("Error loading auramen header:", error));
});
