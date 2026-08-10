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
    document.documentElement.style.visibility = 'hidden';

    var style = document.createElement('style');
    style.textContent = [
      '#archive-gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#f5f5f5;font-family:Georgia,"Times New Roman",serif;visibility:visible}',
      '#archive-gate form{display:flex;flex-direction:column;gap:12px;width:min(280px,80vw)}',
      '#archive-gate label{font-size:14px;letter-spacing:0.04em;color:#222}',
      '#archive-gate input{border:0;border-bottom:1px solid #222;background:transparent;padding:8px 0;font:inherit;font-size:16px;outline:none}',
      '#archive-gate button{align-self:flex-start;margin-top:8px;border:1px solid #222;background:transparent;padding:8px 16px;font:inherit;font-size:13px;letter-spacing:0.04em;cursor:pointer}',
      '#archive-gate button:hover{background:#222;color:#f5f5f5}',
      '#archive-gate .error{min-height:1.2em;font-size:12px;color:#a33}',
    ].join('');
    document.head.appendChild(style);

    function mount() {
      var gate = document.createElement('div');
      gate.id = 'archive-gate';
      gate.innerHTML =
        '<form>' +
        '<label for="archive-password">Password</label>' +
        '<input id="archive-password" type="password" autocomplete="current-password" autofocus />' +
        '<div class="error" aria-live="polite"></div>' +
        '<button type="submit">Enter</button>' +
        '</form>';
      document.body.appendChild(gate);
      document.documentElement.style.visibility = '';

      var form = gate.querySelector('form');
      var input = gate.querySelector('input');
      var error = gate.querySelector('.error');

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
          gate.remove();
          style.remove();
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
