// src/ui/ora.js
export function renderOra(root){
  root.innerHTML = `
    <header class="app-header">
      <div>
        <h1>ORA</h1>
        <p>друг и наставник</p>
      </div>
      <button class="icon-btn" aria-label="Меню">⋯</button>
    </header>

    <section class="stack">
      <div class="card card--dark">
        <p>Скоро: вопросы текстом и голосом по содержанию Писания.</p>
        <p>Пока это заглушка экрана ORA.</p>
      </div>
    </section>

    <nav class="tabbar">
      <a class="tab" href="#bible"><div class="icon">✝️</div>Библия</a>
      <a class="tab" href="#ora"><div class="icon">⭕</div>ORA</a>
      <a class="tab" href="#mentor"><div class="icon">👨‍🏫</div>Наставник</a>
    </nav>
  `;
}
