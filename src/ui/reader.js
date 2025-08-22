// src/ui/reader.js
// Читалка: аккуратная шапка, чипы справа, номера стихов слева, хороший ритм текста.

export default function renderReader(
  root,
  { book = "mrk", ch = 1, tr = "syn" } = {}
) {
  root.innerHTML = `
    <div class="reader-top">
      <button class="reader-back" aria-label="Назад">←</button>

      <div class="reader-headings">
        <h1 class="reader-h">Глава ${ch}</h1>
        <div class="reader-meta">${book} · ${tr}</div>
      </div>

      <div class="reader-actions">
        <button class="chip chip--ghost" aria-label="Язык">${tr.toUpperCase()}</button>
        <button class="chip chip--ghost" aria-label="Добавить заметку">+</button>
        <button class="chip chip--ghost" aria-label="Ещё">…</button>
      </div>
    </div>

    <div class="verses">
      ${Array.from({ length: 12 }).map((_, i) => {
        const n = i + 1;
        return `
          <div class="verse">
            <div class="v-num">${n}</div>
            <div class="v-text">
              <span class="placeholder">
                Текст стиха-заглушки ${n}. Здесь будет реальный текст перевода.
              </span>
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="chapter-pager">
      <button class="pager-btn" data-act="prev" aria-label="Предыдущая глава">‹</button>
      <button class="pager-btn" data-act="next" aria-label="Следующая глава">›</button>
    </div>
  `;

  // Навигация назад
  root.querySelector(".reader-back")?.addEventListener("click", () => {
    if (window.navigate) window.navigate("/bible");
    else history.back();
  });

  // Переключение глав (пока заглушка)
  root.querySelectorAll(".pager-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.act === "next" ? 1 : -1;
      const nextCh = Math.max(1, Number(ch) + dir);
      if (window.navigate) {
        window.navigate(`/reader?book=${book}&ch=${nextCh}&tr=${tr}`);
      } else {
        renderReader(root, { book, ch: nextCh, tr });
      }
    });
  });
}
