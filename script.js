// Scroll Animation for Gem Images
window.addEventListener('scroll', () => {
  const gems = document.querySelectorAll('.gem-image');

  gems.forEach(gem => {
    const rect = gem.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      gem.classList.add('show');
    }
  });
});
