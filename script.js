// Interactive features for Satyaveer Raj's portfolio
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');
const certHint = document.getElementById('certHint');

document.getElementById('year').textContent = new Date().getFullYear();

// Theme switcher. Preference is saved locally in the browser.
const savedTheme = localStorage.getItem('satya-portfolio-theme');
if (savedTheme === 'light') body.classList.add('light-theme');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  localStorage.setItem('satya-portfolio-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeIcon();
});
function updateThemeIcon() {
  themeToggle.querySelector('.theme-icon').textContent = body.classList.contains('light-theme') ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', body.classList.contains('light-theme') ? 'Switch to dark theme' : 'Switch to light theme');
}

// Mobile navigation
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Reveal elements as they enter the viewport.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Certificate cards are intentionally placeholders until real PDFs are added.
const certificateMessages = {
  web: 'Web Development: add a verified PDF to a certificates/ folder, then link it from this card in index.html.',
  python: 'Python Programming: add your real course provider, completion date, and certificate PDF before publishing.',
  other: 'AI / Cyber Security: you can split these into separate cards once you have verified certificates to showcase.'
};
document.querySelectorAll('[data-cert]').forEach(button => {
  button.addEventListener('click', () => {
    certHint.textContent = certificateMessages[button.dataset.cert];
  });
});

// Small keyboard-friendly toast helper for future interactions.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

// A gentle cursor glow on devices that have a fine pointer.
const glow = document.querySelector('.cursor-glow');
if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', event => {
    glow.style.left = `${event.clientX - 140}px`;
    glow.style.top = `${event.clientY - 140}px`;
  }, { passive: true });
} else {
  glow.remove();
}

// Make the placeholder email obvious if clicked before customization.
document.getElementById('emailLink').addEventListener('click', event => {
  if (event.currentTarget.getAttribute('href') === 'mailto:your.email@example.com') {
    event.preventDefault();
    showToast('Replace your.email@example.com with your real email in index.html.');
  }
});
