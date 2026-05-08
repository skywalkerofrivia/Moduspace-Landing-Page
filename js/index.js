// ---- Mobile nav ----
(function () {
  const nav    = document.getElementById('mobileNav');
  const burger = document.querySelector('.nav-burger');
  if (!nav || !burger) return;
  const close  = nav.querySelector('.mobile-nav-close');
  const scrim  = nav.querySelector('.mobile-nav-scrim');
  function open()  { nav.classList.add('open');    nav.setAttribute('aria-hidden', 'false'); burger.setAttribute('aria-expanded', 'true');  document.body.classList.add('nav-locked'); }
  function shut()  { nav.classList.remove('open'); nav.setAttribute('aria-hidden', 'true');  burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-locked'); }
  burger.addEventListener('click', open);
  close.addEventListener('click', shut);
  scrim.addEventListener('click', shut);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) shut(); });
})();

// ---- FAQ accordion ----
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ---- YouTube click-to-play ----
(function() {
  const vw = document.getElementById('video-wrap');
  if (!vw) return;
  vw.addEventListener('click', () => {
    if (vw.classList.contains('playing')) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/CERnsE9nlfQ?rel=0&autoplay=1&start=960';
    iframe.title = "Adam Savage's Tested recommends Moducases";
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    vw.appendChild(iframe);
    vw.classList.add('playing');
  });
})();

// ---- Gallery scroll reveal ----
(function() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = [...entry.target.parentElement.querySelectorAll('.g-item')];
      const idx = items.indexOf(entry.target);
      entry.target.style.transitionDelay = (idx * 90) + 'ms';
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.g-item').forEach(el => io.observe(el));
})();

// ---- Testimonials carousel ----
(function() {
  const track = document.getElementById('testi-track');
  if (!track) return;
  const cards = [...track.querySelectorAll('.testi-card')];
  const prev = document.getElementById('testi-prev');
  const next = document.getElementById('testi-next');
  const dotsWrap = document.getElementById('testi-dots');

  let index = 0, perView = 3, autoplay = null;

  function calcPerView() {
    const w = window.innerWidth;
    perView = w <= 640 ? 1 : w <= 1024 ? 2 : 3;
  }

  function maxIndex() { return Math.max(0, cards.length - perView); }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const pages = maxIndex() + 1;
    for (let i = 0; i < pages; i++) {
      const b = document.createElement('button');
      b.className = 'testi-dot' + (i === index ? ' active' : '');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', () => { index = i; render(); restart(); });
      dotsWrap.appendChild(b);
    }
  }

  function render() {
    index = Math.min(Math.max(0, index), maxIndex());
    const cardW = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * (cardW + 24)}px)`;
    [...dotsWrap.children].forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function step(dir) {
    index = (index + dir + (maxIndex() + 1)) % (maxIndex() + 1);
    render();
  }

  function restart() {
    if (autoplay) clearInterval(autoplay);
    autoplay = setInterval(() => step(1), 6000);
  }

  prev.addEventListener('click', () => { step(-1); restart(); });
  next.addEventListener('click', () => { step(1); restart(); });

  const section = document.getElementById('testimonials');
  section.addEventListener('mouseenter', () => autoplay && clearInterval(autoplay));
  section.addEventListener('mouseleave', restart);

  // Swipe support
  let startX = 0, dragging = false;
  track.addEventListener('pointerdown', e => { dragging = true; startX = e.clientX; track.style.transition = 'none'; track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', e => { if (!dragging) return; });
  track.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false; track.style.transition = '';
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
    restart();
  });

  calcPerView(); buildDots(); render(); restart();
  window.addEventListener('resize', () => { calcPerView(); buildDots(); render(); });
})();
