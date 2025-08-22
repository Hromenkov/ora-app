var tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
if (tg) {
  try { tg.ready(); } catch (e) {}
  try { if (tg.expand) tg.expand(); } catch (e) {}
}
// Инициализация Telegram (без ошибок вне TG)
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand?.();
}

// Стартовый экран
initRouter({
  '#/':        () => mountHome(),
  '#/bible':   () => mountBible(),
  '#/ora':     () => mountORA(),
  '#/mentor':  () => mountMentor(),
});

// Перейдём на домашний, если пусто
if (!location.hash) navigate('#/');
