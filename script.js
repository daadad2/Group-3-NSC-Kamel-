const music = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');
music.volume = 0.25;

toggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = '🔊';
  } else {
    music.pause();
    toggleBtn.textContent = '🔇';
  }
});

// Scroll animation for gem images
const images = document.querySelectorAll('.gem-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

images.forEach(img => observer.observe(img));