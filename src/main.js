/// src/main.js
import { renderHome } from './ui/home.js?v=boot8';
import { initRouter } from './router.js?v=boot8';

(function initTelegram(){
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    try { tg.ready(); tg.expand(); } catch {}
  }
})();

const app = document.getElementById('app');
renderHome(app);
initRouter();
