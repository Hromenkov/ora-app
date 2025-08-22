export default function bibleSelect(root, {go}) {
  root.innerHTML = `
    <div class="container">
      <header class="app-header">
        <button class="back-btn" data-go="#/">← Назад</button>
        <div style="flex:1"></div>
      </header>

      <h2 class="app-title" style="font-size:36px;margin-top:8px">Библия</h2>
      <p class="app-sub" style="margin-top:4px">мини-приложение</p>

      <div style="margin-top:18px; display:grid; gap:16px">
        <label style="display:grid; gap:6px">
          <span style="color:var(--muted); font-weight:600">Выбери книгу</span>
          <select id="book" style="height:48px;border-radius:14px;border:1px solid var(--divider);background:#201d28;color:#fff;padding:0 12px">
            <option value="mrk">Ев. от Марка</option>
            <option value="mat">Ев. от Матфея</option>
            <option value="luk">Ев. от Луки</option>
            <option value="jhn">Ев. от Иоанна</option>
          </select>
        </label>

        <label style="display:grid; gap:6px">
          <span style="color:var(--muted); font-weight:600">Выбери главу</span>
          <input id="chap" type="number" min="1" value="1" style="height:48px;border-radius:14px;border:1px solid var(--divider);background:#201d28;color:#fff;padding:0 12px" />
        </label>

        <label style="display:grid; gap:6px">
          <span style="color:var(--muted); font-weight:600">Выбери перевод</span>
          <select id="tr" style="height:48px;border-radius:14px;border:1px solid var(--divider);background:#201d28;color:#fff;padding:0 12px">
            <option value="syn">Синодальный (RU)</option>
            <option value="kng">Кинг Джеймс (EN)</option>
          </select>
        </label>

        <button id="goRead" class="btn" style="height:52px;border-radius:16px;background:#3a364a;font-weight:800">Открыть читалку</button>
      </div>
    </div>

    <nav class="tabbar">
      <div class="tabbar__row">
        <div class="tab active"><div class="icon">✝️</div>Библия</div>
        <div class="tab" data-go="#/ora"><div class="icon">⭕</div>ORA</div>
        <div class="tab" data-go="#/mentor"><div class="icon">👨‍🏫</div>Наставник</div>
      </div>
    </nav>
  `;

  root.querySelector('[data-go="#/"]').addEventListener('click', ()=>go('#/'));
  root.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click', ()=>go(el.dataset.go)));

  root.getElementById('goRead').addEventListener('click', ()=>{
    const book = root.getElementById('book').value;
    const chap = root.getElementById('chap').value || 1;
    const tr   = root.getElementById('tr').value;
    go(`#/read?book=${encodeURIComponent(book)}&chap=${encodeURIComponent(chap)}&tr=${encodeURIComponent(tr)}`);
  });
}
