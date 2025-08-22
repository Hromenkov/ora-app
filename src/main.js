// НИКАКИХ import './styles/base.css' здесь быть не должно!

import { mountHome }   from './ui/home.js';
import { mountBible }  from './ui/bible.js';
import { mountORA }    from './ui/ora.js';
import { mountMentor } from './ui/mentor.js';
import { initRouter, navigate } from './router.js';

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
