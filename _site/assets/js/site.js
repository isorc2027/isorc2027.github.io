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
