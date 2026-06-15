// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ── SCROLL FADE IN ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.07 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = 'Sent ✓';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = 'Send message';
    btn.style.opacity = '';
  }, 3000);
}
