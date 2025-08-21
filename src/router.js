import { state } from '../state.js';
import { router } from '../router.js';
import { getBook, isNew } from '../data/books.js';
import { byId } from '../data/translations.js';
import { ensureBookData } from '../data/demo.js';

export function mountReader(root){
  const book = getBook(state.currentBook);
  const tr = byId(state.currentTranslation);
  const data = ensureBookData(tr.id, state.currentBook, tr.language, book.name, book.chapters);

  const testamentTitle = isNew(book.id) ? 'Новый Завет' : 'Ветхий Завет';
  const verses = data.chapters[state.currentChapter - 1] || [];

  root.innerHTML = `
    <div class="subheader">
      <button class="icon-btn" id="back">←</button>
      <div><h1>${testamentTitle}</h1></div>
      <button class="icon-btn">⋯</button>
    </div>

    <section class="screen">
      <div class="badges">
        <div class="badge">${book.name.toUpperCase()}</div>
        <button class="lang" id="lang">${tr.language.toUpperCase()}</button>
        <button class="icon-btn" title="Добавить закладку">＋</button>
      </div>

      <div class="reader-card" id="reader">
        ${verses.map((t,i)=>`<div><span class="num">${i+1}</span>${t}</div>`).join('')}
      </div>

      <div class="pager">
        <button class="btn" id="prev">⟨</button>
        <button class="btn">${state.currentChapter-1>0 ? state.currentChapter-1 : ''}</button>
        <button class="btn btn--current">${state.currentChapter}</button>
        <button class="btn">${state.currentChapter+1<=data.chapters.length ? state.currentChapter+1 : ''}</button>
        <button class="btn" id="next">⟩</button>
      </div>
    </section>

    <nav class="tabbar">
      <div class="tab"><div class="icon">🏠</div>Домой</div>
      <div class="tab"><div class="icon">✝️</div>Библия</div>
      <div class="tab"><div class="icon">⭕</div>ORA</div>
      <div class="tab"><div class="icon">👨‍🏫</div>Наставник</div>
      <div class="tab"><div class="icon">👕</div>Герои</div>
    </nav>
  `;

  root.querySelector('#back').addEventListener('click', ()=> router.go('selectors'));
  root.querySelector('#lang').addEventListener('click', ()=> router.go('selectors'));

  root.querySelector('#prev').addEventListener('click', ()=>{
    if (state.currentChapter > 1){ state.currentChapter--; router.go('reader'); }
  });
  root.querySelector('#next').addEventListener('click', ()=>{
    const max = data.chapters.length;
    if (state.currentChapter < max){ state.currentChapter++; router.go('reader'); }
  });
}

