// ============================================================
//  pwa.js — BelajarCeria PWA Logic
//  - Service Worker registration
//  - Install banner (beforeinstallprompt)
//  - SW update notification
//  TIDAK bergantung pada app.js — bisa berdiri sendiri.
// ============================================================

/* ── Konstanta ─────────────────────────────────────────────── */
const BANNER_DELAY_MS   = 30_000;   // tampilkan banner setelah 30 detik
const DISMISS_KEY       = 'bc-pwa-dismissed';  // localStorage key
const DISMISS_COOLDOWN  = 7 * 24 * 60 * 60 * 1000; // 7 hari dalam ms

let _deferredPrompt = null;   // menyimpan BeforeInstallPromptEvent

// ============================================================
//  1. REGISTRASI SERVICE WORKER
// ============================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log('[PWA] Service Worker terdaftar:', registration.scope);

        // ── Deteksi update SW ──────────────────────────────
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            // SW baru sudah siap dipakai, ada SW lama yang aktif
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              showUpdateToast(registration);
            }
          });
        });
      })
      .catch(err => {
        // SW gagal register — app tetap berjalan normal (graceful degradation)
        console.warn('[PWA] Registrasi Service Worker gagal:', err);
      });

    // Jika halaman reload setelah SW baru aktif, pastikan halaman fresh
    let swRefreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (swRefreshing) return;
      swRefreshing = true;
      window.location.reload();
    });
  });
}

// ============================================================
//  2. INSTALL BANNER — beforeinstallprompt
// ============================================================

window.addEventListener('beforeinstallprompt', event => {
  // Cegah prompt default browser
  event.preventDefault();
  _deferredPrompt = event;
  console.log('[PWA] beforeinstallprompt tertangkap — jadwalkan banner');

  // Cek apakah user sudah pernah dismiss dalam 7 hari terakhir
  const lastDismissed = parseInt(localStorage.getItem(DISMISS_KEY) || '0');
  const cooldownPassed = Date.now() - lastDismissed > DISMISS_COOLDOWN;

  if (cooldownPassed) {
    setTimeout(showInstallBanner, BANNER_DELAY_MS);
  }
});

// Jika user berhasil install dari luar banner — sembunyikan banner
window.addEventListener('appinstalled', () => {
  console.log('[PWA] Aplikasi berhasil diinstall!');
  hideInstallBanner();
  _deferredPrompt = null;
  // Opsional: tampilkan toast sukses (fungsi showToast dari app.js)
  if (typeof showToast === 'function') {
    showToast('🎉 BelajarCeria berhasil diinstall!');
  }
});

// ── Tampilkan banner ─────────────────────────────────────────
function showInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (!banner || !_deferredPrompt) return;

  banner.hidden = false;
  // Trigger animasi masuk (class ditambah setelah hidden=false agar transisi aktif)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => banner.classList.add('install-banner--visible'));
  });

  // Tombol Install
  document.getElementById('installConfirm')
    ?.addEventListener('click', triggerInstall, { once: true });

  // Tombol Nanti
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
  // Sembunyikan setelah transisi selesai (300 ms)
  setTimeout(() => { banner.hidden = true; }, 320);
}

// ── Trigger prompt install native ────────────────────────────
async function triggerInstall() {
  if (!_deferredPrompt) return;
  hideInstallBanner();

  _deferredPrompt.prompt();
  const { outcome } = await _deferredPrompt.userChoice;
  console.log('[PWA] User choice:', outcome);

  if (outcome === 'accepted') {
    if (typeof showToast === 'function') showToast('📲 Menginstall BelajarCeria…');
  } else {
    // User tolak prompt — simpan timestamp agar tidak muncul lagi 7 hari
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  }
  _deferredPrompt = null;
}

// ── Handle shortcut URL (?subject=xxx) dari manifest shortcuts ─
window.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  if (subject && typeof showSubject === 'function') {
    // Tunggu app.js selesai init dulu
    setTimeout(() => showSubject(subject), 400);
  }
});

// ============================================================
//  3. UPDATE TOAST — beri tahu user ada versi baru
// ============================================================

function showUpdateToast(registration) {
  // Gunakan toast kustom milik app.js jika tersedia
  if (typeof showToast === 'function') {
    showToast('🔄 Update tersedia! Ketuk untuk muat ulang.', 8000);
    // Pasang listener klik pada toast agar user bisa reload
    const toastEl = document.getElementById('toast');
    if (toastEl) {
      toastEl.style.cursor = 'pointer';
      toastEl.addEventListener('click', () => {
        // Kirim pesan ke SW baru agar segera aktif
        registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
      }, { once: true });
    }
  } else {
    // Fallback sederhana jika app.js belum load
    console.info('[PWA] Update tersedia — muat ulang untuk memperbarui.');
  }
}
