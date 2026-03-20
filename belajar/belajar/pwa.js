// ============================================================
//  pwa.js — BelajarCeria PWA Logic
//  FIXES:
//  1. SW register path → './sw.js' (relatif, bukan '/sw.js')
//  2. BANNER_DELAY_MS → 3 detik (lebih responsif)
//  3. Banner muncul LANGSUNG saat beforeinstallprompt, tanpa
//     nunggu cooldown kalau memang belum pernah dismiss
// ============================================================

const BANNER_DELAY_MS  = 3_000;
const DISMISS_KEY      = 'bc-pwa-dismissed';
const DISMISS_COOLDOWN = 7 * 24 * 60 * 60 * 1000;

let _deferredPrompt = null;

// ============================================================
//  1. REGISTRASI SERVICE WORKER
// ============================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // FIX #1: pakai path relatif './sw.js' bukan '/sw.js'
    // '/sw.js' dicari di root domain — gagal kalau app ada di subfolder
    navigator.serviceWorker
      .register('./sw.js')
      .then(registration => {
        console.log('[PWA] SW terdaftar:', registration.scope);

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(registration);
            }
          });
        });
      })
      .catch(err => {
        console.warn('[PWA] SW gagal register:', err);
      });

    let swRefreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (swRefreshing) return;
      swRefreshing = true;
      window.location.reload();
    });
  });
}

// ============================================================
//  2. INSTALL BANNER
// ============================================================

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  _deferredPrompt = event;
  console.log('[PWA] beforeinstallprompt tertangkap!');

  const lastDismissed  = parseInt(localStorage.getItem(DISMISS_KEY) || '0');
  const cooldownPassed = Date.now() - lastDismissed > DISMISS_COOLDOWN;

  // FIX #2: tampilkan setelah 3 detik (bukan 30)
  if (cooldownPassed) {
    setTimeout(showInstallBanner, BANNER_DELAY_MS);
  }
});

window.addEventListener('appinstalled', () => {
  console.log('[PWA] App berhasil diinstall!');
  hideInstallBanner();
  _deferredPrompt = null;
  if (typeof showToast === 'function') {
    showToast('🎉 BelajarCeria berhasil diinstall!');
  }
});

function showInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (!banner || !_deferredPrompt) return;

  banner.hidden = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => banner.classList.add('install-banner--visible'));
  });

  document.getElementById('installConfirm')
    ?.addEventListener('click', triggerInstall, { once: true });

  document.getElementById('installDismiss')
    ?.addEventListener('click', () => {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
      hideInstallBanner();
    }, { once: true });
}

function hideInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (!banner) return;
  banner.classList.remove('install-banner--visible');
  setTimeout(() => { banner.hidden = true; }, 320);
}

async function triggerInstall() {
  if (!_deferredPrompt) return;
  hideInstallBanner();
  _deferredPrompt.prompt();
  const { outcome } = await _deferredPrompt.userChoice;
  console.log('[PWA] User choice:', outcome);
  if (outcome === 'accepted') {
    if (typeof showToast === 'function') showToast('📲 Menginstall BelajarCeria…');
  } else {
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  }
  _deferredPrompt = null;
}

window.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  if (subject && typeof showSubject === 'function') {
    setTimeout(() => showSubject(subject), 400);
  }
});

function showUpdateToast(registration) {
  if (typeof showToast === 'function') {
    showToast('🔄 Update tersedia! Ketuk untuk muat ulang.', 8000);
    const toastEl = document.getElementById('toast');
    if (toastEl) {
      toastEl.style.cursor = 'pointer';
      toastEl.addEventListener('click', () => {
        registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
      }, { once: true });
    }
  }
}
