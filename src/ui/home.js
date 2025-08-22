// src/ui/home.js
export function renderHome(root) {
  root.innerHTML = `
    <div class="screen">
      <header class="header">
        <div>
          <h1>ORA</h1>
          <p>Приложение для духовного роста</p>
        </div>
        <button class="gear" aria-label="Настройки">⚙️</button>
      </header>

      <section class="stack">
        <a class="card card--blue"   href="#/bible"  data-open="bible">
          <h2>БИБЛИЯ</h2><span>Читать и изучать</span>
        </a>
        <a class="card card--yellow" href="#/ora"    data-open="ora">
          <h2>ORA</h2><span>Друг и наставник</span>
        </a>
        <a class="card card--purple" href="#/mentor" data-open="mentor">
          <h2>НАСТАВНИК</h2><span>Конспекты. Заметки. Исследования</span>
        </a>
      </section>
    </div>

    ${tabbar('bible')}
  `;
}

function tabbar(active) {
  return `
  <nav class="tabbar" role="tablist">
    <div class="tabbar__inner">
      <a class="tab ${active==='bible'?'tab--active':''}" href="#/bible" role="tab">
        <div class="icon">✝️</div><div class="label">Библия</div>
      </a>
      <a class="tab ${active==='ora'?'tab--active':''}" href="#/ora" role="tab">
        <div class="icon">⭕</div><div class="label">ORA</div>
      </a>
      <a class="tab ${active==='mentor'?'tab--active':''}" href="#/mentor" role="tab">
        <div class="icon">👨‍🏫</div><div class="label">Наставник</div>
      </a>
    </div>
  </nav>`;
}
