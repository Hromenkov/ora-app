// src/main.js
import { startRouter } from './router.js?v=ui15';

(function initTelegram(){
  try {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  } catch {}
})();

const app = document.getElementById('app');
if (!app) throw new Error('#app not found');

startRouter(app);

// если хэш пуст — на домашний
if (!location.hash) location.replace('#home');
