// src/main.js — без импорта CSS (CSS уже подключён в index.html)

import { router } from './router.js';
import { mountHome } from './ui/home.js';
import { mountSelectors } from './ui/selectors.js';
import { mountReader } from './ui/reader.js';

(function initTelegram() {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }
})();

router.register('home', mountHome);
router.register('selectors', mountSelectors);
router.register('reader', mountReader);

router.go('home');
