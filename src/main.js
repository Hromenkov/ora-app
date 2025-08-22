// Безопасная инициализация Telegram
const tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
try{ tg?.ready(); tg?.expand?.(); }catch(e){}

// Роутер + страницы
import { initRouter, go } from './router.js?v=33';
import home from './ui/home.js?v=33';
import bibleSelect from './ui/bible-select.js?v=33';
import reader from './ui/reader.js?v=33';
import ora from './ui/ora.js?v=33';
import mentor from './ui/mentor.js?v=33';

const app = document.getElementById('app');

const ctx = { go, tg };

initRouter({
  '#/':         () => home(app, ctx),
  '#/bible':    () => bibleSelect(app, ctx),
  '#/read':     ({params}) => reader(app, ctx, params),
  '#/ora':      () => ora(app, ctx),
  '#/mentor':   () => mentor(app, ctx),
  '#/404':      () => app.innerHTML = `<div class="container"><p>Страница не найдена</p></div>`
});

// В первый запуск — на домашнюю
if (!location.hash) go('#/');
