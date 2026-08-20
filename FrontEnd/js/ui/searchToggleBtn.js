export function initSearchModal() {
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchInput = document.getElementById('searchInput');

  if (!searchToggleBtn || !searchModal || !searchBackdrop || !closeSearchBtn || !searchInput) {
    console.error('Search modal elements not found');
    return;
  }

  function openSearchModal() {
    searchModal.classList.remove('hidden');
    // Trigger reflow
    void searchModal.offsetWidth;
    searchModal.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
    setTimeout(() => {
      searchModal.classList.add('hidden');
      searchInput.value = '';
    }, 300);
    document.body.style.overflow = '';
  }

  searchToggleBtn.addEventListener('click', openSearchModal);
  closeSearchBtn.addEventListener('click', closeSearchModal);
  searchBackdrop.addEventListener('click', closeSearchModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearchModal();
    }
  });

  // Prevent body scroll when modal is open
  searchModal.addEventListener('touchmove', (e) => {
    if (searchModal.classList.contains('active')) {
      e.preventDefault();
    }
  }, { passive: false });
}