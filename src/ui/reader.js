// src/ui/reader.js
export function renderReader(root, params={}){
  const book = params.book || 'MRK';
  const ch   = Number(params.ch || 1);
  const tr   = params.tr || 'RURSP';

  root.innerHTML = `
    <header class="app-header">
      <a class="icon-btn" href="#bible" aria-label="Назад">⬅️</a>
      <div>
        <h1>Глава ${ch}</h1>
        <p>${book} · ${tr}</p>
      </div>
      <button class="icon-btn" aria-label="Меню">⋯</button>
    </header>

    <section class="stack" style="padding-bottom:0">
      <div class="card card--dark">
        <div id="verses" style="line-height:1.8"></div>
      </div>
    </section>

    <nav class="tabbar">
      <a class="tab" href="#bible"><div class="icon">✝️</div>Библия</a>
      <a class="tab" href="#ora"><div class="icon">⭕</div>ORA</a>
      <a class="tab" href="#mentor"><div class="icon">👨‍🏫</div>Наставник</a>
    </nav>
  `;

  const $v = root.querySelector('#verses');
  $v.innerHTML = Array.from({length:20}, (_,i)=>(
    `<div><span style="color:#E5FF53">${i+1}</span> Текст стиха-заглушки ${i+1}…</div>`
  )).join('');
}
