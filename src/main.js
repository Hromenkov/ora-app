// src/main.js
import { renderHome } from './ui/home.js?v=boot9';
import { initRouter } from './router.js?v=boot9';

(function initTelegram(){
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    try { tg.ready(); tg.expand(); } catch {}
  }
})();

const app = document.getElementById('app');
renderHome(app);
initRouter();
