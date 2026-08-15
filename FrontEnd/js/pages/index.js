// Header Scroll Interaction
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Interactive Style Selector (Desktop only)
const styleCards = document.querySelectorAll(".style-card");

if (window.innerWidth >= 768) {
  // md breakpoint
  styleCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      styleCards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("expanded");
          c.classList.add("collapsed");
        }
      });
      card.classList.remove("collapsed");
      card.classList.add("expanded");
    });

    card.addEventListener("mouseleave", () => {
      styleCards.forEach((c) => {
        c.classList.remove("expanded", "collapsed");
      });
    });
  });
}