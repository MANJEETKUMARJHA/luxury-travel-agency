/* ─── Sticky Nav ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── Mobile Menu ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close mobile menu on outside click */
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMobile();
});

/* Swipe down to close mobile menu */
let touchStartY = 0;
mobileMenu.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
mobileMenu.addEventListener('touchend', (e) => {
  if (e.changedTouches[0].clientY - touchStartY > 60) closeMobile();
}, { passive: true });

/* ─── Scroll Animations (Intersection Observer) ─── */
const fadeElements = document.querySelectorAll(
  '.dest__card, .exp__card, .journey__card, .journal__card, .feature, .art-travel__text, .art-travel__image, .section__header'
);

fadeElements.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => observer.observe(el));

/* ─── Experience Slider ─── */
const expGrid = document.getElementById('expGrid');
const expCards = expGrid ? expGrid.querySelectorAll('.exp__card') : [];
let expOffset = 0;

function getExpVisible() {
  const w = window.innerWidth;
  if (w >= 1024) return 4;
  if (w >= 600) return 2;
  return 1;
}

function updateExpSlider() {
  if (!expGrid) return;
  const visible = getExpVisible();
  const maxOffset = Math.max(0, expCards.length - visible);
  expOffset = Math.min(expOffset, maxOffset);
  const pct = (100 / visible) * expOffset;
  expGrid.style.transform = `translateX(-${pct}%)`;
}

document.getElementById('expNext')?.addEventListener('click', () => {
  const visible = getExpVisible();
  const max = expCards.length - visible;
  expOffset = expOffset >= max ? 0 : expOffset + 1;
  updateExpSlider();
});

document.getElementById('expPrev')?.addEventListener('click', () => {
  const visible = getExpVisible();
  const max = expCards.length - visible;
  expOffset = expOffset <= 0 ? max : expOffset - 1;
  updateExpSlider();
});

// Set up grid for sliding
if (expGrid) {
  expGrid.style.transition = 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)';
  expGrid.style.willChange = 'transform';
}

window.addEventListener('resize', updateExpSlider);

/* ─── Hero Counter Animation ─── */
const counterItems = document.querySelectorAll('.hero__counter-item');
let currentSlide = 0;

setInterval(() => {
  counterItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % counterItems.length;
  counterItems[currentSlide].classList.add('active');
}, 4000);

/* ─── Smooth hero scroll indicator ─── */
const scrollIndicator = document.querySelector('.hero__scroll');
if (scrollIndicator) {
  scrollIndicator.style.cursor = 'pointer';
  scrollIndicator.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
}

/* ─── Contact Form ─── */
function handleSubmit(e) {
  e.preventDefault();
  showToast();
  e.target.reset();
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}

/* ─── Parallax hero on scroll ─── */
const heroBg = document.querySelector('.hero__bg img');
window.addEventListener('scroll', () => {
  if (!heroBg) return;
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    heroBg.style.transform = `scale(1.06) translateY(${scrolled * 0.18}px)`;
  }
}, { passive: true });

/* ─── Back to top ─── */
document.querySelector('.back-to-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Newsletter form ─── */
document.querySelector('.newsletter__form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast();
});

// Allow enter in newsletter input
document.querySelector('.newsletter__form input')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    showToast();
    e.target.value = '';
  }
});

/* ─── Destination card hover ripple ─── */
document.querySelectorAll('.dest__card').forEach(card => {
  card.addEventListener('click', () => {
    // Placeholder navigation
    console.log('Navigate to:', card.querySelector('h3')?.textContent);
  });
});
