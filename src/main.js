// Безопасная инициализация TG
var tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
try { tg && tg.ready(); tg && tg.expand && tg.expand(); } catch(e){}

// Маркер, что main.js исполнился
document.getElementById('boot').textContent = 'ok: main.js';

// Роутер + экраны
import { initRouter, go } from '/ora-app/src/router.js?v=40';
import home     from '/ora-app/src/ui/home.js?v=40';
import bible    from '/ora-app/src/ui/bible-select.js?v=40';
import reader   from '/ora-app/src/ui/reader.js?v=40';
import ora      from '/ora-app/src/ui/ora.js?v=40';
import mentor   from '/ora-app/src/ui/mentor.js?v=40';

const app = document.getElementById('app');
const ctx = { go, tg };

initRouter({
  '#/':       ()      => home(app, ctx),
  '#/bible':  ()      => bible(app, ctx),
  '#/read':   ({params}) => reader(app, ctx, params),
  '#/ora':    ()      => ora(app, ctx),
  '#/mentor': ()      => mentor(app, ctx),
  '#/404':    ()      => app.innerHTML = '<div style="padding:16px">Страница не найдена</div>'
});

// В первый запуск — домой
if (!location.hash) go('#/');
