// Interactive Style Selector (Desktop only)
document.addEventListener('DOMContentLoaded', () => {
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
});