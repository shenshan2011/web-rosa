// ============================================================
//  app.js — BelajarCeria | Logika Utama Aplikasi
//  Fitur: SPA Navigation, Smart Quiz (Bantuan Pintar),
//         Progress Tracking (localStorage), Flashcard, Monitor
// ============================================================

/* ===== STATE ===== */
const STATE = (() => {
  const KEY = 'bc-v3';
  const defaults = {
    xp: 0, streak: 0, lastDate: '', name: '',
    read: {}, quizScores: {}, quizAttempts: {}, activity: [],
    tkaHistory: [],
  };
  let data = { ...defaults };
  try { data = { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch(_) {}

  return {
    get: () => data,
    save: () => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(_) {} },
    reset: () => { data = { ...defaults }; localStorage.removeItem(KEY); },
  };
})();

/* ===== RUNTIME ===== */
let currentSubject  = '';
let currentTopicId  = '';
let currentQuizzes  = [];
let currentFlashcards = [];
let quizIndex       = 0;
let quizScore       = 0;
let quizWrong       = 0;        // wrong answers in current quiz session
let questionAttempts = 0;       // attempts on current single question
let fcIndex         = 0;
let readTimerHandle = null;

// ============================================================
//  UTILITY FUNCTIONS
// ============================================================

const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

let _toastTimer = null;
function showToast(msg, duration = 3200) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.classList.remove('show'); _toastTimer = null; }, duration);
}

function addActivity(text, color = 'var(--primary)') {
  const s = STATE.get();
  const now = new Date();
  s.activity.unshift({
    text, color,
    time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    date: now.toLocaleDateString('id-ID'),
  });
  if (s.activity.length > 40) s.activity.pop();
  STATE.save();
}

function addXP(amount) {
  const s = STATE.get();
  s.xp = (s.xp || 0) + amount;
  STATE.save();

  const el = $('xpNum');
  if (el) {
    el.textContent = s.xp;
    const badge = el.closest('.nav-xp');
    badge.classList.add('xp-bump');
    setTimeout(() => badge.classList.remove('xp-bump'), 400);
  }

  // Floating "+N XP" animation
  const floater = document.createElement('div');
  floater.className   = 'xp-floater';
  floater.textContent = `+${amount} XP`;
  const nav = $('app-nav');
  if (nav) {
    nav.style.position = 'relative';
    nav.appendChild(floater);
    floater.addEventListener('animationend', () => floater.remove(), { once: true });
  }

  playSound('xp');
}

