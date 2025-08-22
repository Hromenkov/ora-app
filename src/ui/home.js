// src/ui/home.js
export function renderHome(root) {
  root.innerHTML = `
    <div class="screen">
      <header class="header">
        <div>
          <h1>ORA</h1>
          <p>Приложение для духовного роста</p>
        </div>
        <button class="gear" aria-label="Настройки">⚙️</button>
      </header>

      <section class="stack">
        <a class="card card--blue" href="#" data-open="bible">
          <h2>БИБЛИЯ</h2>
          <span>Читать и изучать</span>
        </a>

        <a class="card card--yellow" href="#" data-open="ora">
          <h2>ORA</h2>
          <span>Друг и наставник</span>
        </a>

        <a class="card card--purple" href="#" data-open="mentor">
          <h2>НАСТАВНИК</h2>
          <span>Конспекты. Заметки. Исследования</span>
        </a>
      </section>
    </div>

    <nav class="tabbar" role="tablist">
      <div class="tabbar__inner">
        <a class="tab tab--active" href="#" role="tab" aria-selected="true" data-open="bible">
          <div class="icon">✝️</div>
          <div class="label">Библия</div>
        </a>
        <a class="tab" href="#" role="tab" data-open="ora">
          <div class="icon">⭕</div>
          <div class="label">ORA</div>
        </a>
        <a class="tab" href="#" role="tab" data-open="mentor">
          <div class="icon">👨‍🏫</div>
          <div class="label">Наставник</div>
        </a>
      </div>
    </nav>
  `;

  // Заглушки навигации (пока просто тосты в консоль)
  root.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const to = el.getAttribute('data-open');
      console.log('open:', to);
      highlightTab(root, to);
      // здесь позже подключим реальную навигацию (reader / chat / notes)
    });
  });
}

function highlightTab(root, key) {
  root.querySelectorAll('.tab').forEach(t => t.classList.remove('tab--active'));
  const tab = root.querySelector(`.tab[data-open="${key}"]`);
  if (tab) tab.classList.add('tab--active');
}
