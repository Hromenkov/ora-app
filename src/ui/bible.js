// src/ui/bible.js

// мини-справочник (хватает для прототипа)
const BOOKS = [
  { id: 'mrk', name: 'Ев. от Марка',   chapters: 16 },
  { id: 'mat', name: 'Ев. от Матфея',  chapters: 28 },
  { id: 'luk', name: 'Ев. от Луки',    chapters: 24 },
  { id: 'jhn', name: 'Ев. от Иоанна',  chapters: 21 },
];

const TRANSLATIONS = [
  { id: 'syn',   name: 'Синодальный' },
  { id: 'kjvru', name: 'Библия Короля Иакова (RU)' },
];

export function renderBible(root) {
  const state = { book: 'mrk', ch: 1, tr: 'syn' };

  root.innerHTML = `
    <div class="screen">
      <header class="header">
        <div>
          <h1>Библия</h1>
          <p>мини-приложение</p>
        </div>
        <button class="gear" aria-label="Меню">⋯</button>
      </header>

      <section style="display:grid; gap:16px; margin-top:10px">
        ${selectField('Выбери книгу','book', BOOKS.map(b=>[b.id,b.name]), state.book)}
        ${selectField('Выбери главу','ch',   range(1, chaptersOf(state.book)).map(n=>[n,n]), state.ch)}
        ${selectField('Выбери перевод','tr', TRANSLATIONS.map(t=>[t.id,t.name]), state.tr)}
        <button id="openBtn" class="card" style="background:#eaff3b;border:none;cursor:pointer">
          <h2 style="margin:0">Открыть</h2>
        </button>
      </section>
    </div>

    ${tabbar('bible')}
  `;

  const bookSel = root.querySelector('select[name="book"]');
  const chSel   = root.querySelector('select[name="ch"]');
  const trSel   = root.querySelector('select[name="tr"]');

  bookSel.addEventListener('change', () => {
    state.book = bookSel.value;
    const chMax = chaptersOf(state.book);
    chSel.innerHTML = range(1, chMax).map(n => `<option value="${n}">${n}</option>`).join('');
    state.ch = 1;
  });
  chSel.addEventListener('change', () => state.ch = Number(chSel.value));
  trSel.addEventListener('change', () => state.tr = trSel.value);

  root.querySelector('#openBtn').addEventListener('click', () => {
    location.hash = `#/reader?book=${state.book}&ch=${state.ch}&tr=${state.tr}`;
  });
}

function chaptersOf(bookId){ return (BOOKS.find(b=>b.id===bookId)||BOOKS[0]).chapters; }
function range(a,b){ return Array.from({length:(b-a+1)},(_,i)=>a+i); }

function selectField(label, name, pairs, value){
  return `
  <label style="display:block">
    <div style="color:#b8b8c6; font-size:14px; margin:0 0 6px 4px">${label}</div>
    <select name="${name}"
      style="width:100%; appearance:none; padding:14px 16px; border-radius:14px;
             border:1px solid rgba(255,255,255,.12); background:#1a1922; color:#fff; font-size:16px">
      ${pairs.map(([val,txt]) => `<option value="${val}" ${String(val)===String(value)?'selected':''}>${txt}</option>`).join('')}
    </select>
  </label>`;
}

function tabbar(active) {
  return `
  <nav class="tabbar" role="tablist">
    <div class="tabbar__inner">
      <a class="tab ${active==='bible'?'tab--active':''}" href="#/bible" role="tab">
        <div class="icon">✝️</div><div class="label">Библия</div>
      </a>
      <a class="tab ${active==='ora'?'tab--active':''}" href="#/ora" role="tab">
        <div class="icon">⭕</div><div class="label">ORA</div>
      </a>
      <a class="tab ${active==='mentor'?'tab--active':''}" href="#/mentor" role="tab">
        <div class="icon">👨‍🏫</div><div class="label">Наставник</div>
      </a>
    </div>
  </nav>`;
}