function updateStreak() {
  const s = STATE.get();
  const today = new Date().toDateString();
  if (s.lastDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  s.streak = s.lastDate === yesterday.toDateString() ? (s.streak || 0) + 1 : 1;
  s.lastDate = today;
  STATE.save();
}

// ============================================================
//  NAVIGATION (SPA)
// ============================================================

function showPage(pageId, pushHistory = true) {
  // Hide all pages
  $$('.page').forEach(p => p.classList.remove('active'));
  $$('.nav-btn').forEach(b => b.classList.remove('active'));

  const page = $('page-' + pageId);
  if (page) page.classList.add('active');

  const btn = $('btn-' + pageId);
  if (btn) btn.classList.add('active');

  // Stop reading tracker if navigating away from materi
  if (pageId !== 'materi' && readTimerHandle) {
    clearTimeout(readTimerHandle);
    readTimerHandle = null;
    $('readingTracker').style.display = 'none';
  }

  if (pageId === 'home')    updateHome();
  if (pageId === 'monitor') updateMonitor();

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showSubject(subject) {
  currentSubject = subject;
  const subjectInfo = { ipa: '🔬 IPA', bindo: '📚 B. Indonesia', mtk: '🔢 Matematika' };
  $('topicsTitle').textContent = subjectInfo[subject] || 'Pilih Materi';

  const list = $('topicList');
  list.innerHTML = '';

  const s = STATE.get();
  (TOPIC_LIST[subject] || []).forEach(topic => {
    const done    = !!s.read[topic.id];
    const score   = s.quizScores[topic.id];
    const status  = done ? 'done' : score !== undefined ? 'inprogress' : '';
    const badgeTxt = done ? '✅ Selesai' : score !== undefined ? `📝 ${score}%` : '📖 Mulai';
    const badgeCls = done ? 'done' : score !== undefined ? 'inprogress' : '';

    const div = document.createElement('div');
    div.className = `topic-item ${status}`;
    div.innerHTML = `
      <div class="topic-left">
        <div class="topic-icon">${topic.icon}</div>
        <div>
          <div class="topic-name">${topic.name}</div>
          <div class="topic-sub">${topic.sub}</div>
        </div>
      </div>
      <span class="topic-badge ${badgeCls}">${badgeTxt}</span>`;
    div.addEventListener('click', () => showMateri(topic.id));
    list.appendChild(div);
  });

  showPage('topics');
}

function showMateri(topicId) {
  currentTopicId   = topicId;
  const materi     = MATERI_CONTENT[topicId];
  if (!materi) return;

  currentQuizzes   = QUIZ_DATA[topicId] || [];
  currentFlashcards = materi.flashcards || [];

  $('materiTitle').textContent  = materi.title || 'Materi';
  $('materiContent').innerHTML  = materi.body  || '';

  $('quizBtn').style.display       = currentQuizzes.length    > 0 ? '' : 'none';
  $('flashcardBtn').style.display  = currentFlashcards.length > 0 ? '' : 'none';

  // Setup back navigation
  $('materiBackBtn').onclick = () => showSubject(currentSubject);
  $('quizBackBtn').onclick   = () => showMateri(currentTopicId);
  $('fcBackBtn').onclick     = () => showMateri(currentTopicId);
  $('scoreBackBtn').onclick  = () => showSubject(currentSubject);

  // Reading progress tracker (mark read after 8 seconds)
  // FIX: Selalu clear + null dulu sebelum buat timer baru → cegah timer ganda
  clearTimeout(readTimerHandle);
  readTimerHandle = null;

  const s = STATE.get();
  if (!s.read[topicId]) {
    const tracker = $('readingTracker');
    tracker.style.display = 'flex';
    readTimerHandle = setTimeout(() => {
      readTimerHandle = null;                          // bersihkan handle setelah selesai
      s.read[topicId] = new Date().toISOString();
      addActivity(`📖 Membaca: ${materi.title}`, 'var(--success)');
      addXP(10);
      updateStreak();
      showToast('📖 +10 XP! Materi selesai dibaca!');
      tracker.style.display = 'none';
      STATE.save();
      updateHome();
      checkBadges();
    }, 8000);
  } else {
    $('readingTracker').style.display = 'none';
  }

  showPage('materi');
}

// ============================================================
//  FLASHCARD
// ============================================================

function startFlashcard() {
  fcIndex = 0;
  renderFlashcard();
  showPage('flashcard');
}

function renderFlashcard() {
  const fc = currentFlashcards[fcIndex];
  if (!fc) return;
  $('fcFront').textContent  = fc.q;
  $('fcBack').textContent   = fc.a;
  $('fcCount').textContent  = `${fcIndex + 1} / ${currentFlashcards.length}`;
  $('flashcard').classList.remove('flipped');
}

function flipCard() {
  $('flashcard').classList.toggle('flipped');
}

function fcNav(dir) {
  fcIndex = (fcIndex + dir + currentFlashcards.length) % currentFlashcards.length;
  renderFlashcard();
}

// ============================================================
//  QUIZ ENGINE — with "Bantuan Pintar"
// ============================================================

function shuffleArray(arr) {
  // Fisher-Yates in-place shuffle — returns the same array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz() {
  quizIndex  = 0;
  quizScore  = 0;
  quizWrong  = 0;
  // Buat salinan array lalu acak agar data asli di QUIZ_DATA tidak berubah
  currentQuizzes = shuffleArray([...currentQuizzes]);
  renderQuestion();
  showPage('quiz');
}

function renderQuestion() {
  questionAttempts = 0;

  const q     = currentQuizzes[quizIndex];
  const total = currentQuizzes.length;
  const pct   = (quizIndex / total) * 100;

  $('qNum').textContent         = `${quizIndex + 1} / ${total}`;
  $('qProgress').style.width    = pct + '%';
  $('qScore').textContent       = `⭐ ${quizScore}`;
  $('quizBtnRow').innerHTML      = '';

  const card = $('quizCard');

  if (q.type === 'fill') {
    card.innerHTML = `
      <div class="quiz-type-badge">✏️ Isi Jawaban</div>
      <div class="quiz-question">${quizIndex + 1}. ${q.q}</div>
      <div class="attempt-dots" id="attemptDots">
        <div class="attempt-dot" id="dot0"></div>
        <div class="attempt-dot" id="dot1"></div>
      </div>
      <div class="quiz-fill-row">
        <input class="quiz-input" id="fillInput" placeholder="Ketik jawaban…"
               autocomplete="off" autocapitalize="off"
               onkeydown="if(event.key==='Enter')checkFill()">
        <button class="btn" onclick="checkFill()">Cek ✓</button>
      </div>
      <div class="hint-box" id="hintBox">${q.hint || ''}</div>
      <div class="explanation-box" id="explanationBox">${q.explanation || ''}</div>
      <div class="feedback-box" id="feedbackBox"></div>`;
    setTimeout(() => { const inp = $('fillInput'); if(inp) inp.focus(); }, 100);

  } else {
    // Multiple choice (default)
    card.innerHTML = `
      <div class="quiz-type-badge">🎯 Pilihan Ganda</div>
      <div class="quiz-question">${quizIndex + 1}. ${q.q}</div>
      <div class="attempt-dots" id="attemptDots">
        <div class="attempt-dot" id="dot0"></div>
        <div class="attempt-dot" id="dot1"></div>
      </div>
      <div class="quiz-options">
        ${(q.opts || []).map((o, i) => `
          <button class="quiz-option" id="opt${i}" onclick="checkMC(${i})">
            <div class="opt-letter">${'ABCD'[i]}</div>${o}
          </button>`).join('')}
      </div>
      <div class="hint-box" id="hintBox">${q.hint || ''}</div>
      <div class="explanation-box" id="explanationBox">${q.explanation || ''}</div>
      <div class="feedback-box" id="feedbackBox"></div>`;
  }
}

/* ---- Multiple Choice check ---- */
function checkMC(idx) {
  const q   = currentQuizzes[quizIndex];
  const correct = idx === q.ans;
  questionAttempts++;

  // Mark answer visually
  $$('.quiz-option').forEach(b => b.classList.add('disabled'));
  $(`opt${idx}`).classList.add(correct ? 'correct' : 'wrong');
  if (!correct) $(`opt${q.ans}`).classList.add('correct');

  handleAnswerResult(correct);
}

/* ---- Fill-in check ---- */
function checkFill() {
  const q   = currentQuizzes[quizIndex];
  const inp = $('fillInput');
  if (!inp || inp.disabled) return;

  const userAns = inp.value.trim().toLowerCase();
  const correct = q.ans && (
    userAns === q.ans.toLowerCase() ||
    userAns.includes(q.ans.toLowerCase()) ||
    q.ans.toLowerCase().includes(userAns)
  );
  questionAttempts++;

  handleAnswerResult(correct, inp);
}

/* ---- Core result handler — BANTUAN PINTAR ---- */
function handleAnswerResult(correct, fillInput = null) {
  const q        = currentQuizzes[quizIndex];
  const hintBox  = $('hintBox');
  const explBox  = $('explanationBox');
  const feedback = $('feedbackBox');
  const dot      = $(`dot${questionAttempts - 1}`);

  if (dot) dot.classList.add('used');

  if (correct) {
    // Correct!
    const xpGain = questionAttempts === 1 ? 5 : 2;
    addXP(xpGain);
    quizScore++;
    playSound('correct');

    feedback.className = 'feedback-box correct';
    feedback.innerHTML = `✅ Benar! ${questionAttempts === 1 ? '+5 XP 🎉' : '+2 XP'}`;
    feedback.style.display = 'block';

    if (fillInput) { fillInput.disabled = true; }
    $$('.quiz-option').forEach(b => b.classList.add('disabled'));

    $('quizBtnRow').innerHTML = `<button class="btn" onclick="nextQuestion()">Lanjut →</button>`;

  } else {
    // Wrong
    quizWrong++;
    playSound('wrong');

    if (questionAttempts === 1) {
      // First wrong → show HINT
      feedback.className = 'feedback-box wrong';
      feedback.innerHTML = '❌ Salah. Coba lagi! Lihat petunjuk di bawah.';
      feedback.style.display = 'block';

      if (hintBox) hintBox.style.display = 'flex';

      // Re-enable fill input for another try
      if (fillInput) {
        fillInput.value   = '';
        fillInput.disabled = false;
        setTimeout(() => fillInput.focus(), 50);
        feedback.innerHTML = '❌ Kurang tepat. Lihat petunjuk, lalu coba sekali lagi!';
      }

      // Re-enable MC options (reset wrong mark)
      $$('.quiz-option').forEach(b => {
        b.classList.remove('disabled', 'wrong');
      });

    } else {
      // Second wrong → show EXPLANATION + reveal answer
      if (hintBox) hintBox.style.display = 'flex';
      if (explBox) explBox.style.display = 'flex';

      feedback.className = 'feedback-box wrong';
      if (q.type === 'fill') {
        feedback.innerHTML = `❌ Jawaban yang benar: <strong>${q.ans}</strong>`;
        if (fillInput) fillInput.disabled = true;
      } else {
        feedback.innerHTML = `❌ Jawaban yang benar: <strong>${q.opts[q.ans]}</strong>`;
        $$('.quiz-option').forEach(b => b.classList.add('disabled'));
        $(`opt${q.ans}`)?.classList.add('correct');
      }
      feedback.style.display = 'block';

      $('quizBtnRow').innerHTML = `<button class="btn" onclick="nextQuestion()">Lanjut →</button>`;
    }
  }
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= currentQuizzes.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function retryQuiz() { startQuiz(); }

/* ---- Finish & score ---- */
function finishQuiz() {
  const total = currentQuizzes.length;
  const pct   = Math.round((quizScore / total) * 100);

  const s = STATE.get();
  // Keep best score
  if (s.quizScores[currentTopicId] === undefined || pct > s.quizScores[currentTopicId]) {
    s.quizScores[currentTopicId] = pct;
  }
  s.lastQuiz = { topicId: currentTopicId, pct, date: new Date().toISOString() };
  STATE.save();

  addActivity(`🎯 Quiz selesai: ${MATERI_CONTENT[currentTopicId]?.title || currentTopicId} — ${pct}%`,
    pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)');
  addXP(pct);
  checkBadges();

  $('finalScore').textContent = pct;

  let title, msg;
  if (pct >= 90)      { title = 'Luar Biasa! 🎉';  msg = `Sempurna! Kamu dapat +${pct} XP!`; }
  else if (pct >= 75) { title = 'Bagus Sekali! 👏'; msg = `Nilai bagus! Kamu dapat +${pct} XP!`; }
  else if (pct >= 60) { title = 'Lumayan! 💪';      msg = `Terus semangat! Kamu dapat +${pct} XP.`; }
  else                { title = 'Yuk Belajar Lagi! 📚'; msg = 'Pelajari materinya sekali lagi ya!'; }

  $('scoreTitle').textContent = title;
  $('scoreMsg').textContent   = msg;
  $('scoreDetail').innerHTML  = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div><div style="font-size:1.5rem;font-family:'Fredoka',cursive;color:var(--success)">${quizScore}/${total}</div>
           <div style="font-size:0.72rem;color:var(--muted);font-weight:700;text-transform:uppercase">Benar</div></div>
      <div><div style="font-size:1.5rem;font-family:'Fredoka',cursive;color:var(--danger)">${quizWrong}</div>
           <div style="font-size:0.72rem;color:var(--muted);font-weight:700;text-transform:uppercase">Salah</div></div>
    </div>`;

  showPage('score');
}

// ============================================================
//  HOME & PROGRESS UPDATE
// ============================================================

function updateHome() {
  const s    = STATE.get();
  const xp   = $('xpNum');
  if (xp) xp.textContent = s.xp || 0;

  $('statTopics')?.  setAttribute('data-val', Object.keys(s.read).length);
  $('statQuizzes')?.setAttribute('data-val', Object.keys(s.quizScores).length);
  $('statStreak')?.  setAttribute('data-val', s.streak || 0);

  animateCounter('statTopics',  Object.keys(s.read).length);
  animateCounter('statQuizzes', Object.keys(s.quizScores).length);
  animateCounter('statStreak',  s.streak || 0);

  // ── Dynamic hero ──
  const name  = (s.name || '').trim() || 'Pelajar';
  const hour  = new Date().getHours();
  let greeting, heroEmoji;
  if (hour >= 5 && hour < 12) {
    greeting  = `Selamat Pagi, ${name}! ☀️`;
    heroEmoji = '🌅';
  } else if (hour >= 12 && hour < 18) {
    greeting  = `Selamat Siang, ${name}! 🌤️`;
    heroEmoji = '🎓';
  } else {
    greeting  = `Selamat Malam, ${name}! 🌙`;
    heroEmoji = '🌙';
  }

  const currentXP = s.xp || 0;
  const subText   = currentXP === 0
    ? 'Yuk mulai belajar hari ini!'
    : currentXP < 100
      ? 'Semangat terus ya!'
      : 'Kamu luar biasa! 🏆';

  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.querySelector('.hero-emoji').textContent = heroEmoji;
    heroEl.querySelector('h1').textContent          = greeting;
    heroEl.querySelector('p').textContent           = subText;
  }

  // Progress bars
  ['ipa', 'bindo', 'mtk'].forEach(sub => {
    const total = (TOPIC_LIST[sub] || []).length;
    const done  = (TOPIC_LIST[sub] || []).filter(t => s.read[t.id]).length;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
    const bar   = $(`prog-${sub}`);
    if (bar) bar.style.width = pct + '%';
    const cnt   = $(`count-${sub}`);
    if (cnt) cnt.textContent = `${done}/${total}`;
  });

  checkBadges();
}

function animateCounter(id, target) {
  const el = $(id);
  if (!el) return;
  const duration = 600;
  const start    = parseInt(el.textContent) || 0;
  const step     = Math.ceil(Math.abs(target - start) / (duration / 16));
  let current    = start;
  const timer    = setInterval(() => {
    current += (target > current ? step : -step);
    if ((target > start && current >= target) || (target < start && current <= target)) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 16);
}

// ============================================================
//  BADGES
// ============================================================

const BADGE_CONDITIONS = [
  { id: 'reader',    check: s => Object.keys(s.read).length >= 1 },
  { id: 'scientist', check: s => TOPIC_LIST.ipa.filter(t => s.read[t.id]).length >= 3 },
  { id: 'writer',    check: s => TOPIC_LIST.bindo.filter(t => s.read[t.id]).length >= 3 },
  { id: 'mathlete',  check: s => TOPIC_LIST.mtk.filter(t => s.read[t.id]).length >= 3 },
  { id: 'streak',    check: s => (s.streak || 0) >= 3 },   // FIX: belajar 3 hari berturut
  { id: 'master',    check: s => Object.keys(s.read).length >= 10 },
];

function checkBadges() {
  const s = STATE.get();
  BADGE_CONDITIONS.forEach(({ id, check }) => {
    const el = $('badge-' + id);
    if (!el) return;
    if (check(s) && el.classList.contains('locked')) {
      el.classList.remove('locked');
      el.classList.add('earned');
      showToast(`🏆 Lencana baru: ${el.querySelector('.badge-name')?.textContent}!`);
      playSound('badge');
    }
  });
}

// ============================================================
//  MONITOR — Chart.js instances (module-level, agar bisa di-destroy)
// ============================================================

let _chartRadar = null;   // Radar chart instance
let _chartBar   = null;   // Bar chart instance

function updateMonitor() {
  const s = STATE.get();

  // ── 1. Radar Chart — Progress per mapel ────────────────────
  const subjectData = ['ipa', 'bindo', 'mtk'].map(sub => {
    const total = (TOPIC_LIST[sub] || []).length;
    const done  = (TOPIC_LIST[sub] || []).filter(t => s.read[t.id]).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  });

  // Update legend angka
  const pctIds = ['m-ipa-pct', 'm-bindo-pct', 'm-mtk-pct'];
  subjectData.forEach((pct, i) => {
    const el = $(pctIds[i]);
    if (el) el.textContent = pct + '%';
  });

  // Hancurkan instance lama agar tidak tumpuk
  if (_chartRadar) { _chartRadar.destroy(); _chartRadar = null; }

  const radarCtx = $('radarChart');
  if (radarCtx) {
    _chartRadar = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['IPA 🔬', 'B. Indonesia 📚', 'Matematika 🔢'],
        datasets: [{
          label: 'Progress (%)',
          data: subjectData,
          backgroundColor: 'rgba(99,102,241,0.12)',
          borderColor:     '#6366F1',
          borderWidth:     2.5,
          pointBackgroundColor: ['#10B981', '#3B82F6', '#EF4444'],
          pointBorderColor:    '#fff',
          pointBorderWidth:    2,
          pointRadius:         6,
          pointHoverRadius:    8,
        }],
      },
      options: {
        responsive:          true,
        maintainAspectRatio: true,
        animation:           { duration: 700, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.raw}% selesai`,
            },
          },
        },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: {
              stepSize:  25,
              font:      { family: 'Nunito', size: 10, weight: '700' },
              color:     '#94A3B8',
              backdropColor: 'transparent',
              callback:  v => v + '%',
            },
            pointLabels: {
              font:  { family: 'Nunito', size: 12, weight: '800' },
              color: '#1E293B',
            },
            grid:  { color: 'rgba(226,232,240,0.8)' },
            angleLines: { color: 'rgba(226,232,240,0.6)' },
          },
        },
      },
    });
  }

  // ── 2. Bar Chart — Nilai per topik ─────────────────────────
  const qh      = $('quizHistory');
  const entries = Object.entries(s.quizScores);

  // Hancurkan bar chart lama dulu
  if (_chartBar) { _chartBar.destroy(); _chartBar = null; }

  if (!qh) { /* elemen tidak ada, skip */ }
  else if (entries.length === 0) {
    qh.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🎯</span>Belum ada quiz yang dikerjakan
      </div>`;
  } else {
    // Susun data
    const labels     = [];
    const values     = [];
    const bgColors   = [];
    const borderColors = [];

    entries.forEach(([id, pct]) => {
      const topic  = findTopic(id);
      labels.push(topic ? `${topic.icon} ${topic.name}` : id);
      values.push(pct);
      if (pct >= 80) {
        bgColors.push('rgba(34,197,94,0.18)');
        borderColors.push('#22C55E');
      } else if (pct >= 60) {
        bgColors.push('rgba(245,158,11,0.18)');
        borderColors.push('#F59E0B');
      } else {
        bgColors.push('rgba(239,68,68,0.18)');
        borderColors.push('#EF4444');
      }
    });

    // Tinggi dinamis: min 200px, tambah 38px per entri
    const canvasHeight = Math.max(200, entries.length * 38 + 40);

    qh.innerHTML = `
      <div class="chart-card">
        <div class="chart-canvas-wrap" style="height:${canvasHeight}px">
          <canvas id="barChart" aria-label="Bar chart nilai quiz per topik"></canvas>
        </div>
      </div>`;

    const barCtx = $('barChart');
    if (barCtx) {
      _chartBar = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Nilai (%)',
            data:  values,
            backgroundColor: bgColors,
            borderColor:     borderColors,
            borderWidth:     2,
            borderRadius:    8,
            borderSkipped:   false,
          }],
        },
        options: {
          indexAxis:           'y',          // horizontal bar
          responsive:          true,
          maintainAspectRatio: false,        // ikuti tinggi wrapper
          animation:           { duration: 600, easing: 'easeOutQuart' },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` Nilai: ${ctx.raw}%`,
              },
            },
          },
          scales: {
            x: {
              min: 0, max: 100,
              grid:  { color: 'rgba(226,232,240,0.7)' },
              ticks: {
                font:     { family: 'Nunito', size: 11, weight: '700' },
                color:    '#94A3B8',
                callback: v => v + '%',
                maxTicksLimit: 6,
              },

            },
            y: {
              grid:  { display: false },
              ticks: {
                font:  { family: 'Nunito', size: 11, weight: '700' },
                color: '#1E293B',
              },
            },
          },
        },
        plugins: [{
          id: 'refLines',
          afterDatasetsDraw(chart) {
            const { ctx: c, chartArea: { top, bottom }, scales: { x } } = chart;
            if (!x) return;
            [[60, '#F59E0B'], [80, '#22C55E']].forEach(([val, color]) => {
              const xPos = x.getPixelForValue(val);
              c.save();
              c.setLineDash([4, 4]);
              c.strokeStyle = color;
              c.lineWidth = 1.5;
              c.beginPath();
              c.moveTo(xPos, top);
              c.lineTo(xPos, bottom);
              c.stroke();
              c.restore();
            });
          }
        }],
      });
    }
  }

  // ── 3. Activity log ─────────────────────────────────────────
  const al = $('activityLog');
  if (al) {
    if (!s.activity || s.activity.length === 0) {
      al.innerHTML = `<li><div class="empty-state" style="padding:20px 0">Belum ada aktivitas</div></li>`;
    } else {
      al.innerHTML = s.activity.slice(0, 20).map(a => `
        <li>
          <div class="activity-dot" style="background:${a.color}"></div>
          <div>
            <div style="font-weight:700;font-size:0.87rem">${a.text}</div>
            <div style="font-size:0.74rem;color:var(--muted)">${a.date} ${a.time}</div>
          </div>
        </li>`).join('');
    }
  }

  // ── 4. Read list ────────────────────────────────────────────
  const rl = $('readList');
  if (rl) {
    const readEntries = Object.entries(s.read);
    if (readEntries.length === 0) {
      rl.innerHTML = `<div class="empty-state"><span class="empty-state-icon">📖</span>Belum ada materi yang dibaca</div>`;
    } else {
      rl.innerHTML = readEntries.map(([id, date]) => {
        const topic = findTopic(id);
        return `
          <div class="monitor-card" style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:800;font-size:0.9rem">${topic?.icon || '📖'} ${topic?.name || id}</span>
            <span style="font-size:0.76rem;color:var(--muted);font-weight:700">✅ ${new Date(date).toLocaleDateString('id-ID')}</span>
          </div>`;
      }).join('');
    }
  }
  // ── 5. TKA History ──────────────────────────────────────────
  const tkaHistEl = $('tkaHistoryList');
  if (tkaHistEl) {
    const hist = (s.tkaHistory || []).slice(0, 5);
    if (hist.length === 0) {
      tkaHistEl.innerHTML = '<div class="empty-state"><span class="empty-state-icon">🏆</span>Belum ada riwayat TKA</div>';
    } else {
      tkaHistEl.innerHTML = hist.map(h => {
        const cfg   = TKA_CONFIG[h.subject] || { label: h.subject, color: 'var(--primary)' };
        const color = h.nilai >= 75 ? 'var(--success)' : h.nilai >= 60 ? 'var(--warning)' : 'var(--danger)';
        const dateStr = new Date(h.date).toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric' });
        return `
          <div class="monitor-card">
            <div class="monitor-row">
              <span class="monitor-topic">${cfg.label}</span>
              <span style="font-weight:800;color:${color}">${h.nilai}</span>
            </div>
            <div style="font-size:0.76rem;color:var(--muted);display:flex;gap:12px;margin-top:2px">
              <span>✅ ${h.benar}/${h.total} benar</span>
              <span>⏱ ${h.durasi}</span>
              <span>📅 ${dateStr}</span>
            </div>
            <div class="mini-bar" style="margin-top:8px">
              <div class="mini-fill" style="background:${color};width:${h.nilai}%"></div>
            </div>
          </div>`;
      }).join('');
    }
  }

}

function findTopic(id) {
  for (const sub of ['ipa', 'bindo', 'mtk']) {
    const found = TOPIC_LIST[sub]?.find(t => t.id === id);
    if (found) return found;
  }
  return null;
}

// ============================================================
//  RESET MODAL
// ============================================================

function resetAll() {
  // Tampilkan custom modal — tanpa window.confirm()
  const overlay = document.createElement('div');
  overlay.id = 'resetModal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-icon">🗑️</div>
      <h2 class="modal-title" id="modalTitle">Reset Semua Data?</h2>
      <p class="modal-msg">Semua progress belajar, nilai quiz, XP, dan streak akan <strong>dihapus permanen</strong>. Tindakan ini tidak bisa dibatalkan.</p>
      <div class="modal-actions">
        <button class="btn modal-btn-cancel" id="modalCancel">Batal</button>
        <button class="btn modal-btn-confirm" id="modalConfirm">Ya, Reset</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // Fokus ke tombol Batal secara default (lebih aman)
  requestAnimationFrame(() => {
    overlay.classList.add('modal-visible');
    document.getElementById('modalCancel').focus();
  });

  function closeModal() {
    overlay.classList.remove('modal-visible');
    setTimeout(() => overlay.remove(), 250);
  }

  document.getElementById('modalCancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  document.getElementById('modalConfirm').addEventListener('click', () => {
    closeModal();
    // Jalankan reset setelah modal selesai menutup
    setTimeout(() => {
      STATE.reset();
      updateHome();
      $$('.badge').forEach(b => { b.classList.add('locked'); b.classList.remove('earned'); });
      showToast('🗑️ Semua data telah direset.');
    }, 260);
  });

  // Tutup modal dengan Escape
  function onKeyDown(e) {
    if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', onKeyDown); }
  }
  document.addEventListener('keydown', onKeyDown);
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── Dark mode: baca preferensi manual dari localStorage ──
  applyTheme(localStorage.getItem('bc-theme'));

  // ── Mute: baca preferensi ──
  applyMute(localStorage.getItem('bc-mute') === '1');

  const s = STATE.get();
  if (!s.name) {
    showOnboarding();
  } else {
    updateHome();
    checkBadges();
    showPage('home', false);
  }
});

// ============================================================
//  DARK MODE
// ============================================================

function applyTheme(pref) {
  const html = document.documentElement;
  const btn  = $('themeBtn');

  if (pref === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (btn) btn.textContent = '☀️';
    if (btn) btn.title = 'Mode terang';
  } else if (pref === 'light') {
    html.classList.add('light');
    html.classList.remove('dark');
    if (btn) btn.textContent = '🌙';
    if (btn) btn.title = 'Mode gelap';
  } else {
    // Ikuti OS — hapus kedua class override
    html.classList.remove('dark', 'light');
    // Deteksi OS untuk ikon yang tepat
    const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (btn) btn.textContent = osDark ? '☀️' : '🌙';
    if (btn) btn.title = osDark ? 'Mode terang' : 'Mode gelap';
  }
}

function toggleTheme() {
  const html    = document.documentElement;
  const isDark  = html.classList.contains('dark') ||
    (!html.classList.contains('light') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('bc-theme', next);
  applyTheme(next);
}

// Sinkronkan ikon jika preferensi OS berubah saat halaman terbuka
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', () => {
    // Hanya sync jika tidak ada override manual
    if (!localStorage.getItem('bc-theme')) applyTheme(null);
  });

// ============================================================
//  SOUND ENGINE  (Web Audio API — tanpa file eksternal)
// ============================================================

let _audioCtx  = null;   // AudioContext dibuat saat pertama dipakai (lazy)
let _isMuted   = false;

/** Ambil (atau buat) AudioContext. Dibuat lazy agar tidak trigger
 *  autoplay policy sebelum ada interaksi pengguna.                */
function _getCtx() {
  if (!_audioCtx) {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume jika suspended (Chrome kebijakan autoplay)
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

/** Buat satu nada sinusoidal pendek.
 *  @param {number} freqStart  - Frekuensi awal (Hz)
 *  @param {number} freqEnd    - Frekuensi akhir (Hz, boleh sama)
 *  @param {number} duration   - Durasi dalam detik
 *  @param {number} [gain=0.18] - Volume (0–1)
 *  @param {number} [startAt=0] - Offset start dari ctx.currentTime
 */
function _tone(freqStart, freqEnd, duration, gain = 0.18, startAt = 0) {
  const ctx  = _getCtx();
  const t0   = ctx.currentTime + startAt;

  const osc  = ctx.createOscillator();
  const env  = ctx.createGain();          // envelope

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freqStart, t0);
  if (freqEnd !== freqStart) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, t0 + duration);
  }

  // Attack–Sustain–Release envelope agar tidak "klik"
  env.gain.setValueAtTime(0, t0);
  env.gain.linearRampToValueAtTime(gain, t0 + 0.01);
  env.gain.setValueAtTime(gain,          t0 + duration - 0.02);
  env.gain.linearRampToValueAtTime(0,    t0 + duration);

  osc.connect(env);
  env.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.01);
}

/**
 * Mainkan efek suara sesuai type.
 * @param {'correct'|'wrong'|'badge'|'xp'} type
 */
function playSound(type) {
  if (_isMuted) return;
  // Periksa dukungan browser — graceful degradation
  if (!window.AudioContext && !window.webkitAudioContext) return;

  try {
    switch (type) {
      case 'correct':
        // Nada naik singkat: 220 Hz → 440 Hz, 0.15 s
        _tone(220, 440, 0.15, 0.2);
        break;

      case 'wrong':
        // Nada turun singkat: 300 Hz → 150 Hz, 0.2 s
        _tone(300, 150, 0.2, 0.18);
        break;

      case 'badge':
        // Chord ceria: Do–Mi–Sol berurutan
        _tone(523, 523, 0.12, 0.18, 0.00);   // C5
        _tone(659, 659, 0.12, 0.18, 0.12);   // E5
        _tone(784, 784, 0.18, 0.22, 0.24);   // G5
        break;

      case 'xp':
        // Ting pendek tinggi: 880 Hz, 0.08 s
        _tone(880, 880, 0.08, 0.14);
        break;
    }
  } catch (err) {
    // AudioContext gagal (misalnya di mode private/restricted) — diam saja
    console.warn('[BelajarCeria] Sound error:', err);
  }
}

/** Terapkan status mute ke variabel dan ikon tombol */
function applyMute(muted) {
  _isMuted = muted;
  const btn = $('muteBtn');
  if (btn) {
    btn.textContent = muted ? '🔇' : '🔊';
    btn.title       = muted ? 'Aktifkan suara' : 'Matikan suara';
  }
}

/** Toggle mute, simpan ke localStorage */
function toggleMute() {
  applyMute(!_isMuted);
  localStorage.setItem('bc-mute', _isMuted ? '1' : '0');
}

// ============================================================
//  ONBOARDING MODAL
// ============================================================

function showOnboarding() {
  const overlay = document.createElement('div');
  overlay.id        = 'onboardingModal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box onboarding-box" role="dialog" aria-modal="true"
         aria-labelledby="onboardTitle">
      <div class="modal-icon">👋</div>
      <h2 class="modal-title" id="onboardTitle">Hai! Siapa namamu?</h2>
      <p class="modal-msg">
        Biar BelajarCeria bisa menyapamu setiap hari!
      </p>
      <input
        id        = "nameInput"
        class     = "onboarding-input"
        type      = "text"
        maxlength = "30"
        placeholder = "Tulis namamu di sini…"
        autocomplete = "off"
        autocapitalize = "words"
      >
      <div id="nameError" class="onboarding-error" aria-live="polite"></div>
      <div class="modal-actions" style="justify-content:center;margin-top:20px">
        <button class="btn onboarding-submit" id="nameSubmit">
          Mulai Belajar! 🚀
        </button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // Fade in
  requestAnimationFrame(() => {
    overlay.classList.add('modal-visible');
    document.getElementById('nameInput').focus();
  });

  function submit() {
    const raw  = document.getElementById('nameInput').value.trim();
    const err  = document.getElementById('nameError');
    if (!raw) {
      err.textContent = '⚠️ Nama tidak boleh kosong ya!';
      const inp = document.getElementById('nameInput');
      inp.classList.remove('shake');
      // force reflow agar animasi bisa diulang
      void inp.offsetWidth;
      inp.classList.add('shake');
      inp.addEventListener('animationend', () => inp.classList.remove('shake'), { once: true });
      inp.focus();
      return;
    }
    err.textContent = '';

    // Simpan nama ke STATE
    const s = STATE.get();
    s.name  = raw;
    STATE.save();

    // Tutup modal lalu lanjut ke app
    overlay.classList.remove('modal-visible');
    setTimeout(() => {
      overlay.remove();
      updateHome();
      checkBadges();
      showPage('home', false);
      showToast(`Halo, ${raw}! Selamat belajar 🎉`);
    }, 280);
  }

  document.getElementById('nameSubmit').addEventListener('click', submit);
  document.getElementById('nameInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') submit();
  });
}

// ============================================================
//  TKA — SIMULASI UJIAN
//  Variabel, fungsi, dan integrasi STATE
// ============================================================

/* ── STATE defaults: tambahkan tkaHistory ──────────────────
   Cara pakai: STATE sudah ada, kita patch defaults saat init
   dengan mengecek & mengisi tkaHistory jika belum ada.       */
(function patchTKAState() {
  const s = STATE.get();
  if (!s.tkaHistory) { s.tkaHistory = []; STATE.save(); }
})();

/* ── Runtime variables ─────────────────────────────────────── */
let tkaSubject      = '';
let tkaQuestions    = [];
let tkaAnswers      = {};         // { index: optionIndex }
let tkaMarked       = new Set();  // Set of question indices
let tkaCurrentIndex = 0;
let tkaTimerHandle  = null;
let tkaSecondsLeft  = 0;
let tkaStartTime    = null;

/* ── Konfigurasi per mapel ─────────────────────────────────── */
const TKA_CONFIG = {
  ipa:   { label: '🔬 IPA',         total: 40, duration: 90 * 60, color: 'var(--ipa)' },
  bindo: { label: '📚 B. Indonesia', total: 40, duration: 90 * 60, color: 'var(--bindo)' },
  mtk:   { label: '🔢 Matematika',   total: 35, duration: 90 * 60, color: 'var(--mtk)' },
};

// ============================================================
//  startTKA(subject)
// ============================================================
function startTKA(subject) {
  if (!TKA_DATA || !TKA_DATA[subject] || TKA_DATA[subject].length === 0) {
    showToast('⚠️ Data soal TKA belum tersedia.');
    return;
  }

  tkaSubject      = subject;
  tkaAnswers      = {};
  tkaMarked       = new Set();
  tkaCurrentIndex = 0;
  tkaStartTime    = Date.now();

  const cfg   = TKA_CONFIG[subject];
  const pool  = [...TKA_DATA[subject]];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  tkaQuestions = pool.slice(0, cfg.total);

  // Set timer
  tkaSecondsLeft = cfg.duration;

  // Update header info sebelum tampil
  const hdrEl = $('tkaSubjectLabel');
  if (hdrEl) hdrEl.textContent = cfg.label;

  showPage('tka');
  renderTKAQuestion(0);
  startTKATimer();
}

// ============================================================
//  renderTKAQuestion(index)
// ============================================================
function renderTKAQuestion(index) {
  if (index < 0 || index >= tkaQuestions.length) return;
  tkaCurrentIndex = index;

  const q     = tkaQuestions[index];
  const total = tkaQuestions.length;
  const cfg   = TKA_CONFIG[tkaSubject];

  // Nomor soal
  const numEl = $('tkaQNum');
  if (numEl) numEl.textContent = `Soal ${index + 1} / ${total}`;

  // Area teks soal — ganti \n jadi <br>
  const qEl = $('tkaQuestionText');
  if (qEl) qEl.innerHTML = q.q.replace(/\n/g, '<br>');

  // Topik & Level badge
  const badgeEl = $('tkaTopicBadge');
  if (badgeEl) badgeEl.textContent = `${q.topic} • ${q.level}`;

  // Opsi jawaban
  const optContainer = $('tkaOptions');
  if (optContainer) {
    optContainer.innerHTML = q.opts.map((opt, i) => {
      const isSelected = tkaAnswers[index] === i;
      return `<button class="tka-option${isSelected ? ' selected' : ''}"
                      onclick="selectTKAAnswer(${index}, ${i})">
                <span class="tka-opt-letter">${'ABCD'[i]}</span>
                <span>${opt}</span>
              </button>`;
    }).join('');
  }

  // Tandai button
  const markBtn = $('tkaMarkBtn');
  if (markBtn) {
    const isMarked = tkaMarked.has(index);
    markBtn.textContent = isMarked ? '⭐ Ditandai' : '☆ Tandai';
    markBtn.classList.toggle('marked', isMarked);
  }

  // Tombol navigasi
  const prevBtn = $('tkaPrevBtn');
  const nextBtn = $('tkaNextBtn');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.textContent = index === total - 1 ? 'Selesai 🏁' : 'Lanjut →';

  // Update nav grid
  renderTKANavGrid();
}

// ============================================================
//  renderTKANavGrid()
// ============================================================
function renderTKANavGrid() {
  const grid = $('tkaNavGrid');
  if (!grid) return;

  grid.innerHTML = tkaQuestions.map((_, i) => {
    let cls = 'tka-nav-btn';
    if (tkaAnswers[i] !== undefined) cls += ' answered';
    if (tkaMarked.has(i))            cls += ' marked';
    if (i === tkaCurrentIndex)       cls += ' active';
    return `<button class="${cls}" onclick="renderTKAQuestion(${i})">${i + 1}</button>`;
  }).join('');

  // Scroll tombol aktif ke tengah grid
  setTimeout(() => {
    const activeBtn = grid.querySelector('.tka-nav-btn.active');
    if (activeBtn) activeBtn.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }, 50);
}

// ============================================================
//  selectTKAAnswer(index, optIdx)
// ============================================================
function selectTKAAnswer(index, optIdx) {
  tkaAnswers[index] = optIdx;

  // Update visual opsi
  const buttons = document.querySelectorAll('.tka-option');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIdx);
  });

  renderTKANavGrid();
}

// ============================================================
//  toggleTKAMark(index)
// ============================================================
function toggleTKAMark(index) {
  if (tkaMarked.has(index)) {
    tkaMarked.delete(index);
  } else {
    tkaMarked.add(index);
  }
  renderTKAQuestion(index);
}

// ============================================================
//  tkaPrev() / tkaNext()
// ============================================================
function tkaPrev() {
  if (tkaCurrentIndex > 0) renderTKAQuestion(tkaCurrentIndex - 1);
}

function tkaNext() {
  if (tkaCurrentIndex < tkaQuestions.length - 1) {
    renderTKAQuestion(tkaCurrentIndex + 1);
  } else {
    // Di soal terakhir → tombol jadi "Selesai"
    confirmSubmitTKA();
  }
}

// ============================================================
//  startTKATimer() / tickTKATimer()
// ============================================================
function startTKATimer() {
  if (tkaTimerHandle) clearInterval(tkaTimerHandle);
  tkaTimerHandle = setInterval(tickTKATimer, 1000);
  updateTKATimerDisplay();
}

function stopTKATimer() {
  if (tkaTimerHandle) { clearInterval(tkaTimerHandle); tkaTimerHandle = null; }
}

function tickTKATimer() {
  tkaSecondsLeft--;
  updateTKATimerDisplay();
  if (tkaSecondsLeft <= 0) {
    stopTKATimer();
    submitTKA(true);
  }
}

function updateTKATimerDisplay() {
  const el = $('tkaTimer');
  if (!el) return;

  const m = String(Math.floor(tkaSecondsLeft / 60)).padStart(2, '0');
  const s = String(tkaSecondsLeft % 60).padStart(2, '0');
  el.textContent = `⏱ ${m}:${s}`;

  el.classList.remove('warn', 'danger');
  if (tkaSecondsLeft <= 3 * 60)       el.classList.add('danger');
  else if (tkaSecondsLeft <= 10 * 60) el.classList.add('warn');
}

// ============================================================
//  confirmSubmitTKA() — modal konfirmasi
// ============================================================
function confirmSubmitTKA() {
  const unanswered = tkaQuestions.length - Object.keys(tkaAnswers).length;

  if (unanswered > 0) {
    // Ada soal belum dijawab → tampilkan modal konfirmasi
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-icon">⚠️</div>
        <h2 class="modal-title">Yakin Selesai?</h2>
        <p class="modal-msg">Masih ada <strong>${unanswered} soal</strong> yang belum kamu jawab.<br>Soal yang tidak dijawab dihitung <strong>salah</strong>.</p>
        <div class="modal-actions">
          <button class="btn modal-btn-cancel" id="tkaModalCancel">Lanjut Kerjakan</button>
          <button class="btn modal-btn-confirm" id="tkaModalConfirm">Kumpulkan</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => overlay.classList.add('modal-visible'));

    function closeModal() {
      overlay.classList.remove('modal-visible');
      setTimeout(() => overlay.remove(), 250);
    }

    $('tkaModalCancel').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    $('tkaModalConfirm').addEventListener('click', () => { closeModal(); submitTKA(false); });
  } else {
    submitTKA(false);
  }
}

// ============================================================
//  submitTKA(forced)
// ============================================================
function submitTKA(forced = false) {
  stopTKATimer();

  const total = tkaQuestions.length;
  let benar   = 0;

  // Hitung benar & breakdown per topik
  const breakdown = {};
  tkaQuestions.forEach((q, i) => {
    if (!breakdown[q.topic]) breakdown[q.topic] = { benar: 0, total: 0 };
    breakdown[q.topic].total++;
    if (tkaAnswers[i] === q.ans) {
      benar++;
      breakdown[q.topic].benar++;
    }
  });

  const nilai  = Math.round((benar / total) * 100);
  const durasi = Date.now() - tkaStartTime;
  const mm     = String(Math.floor(durasi / 60000)).padStart(2, '0');
  const ss     = String(Math.floor((durasi % 60000) / 1000)).padStart(2, '0');
  const durasiStr = `${mm}:${ss}`;

  // Simpan ke STATE
  const s = STATE.get();
  if (!s.tkaHistory) s.tkaHistory = [];
  s.tkaHistory.unshift({
    subject: tkaSubject,
    nilai,
    benar,
    total,
    durasi: durasiStr,
    date: new Date().toISOString(),
    breakdown,
  });
  if (s.tkaHistory.length > 20) s.tkaHistory.pop(); // Max 20 riwayat
  STATE.save();

  addActivity(
    `🏆 TKA ${TKA_CONFIG[tkaSubject]?.label || tkaSubject}: ${nilai}`,
    nilai >= 75 ? 'var(--success)' : nilai >= 60 ? 'var(--warning)' : 'var(--danger)'
  );
  addXP(Math.floor(nilai / 2)); // Bonus XP dari TKA

  // Tampilkan hasil
  showTKAResult({ nilai, benar, total, durasiStr, breakdown });
}

// ============================================================
//  showTKAResult(data)
// ============================================================
function showTKAResult({ nilai, benar, total, durasiStr, breakdown }) {
  showPage('tka-result');

  // Lingkaran nilai
  const circleEl = $('tkaResultScore');
  if (circleEl) circleEl.textContent = nilai;

  // Kategori
  let kategori, katColor;
  if (nilai >= 85)      { kategori = '🏆 Luar Biasa!';     katColor = 'var(--success)'; }
  else if (nilai >= 70) { kategori = '👏 Bagus Sekali!';   katColor = 'var(--primary)'; }
  else if (nilai >= 60) { kategori = '💪 Cukup Baik';       katColor = 'var(--warning)'; }
  else                  { kategori = '📚 Perlu Belajar Lagi'; katColor = 'var(--danger)'; }

  const katEl = $('tkaResultKategori');
  if (katEl) { katEl.textContent = kategori; katEl.style.color = katColor; }

  // Statistik
  const statsEl = $('tkaResultStats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--success)">${benar}</div><div class="tka-stat-lbl">Benar</div></div>
      <div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--danger)">${total - benar}</div><div class="tka-stat-lbl">Salah</div></div>
      <div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--primary)">${durasiStr}</div><div class="tka-stat-lbl">Durasi</div></div>`;
  }

  // Breakdown per topik
  const bkEl = $('tkaBreakdown');
  if (bkEl) {
    bkEl.innerHTML = Object.entries(breakdown).map(([topic, data]) => {
      const pct   = Math.round((data.benar / data.total) * 100);
      const color = pct >= 75 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
      return `
        <div class="tka-breakdown">
          <div class="monitor-row">
            <span style="font-weight:800;font-size:0.9rem">${topic}</span>
            <span style="font-weight:800;color:${color}">${data.benar}/${data.total} (${pct}%)</span>
          </div>
          <div class="mini-bar">
            <div class="mini-fill" style="background:${color};width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }

  // Review soal yang salah
  const reviewEl = $('tkaReview');
  if (reviewEl) {
    const wrongQuestions = tkaQuestions
      .map((q, i) => ({ q, i, userAns: tkaAnswers[i] }))
      .filter(({ q, userAns }) => userAns !== q.ans);

    if (wrongQuestions.length === 0) {
      reviewEl.innerHTML = '<div class="empty-state"><span class="empty-state-icon">🎉</span>Semua soal benar! Luar biasa!</div>';
    } else {
      reviewEl.innerHTML = wrongQuestions.map(({ q, i, userAns }) => `
        <div class="tka-review-item">
          <div class="tka-review-num">Soal ${i + 1} — ${q.topic}</div>
          <div class="tka-review-q">${q.q.replace(/\n/g, '<br>')}</div>
          <div class="tka-review-ans">
            <span class="tka-ans-wrong">✗ Jawabanmu: ${userAns !== undefined ? q.opts[userAns] : '(Tidak dijawab)'}</span>
            <span class="tka-ans-correct">✓ Jawaban benar: ${q.opts[q.ans]}</span>
          </div>
          <details class="tka-review-explain">
            <summary>📘 Lihat Pembahasan</summary>
            <p>${q.explanation}</p>
          </details>
        </div>`).join('');
    }
  }
}


// ============================================================
//  confirmExitTKA() — modal konfirmasi keluar TKA
// ============================================================
function confirmExitTKA() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <div class="modal-icon">⚠️</div>
      <h2 class="modal-title">Keluar dari TKA?</h2>
      <p class="modal-msg">Semua jawaban yang sudah kamu isi akan <strong>hilang</strong>. Yakin mau keluar?</p>
      <div class="modal-actions">
        <button class="btn modal-btn-cancel" id="exitTKACancel">Lanjut Kerjakan</button>
        <button class="btn modal-btn-confirm" id="exitTKAConfirm">Keluar</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('modal-visible'));

  function closeModal() {
    overlay.classList.remove('modal-visible');
    setTimeout(() => overlay.remove(), 250);
  }

  document.getElementById('exitTKACancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.getElementById('exitTKAConfirm').addEventListener('click', () => {
    closeModal();
    stopTKATimer();
    showPage('home');
  });
}

// ============================================================
//  retryTKA() — ulangi TKA mapel yang sama
// ============================================================
function retryTKA() {
  startTKA(tkaSubject);
}


