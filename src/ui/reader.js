// src/ui/reader.js
// СОВПАДАЕТ со стилями в base.css

export default function renderReader(root, { book = 'mrk', ch = 1, tr = 'syn' } = {}) {
  root.innerHTML = `
    <div class="reader-top">
      <button class="reader-back" aria-label="Назад">←</button>
      <div>
        <h1 class="reader-h">Глава ${ch}</h1>
        <div class="reader-meta">${book} · ${tr}</div>
      </div>
      <div class="reader-actions">
        <button class="reader-btn" aria-label="Ещё">…</button>
      </div>
    </div>

    <div class="verses">
      ${[1,2,3].map(i => `
        <div class="verse">
          <div class="v-num">${i}</div>
          <div class="v-text"><span class="placeholder">Текст стиха-заглушки ${i}…</span></div>
        </div>
      `).join('')}
    </div>

    <div class="chapter-pager">
      <button class="pager-btn" data-act="prev">‹</button>
      <button class="pager-btn" data-act="next">›</button>
    </div>
  `;

  // Мини-логика: назад и пагинация (заглушки)
  const backBtn = root.querySelector('.reader-back');
  backBtn?.addEventListener('click', () => {
    // если у тебя есть navigate('/bible') — вызови её,
    // иначе history.back() тоже сгодится как временное решение
    if (window.navigate) window.navigate('/bible');
    else history.back();
  });

  root.querySelectorAll('.pager-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.act === 'next' ? 1 : -1;
      const nextCh = Math.max(1, Number(ch) + dir);
      if (window.navigate) {
        window.navigate(`/reader?book=${book}&ch=${nextCh}&tr=${tr}`);
      } else {
        // простая перерисовка без роутера
        renderReader(root, { book, ch: nextCh, tr });
      }
    });
  });
}
