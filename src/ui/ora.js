export default function ora(root, {go}) {
  root.innerHTML = `
    <div class="container">
      <header class="app-header">
        <button class="icon-btn" data-go="#/">←</button>
        <div style="flex:1"></div>
      </header>
      <h1 class="app-title" style="font-size:40px;margin-top:8px">ORA</h1>
      <p class="app-sub">Друг и наставник</p>
      <p style="opacity:.75;margin-top:16px">Здесь будет чат с ассистентом.</p>
    </div>

    <nav class="tabbar">
      <div class="tabbar__row">
        <div class="tab" data-go="#/bible"><div class="icon">✝️</div>Библия</div>
        <div class="tab active"><div class="icon">⭕</div>ORA</div>
        <div class="tab" data-go="#/mentor"><div class="icon">👨‍🏫</div>Наставник</div>
      </div>
    </nav>
  `;
  root.querySelectorAll('[data-go]').forEach(el=>el.onclick=()=>go(el.dataset.go));
}
