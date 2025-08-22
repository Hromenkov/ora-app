// src/main.js
import { startRouter } from './router.js';

// Telegram WebApp (мягкая инициализация)
(function initTelegram(){
  try {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand?.();
    }
  } catch (e) { /* no-op */ }
})();

// Точка входа
const app = document.getElementById('app');
startRouter(app);
