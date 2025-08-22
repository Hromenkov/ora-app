// src/main.js
import { startRouter } from '/ora-app/src/router.js?v=1';

(function initTelegram() {
  try {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  } catch (_) {}
})();

startRouter();
