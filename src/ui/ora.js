// src/ui/ora.js
export function renderOra(root) {
  root.innerHTML = `
    <div class="screen">
      <header class="header">
        <div><h1>ORA</h1><p>друг и наставник</p></div>
      </header>

      <section class="panel">
        <p>Здесь будет голос/чат с ORA и быстрые вопросы по содержанию.</p>
      </section>
    </div>

    ${tabbar('ora')}
  `;
}
function tabbar(active){
  return `
  <nav class="tabbar"><div class="tabbar__inner">
    <a class="tab" href="#/bible"><div class="icon">✝️</div><div class="label">Библия</div></a>
    <a class="tab tab--active" href="#/ora"><div class="icon">⭕</div><div class="label">ORA</div></a>
    <a class="tab" href="#/mentor"><div class="icon">👨‍🏫</div><div class="label">Наставник</div></a>
  </div></nav>`;
}
