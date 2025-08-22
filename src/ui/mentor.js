// src/ui/mentor.js
export function renderMentor(root){
  root.innerHTML = `
    <header class="app-header">
      <div>
        <h1>Наставник</h1>
        <p>конспекты, заметки, исследования</p>
      </div>
      <button class="icon-btn" aria-label="Меню">⋯</button>
    </header>

    <section class="stack">
      <div class="card card--dark">
        <p>Скоро: заметки, конспекты, проекты изучения.</p>
        <p>Пока — заглушка.</p>
      </div>
    </section>

    <nav class="tabbar">
      <a class="tab" href="#bible"><div class="icon">✝️</div>Библия</a>
      <a class="tab" href="#ora"><div class="icon">⭕</div>ORA</a>
      <a class="tab" href="#mentor"><div class="icon">👨‍🏫</div>Наставник</a>
    </nav>
  `;
}
