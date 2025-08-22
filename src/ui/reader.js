function mockVerses(n=20){
  return Array.from({length:n},(_,i)=>({no:i+1, text:`Текст стиха-заглушки ${i+1}. Здесь будет реальный текст перевода.`}));
}
export default function reader(root, {go}, params) {
  const book = params.book || 'mrk';
  const chap = Number(params.chap || 1);
  const tr   = params.tr || 'syn';
  const verses = mockVerses(20);

  root.innerHTML = `
    <div class="container reader">
      <div class="reader__header">
        <button class="back-btn" data-go="#/bible">←</button>
        <h1 class="reader__title">Глава ${chap}</h1>
        <div></div>

        <div class="reader__meta">${book} · ${tr}</div>
        <div class="reader__btns">
          <button class="btn">RU</button>
          <button class="btn">+</button>
          <button class="btn">…</button>
        </div>
      </div>

      ${verses.map(v=>`
        <div class="verse">
          <div class="verse__row">
            <div class="verse__no">${v.no}</div>
            <div class="verse__text">${v.text}</div>
          </div>
        </div>
      `).join('')}
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
