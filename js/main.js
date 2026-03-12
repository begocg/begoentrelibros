// ============================================
// BEGO GONZÁLEZ — AUTORA · SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- SLIDER DE RESEÑAS ---
  const slider = document.getElementById('slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('dots');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let current = 0;
  let autoTimer;

  // Crear dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Reseña ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateSlider() {
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dotsContainer.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    updateSlider();
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  updateSlider();
  resetAuto();

  // --- LIBRO CARD — teclado ---
  const libroCard = document.querySelector('.libro-card');
  if (libroCard) {
    libroCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = 'libro/index.html';
      }
    });
  }

});
