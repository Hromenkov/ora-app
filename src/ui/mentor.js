// src/ui/mentor.js
export function renderMentor(root) {
  root.innerHTML = `
    <div class="screen">
      <header class="header">
        <div><h1>Наставник</h1><p>конспекты и заметки</p></div>
      </header>

      <section class="panel">
        <p>Тут будут конспекты, темы, исследования и заметки.</p>
      </section>
    </div>

    ${tabbar('mentor')}
  `;
}
function tabbar(active){
  return `
  <nav class="tabbar"><div class="tabbar__inner">
    <a class="tab" href="#/bible"><div class="icon">✝️</div><div class="label">Библия</div></a>
    <a class="tab" href="#/ora"><div class="icon">⭕</div><div class="label">ORA</div></a>
    <a class="tab tab--active" href="#/mentor"><div class="icon">👨‍🏫</div><div class="label">Наставник</div></a>
  </div></nav>`;
}
