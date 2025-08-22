// src/ui/home.js
export function renderHome(root){
  root.innerHTML = `
    <header class="app-header">
      <div>
        <h1>ORA</h1>
        <p>Приложение для духовного роста</p>
      </div>
      <button class="icon-btn" aria-label="Настройки">⚙️</button>
    </header>

    <section class="stack">
      <a class="card card--accent" href="#ora">
        <h2>ORA</h2><span>Друг и наставник</span>
      </a>

      <a class="card card--blue" href="#bible">
        <h2>БИБЛИЯ</h2><span>Читать и изучать</span>
      </a>

      <a class="card card--violet" href="#mentor">
        <h2>НАСТАВНИК</h2><span>Конспекты. Заметки. Исследования</span>
      </a>
    </section>

    <nav class="tabbar">
      <a class="tab" href="#bible"><div class="icon">✝️</div>Библия</a>
      <a class="tab" href="#ora"><div class="icon">⭕</div>ORA</a>
      <a class="tab" href="#mentor"><div class="icon">👨‍🏫</div>Наставник</a>
    </nav>
  `;
}
