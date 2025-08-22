// src/ui/bible-select.js
import * as BooksData from '../data/books.js?v=ui14';

const BOOKS = BooksData.BOOKS || BooksData.books || [];
const CHAPTERS_MAP = BooksData.BOOK_CHAPTERS || BooksData.bookChapters || {};

const TRANSLATIONS = [
  { code: 'RURSP', name: 'Синодальный' },
  { code: 'RUKJV', name: 'Библия Короля Иакова' },
];

export function renderBibleSelect(root){
  root.innerHTML = `
    <header class="app-header">
      <a class="icon-btn" href="#home" aria-label="Назад">⬅️</a>
      <div>
        <h1>Библия</h1>
        <p>мини-приложение</p>
      </div>
      <button class="icon-btn" aria-label="Меню">⋯</button>
    </header>

    <section class="stack">
      <div class="card card--dark">
        <h3 style="margin-bottom:8px">Функции</h3>
        <div class="chips">
          <button class="chip chip--on" data-mode="read">Читать</button>
          <button class="chip" data-mode="study">Изучать</button>
          <button class="chip" data-mode="compare">Сравнить переводы</button>
          <button class="chip" data-mode="search">Поиск</button>
        </div>

        <form class="form" id="bibleForm">
          <div class="field">
            <label for="book">Выбери книгу</label>
            <select id="book" required></select>
          </div>
          <div class="field">
            <label for="chapter">Выбери главу</label>
            <select id="chapter" required></select>
          </div>
          <div class="field">
            <label for="tr">Выбери перевод</label>
            <select id="tr" required></select>
          </div>
          <button class="btn" type="submit">Открыть</button>
        </form>
      </div>
    </section>

    <nav class="tabbar">
      <a class="tab" href="#bible"><div class="icon">✝️</div>Библия</a>
      <a class="tab" href="#ora"><div class="icon">⭕</div>ORA</a>
      <a class="tab" href="#mentor"><div class="icon">👨‍🏫</div>Наставник</a>
    </nav>
  `;

  // книги
  const books = BOOKS.length
    ? BOOKS
    : [
        { code: 'MRK', name: 'Ев. от Марка' },
        { code: 'MAT', name: 'Ев. от Матфея' },
        { code: 'LUK', name: 'Ев. от Луки' },
        { code: 'JHN', name: 'Ев. от Иоанна' },
      ];

  const $book = root.querySelector('#book');
  const $chapter = root.querySelector('#chapter');
  const $tr = root.querySelector('#tr');

  $book.innerHTML = books.map(b => `<option value="${b.code}">${b.name}</option>`).join('');

  function fillChapters() {
    const code = $book.value;
    const n = CHAPTERS_MAP[code] || 50;
    $chapter.innerHTML = Array.from({length:n}, (_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');
  }
  fillChapters();
  $book.addEventListener('change', fillChapters);

  $tr.innerHTML = TRANSLATIONS.map(t => `<option value="${t.code}">${t.name}</option>`).join('');

  // пока чипы просто переключают активную (визуально)
  const chips = root.querySelectorAll('.chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.classList.remove('chip--on'));
    c.classList.add('chip--on');
  }));

  root.querySelector('#bibleForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const book = $book.value;
    const ch   = $chapter.value;
    const tr   = $tr.value;
    location.hash = `#reader?book=${encodeURIComponent(book)}&ch=${encodeURIComponent(ch)}&tr=${encodeURIComponent(tr)}`;
  });
}
