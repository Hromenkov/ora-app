import { router } from '../router.js';
import { state } from '../state.js';
import { getAllBooks, getBook } from '../data/books.js';
import { TRANSLATIONS, byId } from '../data/translations.js';

export function mountSelectors(root){
  const books = getAllBooks();
  if (!state.currentBook) state.currentBook = books[0].id;
  const book = getBook(state.currentBook);
  if (state.currentChapter > book.chapters) state.currentChapter = 1;

  const tr = byId(state.currentTranslation) || TRANSLATIONS[0];
  state.currentLanguage = tr.language;

  root.innerHTML = `
    <div class="subheader">
      <button class="icon-btn" id="back">←</button>
      <div><h1>Библия</h1><p style="color:#9DA3AE;margin-top:6px">мини-приложение</p></div>
      <button class="icon-btn">⋯</button>
    </div>

    <section class="screen">
      <div class="form">
        <label>Выбери книгу</label>
        <select id="book" class="select">
          ${books.map(b=>`<option value="${b.id}" ${b.id===state.currentBook?'selected':''}>${b.name}</option>`).join('')}
        </select>

        <label>Выбери главу</label>
        <select id="chapter" class="select"></select>

        <label>Выбери перевод</label>
        <select id="translation" class="select">
          ${TRANSLATIONS.map(t=>`<option value="${t.id}" ${t.id===tr.id?'selected':''}>${t.language==='ru'?'Библия ':''}${t.name}</option>`).join('')}
        </select>
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

  const $book = root.querySelector('#book');
  const $chapter = root.querySelector('#chapter');
  const $translation = root.querySelector('#translation');

  const fillChapters = ()=>{
    const b = getBook($book.value);
    $chapter.innerHTML = Array.from({length:b.chapters},(_,i)=>`<option value="${i+1}" ${i+1===state.currentChapter?'selected':''}>${i+1}</option>`).join('');
  };
  fillChapters();

  $book.addEventListener('change', ()=>{ state.currentBook = $book.value; state.currentChapter = 1; fillChapters(); });
  $chapter.addEventListener('change', ()=>{ state.currentChapter = Number($chapter.value); });
  $translation.addEventListener('change', ()=>{
    state.currentTranslation = $translation.value;
    const t = byId(state.currentTranslation); state.currentLanguage = t.language;
  });

  root.querySelector('#back').addEventListener('click', ()=> router.go('home'));

  // как только выбрали перевод или главу — переходим в читалку
  $translation.addEventListener('change', ()=> router.go('reader'));
  $chapter.addEventListener('change', ()=> router.go('reader'));
}
