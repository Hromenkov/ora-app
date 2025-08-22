// src/main.js
import { renderHome } from '/ora-app/src/ui/home.js?v=1';

(function initTelegram() {
  try {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      // можно будет использовать mainButton позже
    }
  } catch (_) {}
})();

const app = document.getElementById('app');
renderHome(app);
