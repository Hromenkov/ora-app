// src/ui/reader.js
import { goto } from '../router.js';

export function renderReader(app, opts = {}) {
  const book = opts.book || 'mrk';
  const chapter = opts.chapter || 1;
  const translation = opts.translation || 'syn'; // заглушка

  app.innerHTML = `
    <div class="reader">
      <div class="reader-top">
        <button class="reader-back" aria-label="Назад" id="backBtn">←</button>

        <div>
          <div class="reader-title">Глава ${chapter}</div>
          <div class="reader-sub">${book} · ${translation}</div>
        </div>

        <div class="reader-chips">
          <button class="chip" id="langBtn">RU</button>
          <button class="chip" id="addBtn">+</button>
          <button class="chip" id="moreBtn">…</button>
        </div>
      </div>

      <div class="verses" id="verses"></div>
    </div>
  `;

  // Заглушки стихов
  const verses = document.getElementById('verses');
  verses.innerHTML = Array.from({ length: 25 }, (_, i) => {
    const n = i + 1;
    return `
      <div class="verse">
        <span class="v-num">${n}</span>
        <div class="v-text">
          Текст стиха-заглушки ${n}. Здесь будет реальный текст перевода.
        </div>
      </div>
    `;
  }).join('');

  // Навигация
  document.getElementById('backBtn').onclick = () => {
    // если есть экран выбора главы — верни туда, иначе — на дом
    try { goto('bible-select'); } catch { goto('home'); }
  };

  // Кнопки-заглушки
  document.getElementById('langBtn').onclick = () => alert('Выбор перевода — позже');
  document.getElementById('addBtn').onclick = () => alert('Сохранить/заметка — позже');
  document.getElementById('moreBtn').onclick = () => alert('Ещё — позже');
}
