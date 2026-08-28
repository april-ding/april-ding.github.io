(function () {
  var STORAGE_KEY = 'april-v1-unlocked';
  var PASSWORD_HASH =
    '776af9401679287d8d332e26e99062919d58a135f4ef5ba85d4ec981b50f58ae';

  function unlock() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}
  }

  function isUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function hashPassword(password) {
    if (!window.crypto || !window.crypto.subtle) {
      return Promise.resolve(null);
    }

    return window.crypto.subtle
      .digest('SHA-256', new TextEncoder().encode(password))
      .then(function (buffer) {
        return Array.from(new Uint8Array(buffer))
          .map(function (byte) {
            return byte.toString(16).padStart(2, '0');
          })
          .join('');
      });
  }

  function showGate() {
    document.documentElement.classList.add('archive-locked');
    document.documentElement.style.visibility = 'hidden';

    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500&display=swap';
    document.head.appendChild(fontLink);

    var style = document.createElement('style');
    style.textContent = [
      'html.archive-locked > body > nav{visibility:hidden!important;pointer-events:none}',
      '#archive-gate{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;background:#e7ebea;visibility:visible;font-family:Inter,system-ui,sans-serif;color:#171717;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',
      '#archive-gate *{box-sizing:border-box}',
      '#archive-gate a,#archive-gate button{font-family:inherit}',
      '#archive-gate-header{border-bottom:1px solid #e5e5e5;background:rgba(231,235,234,0.95);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}',
      '#archive-gate-header.is-open{background:linear-gradient(to bottom,#e7ebea,#f5f8fc)}',
      '#archive-gate-bar{display:flex;align-items:center;justify-content:space-between;padding:16px}',
      '#archive-gate-bar a.name{font-family:Inter,system-ui,sans-serif!important;font-size:14px;font-weight:400;letter-spacing:-0.025em;line-height:1.25rem;color:#171717;text-decoration:none}',
      '#archive-gate-toggle{margin-left:auto;border:0;background:transparent;padding:0;font-family:"Cormorant Garamond","EB Garamond",Georgia,serif!important;font-size:16px;font-weight:400;letter-spacing:0.025em;line-height:1.5rem;color:#525252;cursor:pointer}',
      '#archive-gate-toggle:hover{color:#171717}',
      '#archive-gate-menu{display:grid;grid-template-rows:0fr;transition:grid-template-rows 0.3s ease-out}',
      '#archive-gate-header.is-open #archive-gate-menu{grid-template-rows:1fr}',
      '#archive-gate-menu-inner{overflow:hidden;min-height:0}',
      '#archive-gate-links{display:flex;flex-direction:column;gap:16px;padding:4px 16px 24px;margin:0;position:static;top:auto;left:auto;width:auto;height:auto;z-index:auto}',
      '#archive-gate-links a{font-family:Inter,system-ui,sans-serif!important;font-size:14px;font-weight:400;letter-spacing:0.025em;line-height:1.25rem;color:#737373;text-decoration:none;transition:color 0.15s ease}',
      '#archive-gate-links a:hover{color:#171717}',
      '#archive-gate-links a.is-active{color:#171717}',
      '#archive-gate-links a.is-active:before{content:"→";display:inline-block;margin-right:6px}',
      '#archive-gate-body{flex:1;display:flex;align-items:center;justify-content:center;padding:24px 16px}',
      '#archive-gate form{display:flex;flex-direction:column;gap:12px;width:min(280px,80vw);font-family:Inter,system-ui,sans-serif}',
      '#archive-gate label{font-size:14px;letter-spacing:0.025em;color:#222}',
      '#archive-gate input{border:0;border-bottom:1px solid #222;background:transparent;padding:8px 0;font:inherit;font-size:16px;outline:none;color:#222;border-radius:0;-webkit-appearance:none;appearance:none}',
      '#archive-gate button[type=submit]{align-self:flex-start;margin-top:8px;border:1px solid #222;background:transparent;color:#222;-webkit-appearance:none;appearance:none;padding:8px 16px;font:inherit;font-size:13px;letter-spacing:0.025em;cursor:pointer}',
      '@media (hover: hover){#archive-gate button[type=submit]:hover{background:#222;color:#f5f5f5}}',
      '#archive-gate .error{min-height:1.2em;font-size:12px;color:#a33}',
    ].join('');
    document.head.appendChild(style);

    function mount() {
      var gate = document.createElement('div');
      gate.id = 'archive-gate';
      gate.innerHTML =
        '<header id="archive-gate-header">' +
        '<div id="archive-gate-bar">' +
        '<a class="name" href="/">April Ding</a>' +
        '<button type="button" id="archive-gate-toggle" aria-expanded="false" aria-controls="archive-gate-menu">Menu</button>' +
        '</div>' +
        '<div id="archive-gate-menu">' +
        '<div id="archive-gate-menu-inner">' +
        '<div id="archive-gate-links" role="navigation">' +
        '<a href="/">Light</a>' +
        '<a href="/love">Love</a>' +
        '<a href="/about">About</a>' +
        '<a class="is-active" href="/v1/" aria-current="page">Archive</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<div id="archive-gate-body">' +
        '<form>' +
        '<label for="archive-password">Password</label>' +
        '<input id="archive-password" type="password" autocomplete="current-password" autofocus />' +
        '<div class="error" aria-live="polite"></div>' +
        '<button type="submit">Enter</button>' +
        '</form>' +
        '</div>';
      document.body.appendChild(gate);
      document.documentElement.style.visibility = '';

      var header = gate.querySelector('#archive-gate-header');
      var toggle = gate.querySelector('#archive-gate-toggle');
      var form = gate.querySelector('form');
      var input = gate.querySelector('input');
      var error = gate.querySelector('.error');

      toggle.addEventListener('click', function () {
        var isOpen = header.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.textContent = isOpen ? 'Close' : 'Menu';
      });

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var value = input.value.trim();

        hashPassword(value).then(function (hash) {
          if (hash !== PASSWORD_HASH) {
            error.textContent = 'Incorrect password';
            input.select();
            return;
          }

          unlock();
          document.documentElement.classList.remove('archive-locked');
          gate.remove();
          style.remove();
          fontLink.remove();
        });
      });
    }

    if (document.body) {
      mount();
    } else {
      document.addEventListener('DOMContentLoaded', mount);
    }
  }

  if (isUnlocked()) {
    return;
  }

  showGate();
})();
