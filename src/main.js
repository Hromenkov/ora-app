/// НЕ импортируй CSS отсюда (это ломает браузер на GitHub Pages)

async function boot() {
  const app = document.getElementById('app');
  app.innerHTML = '<div style="padding:16px;color:#9DA3AE">Загрузка…</div>';

  try {
    // динамические импорты: если файла нет — увидишь ошибку на экране
    const { router } = await import('./router.js');
    const { mountHome } = await import('./ui/home.js');
    const { mountSelectors } = await import('./ui/selectors.js');
    const { mountReader } = await import('./ui/reader.js');

    // Telegram
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); tg.expand();
    }

    router.register('home', mountHome);
    router.register('selectors', mountSelectors);
    router.register('reader', mountReader);

    router.go('home');
  } catch (e) {
    // выведем ошибку на страницу (а не серый экран)
    const pre = document.createElement('pre');
    pre.style.cssText = 'padding:16px;color:#fff;background:#1e1e1e;white-space:pre-wrap';
    pre.textContent = 'Boot error:\n' + (e.stack || e.message || e);
    app.replaceChildren(pre);
  }
}

boot();

