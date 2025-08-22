export default function mentor(root, {go}) {
  root.innerHTML = `
    <div class="container">
      <header class="app-header">
        <button class="back-btn" data-go="#/">← Назад</button>
        <div style="flex:1"></div>
      </header>

      <h1 class="app-title" style="font-size:40px;margin-top:8px">Наставник</h1>
      <p class="app-sub">Конспекты. Заметки. Исследования</p>

      <p style="opacity:.75;margin-top:16px">
        Здесь появятся ваши заметки, планы чтения, конспекты и закладки.
      </p>
    </div>

    <nav class="tabbar">
      <div class="tabbar__row">
        <div class="tab" data-go="#/bible"><div class="icon">✝️</div>Библия</div>
        <div class="tab" data-go="#/ora"><div class="icon">⭕</div>ORA</div>
        <div class="tab active"><div class="icon">👨‍🏫</div>Наставник</div>
      </div>
    </nav>
  `;
  root.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click', ()=>go(el.dataset.go)));
}
