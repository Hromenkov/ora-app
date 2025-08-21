// src/main.js — минимальная отрисовка домашнего экрана и подключение Telegram

const app = document.getElementById('app');

// инициализация Telegram WebApp (без ошибок, если не в Telegram)
(function initTelegram(){
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }
})();

// простая домашняя страница (для проверки каркаса)
app.innerHTML = `
  <header class="app-header">
    <div>
      <h1>ORA</h1>
      <p>Приложение для духовного роста</p>
    </div>
    <button style="width:44px;height:44px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:#2b2836;color:#fff">⚙️</button>
  </header>

  <section class="stack">
    <div class="card card--accent">
      <h2>ORA</h2><span>Друг и наставник</span>
    </div>
    <div class="card card--blue">
      <h2>БИБЛИЯ</h2><span>Читать и изучать</span>
    </div>
    <div class="card card--dark">
      <h2>ГЕРОИ</h2><span>Библейские герои</span>
    </div>
    <div class="card card--dark" style="background:#4b0d9a">
      <h2>НАСТАВНИК</h2><span>Конспекты. Заметки. Исследования</span>
    </div>
  </section>

  <nav class="tabbar">
    <div class="tab"><div class="icon">🏠</div>Домой</div>
    <div class="tab"><div class="icon">✝️</div>Библия</div>
    <div class="tab"><div class="icon">⭕</div>ORA</div>
    <div class="tab"><div class="icon">👨‍🏫</div>Наставник</div>
    <div class="tab"><div class="icon">👕</div>Герои</div>
  </nav>
`;
