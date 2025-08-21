import { router } from '../router.js';

export function mountHome(root){
  root.innerHTML = `
    <header class="app-header">
      <div>
        <h1>ORA</h1>
        <p>Приложение для духовного роста</p>
      </div>
      <button class="icon-btn" title="Настройки">⚙️</button>
    </header>

    <section class="stack">
      <div class="card card--accent" data-go="selectors">
        <h2>ORA</h2><span>Друг и наставник</span>
      </div>
      <div class="card card--blue" data-go="selectors">
        <h2>БИБЛИЯ</h2><span>Читать и изучать</span>
      </div>
      <div class="card card--dark">
        <h2>ГЕРОИ</h2><span>Библейские герои</span>
      </div>
      <div class="card card--violet">
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
  root.querySelectorAll('[data-go="selectors"]')
    .forEach(b=>b.addEventListener('click', ()=> router.go('selectors')));
}

