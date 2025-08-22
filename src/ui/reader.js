// Плейсхолдер «текста»: рендерим 20 псевдо-стихов
function mockVerses(count = 20) {
  const arr = [];
  for (let i=1;i<=count;i++){
    arr.push({ no:i, text:`Текст стиха-заглушки ${i}. Здесь будет реальный текст перевода.` });
  }
  return arr;
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

      <div class="reader__list">
        ${verses.map(v=>`
          <div class="verse">
            <div class="verse__row">
              <div class="verse__no">${v.no}</div>
              <div class="verse__text">${v.text}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <nav class="tabbar">
      <div class="tabbar__row">
        <div class="tab active" data-go="#/bible"><div class="icon">✝️</div>Библия</div>
        <div class="tab" data-go="#/ora"><div class="icon">⭕</div>ORA</div>
        <div class="tab" data-go="#/mentor"><div class="icon">👨‍🏫</div>Наставник</div>
      </div>
    </nav>
  `;

  root.querySelectorAll('[data-go]').forEach(el=>el.addEventListener('click', ()=>go(el.dataset.go)));
}
