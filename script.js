/* ══════════════════════════════════════════════
   BARBEARIA PREMIER — script.js
══════════════════════════════════════════════ */

// ── Navbar scroll ──────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Menu mobile ────────────────────────────────
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobClose     = document.getElementById('mobClose');

function openMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobClose.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);

// Fecha ao clicar em link do menu mobile
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ── Scroll reveal ──────────────────────────────
const animElements = document.querySelectorAll('[data-anim]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

animElements.forEach(el => observer.observe(el));

// ── Smooth scroll para links internos ──────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});