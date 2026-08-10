(function () {
  'use strict';

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-primary-nav]');

  if (!toggle || !nav) return;

  function closeNavigation() {
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('nav-open');
  }

  toggle.addEventListener('click', function () {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    document.documentElement.classList.toggle('nav-open', !isExpanded);
  });

  nav.addEventListener('click', function (event) {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeNavigation();
  });
})();

(function () {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slideshow__dots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;
  let timer;

  slides.forEach(function (_, i) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, 5000);
  }

  const prevBtn = document.querySelector('.slideshow__btn--prev');
  const nextBtn = document.querySelector('.slideshow__btn--next');
  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

  resetTimer();
})();
