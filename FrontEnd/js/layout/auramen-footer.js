export function initFooterAccordion() {
    const items = document.querySelectorAll('.acc-item');
    items.forEach((item) => {
      const trigger = item.querySelector('.acc-trigger');
      trigger.addEventListener('click', () => {
        const isOpen = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', String(!isOpen));
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    });
}