// src/main.js
import './styles/base.css';
import { router } from './router.js';
import { mountHome } from './ui/home.js';
import { mountSelectors } from './ui/selectors.js';
import { mountReader } from './ui/reader.js';

(function initTelegram(){
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }
})();

router.register('home', mountHome);
router.register('selectors', mountSelectors);
router.register('reader', mountReader);

// стартуем на Домой
router.go('home');
