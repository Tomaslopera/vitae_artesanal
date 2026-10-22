(() => {
  'use strict';
  // Intenta cargar las fotos reales de la marca. Si faltan, conserva las ilustraciones incluidas.
  document.querySelectorAll('img[data-photo]').forEach((image) => {
    const photoPath = image.dataset.photo;
    const probe = new Image();
    probe.onload = () => {
      image.src = photoPath;
      image.closest('.photo-holder')?.classList.add('has-real-photo');
    };
    probe.onerror = () => {};
    probe.src = photoPath;
  });

  // Navegación de una sola página con rutas limpias, sin fragmentos #seccion.
  const routeBySection = {
    inicio: 'home', contenido: 'home', esencia: 'esencia', productos: 'productos',
    experiencias: 'experiencias', galeria: 'galeria', contacto: 'contacto'
  };
  const sectionByRoute = {
    home: 'inicio', esencia: 'esencia', productos: 'productos',
    experiencias: 'experiencias', galeria: 'galeria', contacto: 'contacto'
  };
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const lastPathPart = pathParts[pathParts.length - 1] || '';
  if (sectionByRoute[lastPathPart] || lastPathPart === 'index.html') pathParts.pop();
  else if (!window.location.pathname.endsWith('/')) pathParts.pop();
  const routeBase = `/${pathParts.length ? `${pathParts.join('/')}/` : ''}`;
  const routePath = (sectionId) => `${routeBase}${routeBySection[sectionId] || 'home'}`;
  const sectionFromPath = () => {
    const queryRoute = new URLSearchParams(window.location.search).get('seccion');
    return sectionByRoute[queryRoute] || sectionByRoute[window.location.pathname.split('/').filter(Boolean).pop()];
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const sectionId = link.getAttribute('href').slice(1);
    if (!routeBySection[sectionId]) return;
    link.dataset.routeSection = sectionId;
    link.href = routePath(sectionId);
    link.addEventListener('click', (event) => {
      event.preventDefault();
      history.pushState({section: sectionId}, '', routePath(sectionId));
      scrollToSection(sectionId);
    });
  });

  const initialSection = sectionFromPath() || (routeBySection[window.location.hash.slice(1)] ? window.location.hash.slice(1) : null);
  if (initialSection) {
    history.replaceState({section: initialSection}, '', routePath(initialSection));
    requestAnimationFrame(() => scrollToSection(initialSection));
  }
  window.addEventListener('popstate', (event) => {
    const sectionId = event.state?.section || sectionFromPath();
    if (sectionId) scrollToSection(sectionId);
    else window.scrollTo({top: 0, behavior: 'auto'});
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  function closeMenu() {
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('menu-open');
  }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav?.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });

  const blocks = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    blocks.forEach(b => b.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.06, rootMargin: '0px 0px 35px 0px'});
    blocks.forEach(b => observer.observe(b));
  }

  const dialog = document.querySelector('.lightbox');
  const largeImage = dialog?.querySelector('img');
  const lightboxCaption = dialog?.querySelector('.lightbox-caption');
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      const small = button.querySelector('img');
      if (!small || !dialog || !largeImage || !lightboxCaption) return;
      largeImage.src = small.currentSrc || small.src;
      largeImage.alt = small.alt;
      lightboxCaption.textContent = small.alt;
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialog?.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
