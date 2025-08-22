// src/ui/reader.js
export function renderReader(root, params = {}) {
  const { book = 'mrk', ch = '1', tr = 'syn' } = params;

  // Заглушечные стихи: пока текст фейковый, главное — вёрстка
  const demoVerses = Array.from({ length: 12 }).map((_, i) => ({
    n: i + 1,
    t: `Текст стиха-заглушки ${i + 1}. Здесь будет реальный текст перевода.`,
  }));

  root.innerHTML = `
    <div class="screen screen--reader">
      <header class="header header--tight">
        <button class="btn btn--icon back" onclick="history.back()" aria-label="Назад">←</button>
        <div class="header__titles">
          <h1>Глава ${ch}</h1>
          <p>${book} · ${tr}</p>
        </div>
        <div class="header__actions">
          <button class="chip">RU</button>
          <button class="chip">＋</button>
          <button class="chip">…</button>
        </div>
      </header>

      <section class="reader">
        <ol class="verses">
          ${demoVerses.map(v => `
            <li class="verse-row">
              <b class="vnum">${v.n}</b>
              <p class="vtext">${v.t}</p>
            </li>
          `).join('')}
        </ol>

        <div class="pager">
          <a class="nav-btn" href="#/reader?book=${book}&ch=${Number(ch)-1}&tr=${tr}" ${Number(ch) <= 1 ? 'aria-disabled="true"' : ''}>‹</a>
          <span class="pg">${ch}</span>
          <a class="nav-btn" href="#/reader?book=${book}&ch=${Number(ch)+1}&tr=${tr}">›</a>
        </div>
      </section>
    </div>

    ${tabbar()}
  `;
}

function tabbar(){
  return `
  <nav class="tabbar"><div class="tabbar__inner">
    <a class="tab" href="#/bible"><div class="icon">✝️</div><div class="label">Библия</div></a>
    <a class="tab" href="#/ora"><div class="icon">⭕</div><div class="label">ORA</div></a>
    <a class="tab" href="#/mentor"><div class="icon">👨‍🏫</div><div class="label">Наставник</div></a>
  </div></nav>`;
}
