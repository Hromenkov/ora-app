// src/main.js
import { renderHome } from './ui/home.js?v=boot10';
import { initRouter } from './router.js?v=boot10';

(function initTelegram(){
  if (window.Telegram?.WebApp) {
    try { Telegram.WebApp.ready(); Telegram.WebApp.expand(); } catch {}
  }
})();

const app = document.getElementById('app');
renderHome(app);
initRouter();
