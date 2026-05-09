// ====================================================================
// REGION SWITCHER + BIGCOMMERCE PLACEHOLDERS
// --------------------------------------------------------------------
// Edit REGIONS[] to add/remove/edit countries. Each entry renders in
// BOTH the desktop popover and the mobile drawer.
// CURRENT_REGION sets which one is highlighted on this build.
// ====================================================================

const REGIONS = [
  { code: 'US', country: 'United States',  lang: 'English',  langCode: 'EN', currency: 'USD', url: '#' },
  { code: 'SG', country: 'Singapore',      lang: 'English',  langCode: 'EN', currency: 'SGD', url: '#' },
  { code: 'UK', country: 'United Kingdom', lang: 'English',  langCode: 'EN', currency: 'GBP', url: '#' },
  { code: 'FR', country: 'France',         lang: 'Français', langCode: 'FR', currency: 'EUR', url: '#' },
  { code: 'DE', country: 'Deutschland',    lang: 'Deutsch',  langCode: 'DE', currency: 'EUR', url: '#' },
];

const CURRENT_REGION = 'US';

(function regionSwitcher() {
  const trigger    = document.getElementById('region-trigger');
  const popover    = document.getElementById('region-popover');
  const list       = document.getElementById('region-list');
  const mobileList = document.getElementById('m-region-list');
  if (!trigger || !popover || !list) return;

  function itemHTML(r) {
    const cur  = r.code === CURRENT_REGION ? ' is-current' : '';
    const aria = r.code === CURRENT_REGION ? ' aria-current="true"' : '';
    return `<li><a class="region-item${cur}" href="${r.url}" data-region="${r.code}"${aria}>
      <span class="ri-code">${r.code}</span>
      <span class="ri-meta">
        <span class="ri-name">${r.country}</span>
        <span class="ri-sub">${r.lang} · ${r.currency}</span>
      </span>
    </a></li>`;
  }

  const html = REGIONS.map(itemHTML).join('');
  list.innerHTML = html;
  if (mobileList) mobileList.innerHTML = html;

  const cur    = REGIONS.find(r => r.code === CURRENT_REGION) || REGIONS[0];
  const codeEl = trigger.querySelector('[data-region-code]');
  const langEl = trigger.querySelector('[data-region-lang]');
  if (codeEl) codeEl.textContent = cur.code;
  if (langEl) langEl.textContent = cur.langCode;

  function open()  { popover.classList.add('open');    trigger.setAttribute('aria-expanded', 'true');  }
  function close() { popover.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.contains('open') ? close() : open();
  });
  popover.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => close());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// ====================================================================
// BIGCOMMERCE STUBS — replace with Stencil cart/added subscription etc.
// ====================================================================
window.setAccountName = function (name) {
  document.querySelectorAll('[data-bc-account-name]').forEach(el => {
    el.textContent = name || 'Sign in';
  });
};
window.updateCartCount = function (n) {
  const count = Number(n) || 0;
  document.querySelectorAll('[data-bc-cart-count]').forEach(el => {
    el.textContent = count;
    el.dataset.empty = count === 0 ? 'true' : 'false';
  });
};
