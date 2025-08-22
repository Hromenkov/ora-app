export default function home(root, {go}) {
  root.innerHTML = `
    <div class="container">
      <header class="app-header">
        <div>
          <h1 class="app-title">ORA</h1>
          <p class="app-sub">Приложение для духовного роста</p>
        </div>
        <button class="icon-btn">⚙️</button>
      </header>

      <section class="stack">
        <div class="card card--blue"   data-go="#/bible">
          <h2>БИБЛИЯ</h2><span>Читать и изучать</span>
        </div>
        <div class="card card--accent" data-go="#/ora">
          <h2>ORA</h2><span>Друг и наставник</span>
        </div>
        <div class="card card--violet" data-go="#/mentor">
          <h2>НАСТАВНИК</h2><span>Конспекты. Заметки. Исследования</span>
        </div>
      </section>
    </div>

    <nav class="tabbar">
      <div class="tabbar__row">
        <div class="tab active" data-go="#/bible"><div class="icon">✝️</div>Библия</div>
        <div class="tab" data-go="#/ora"><div class="icon">⭕</div>ORA</div>
        <div class="tab" data-go="#/mentor"><div class="icon">👨‍🏫</div>Наставник</div>
      </div>
    </nav>
  `;
  root.querySelectorAll('[data-go]').forEach(el=>el.onclick=()=>go(el.dataset.go));
}
