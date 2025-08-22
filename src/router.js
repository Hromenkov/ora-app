// src/router.js
import { renderHome }   from '/ora-app/src/ui/home.js?v=2';
import { renderBible }  from '/ora-app/src/ui/bible.js?v=2';
import { renderReader } from '/ora-app/src/ui/reader.js?v=2';
import { renderOra }    from '/ora-app/src/ui/ora.js?v=1';
import { renderMentor } from '/ora-app/src/ui/mentor.js?v=1';

export function startRouter() {
  const app = document.getElementById('app');

  function parseHash() {
    const [path, qs=''] = (location.hash || '#/').slice(1).split('?');
    const params = Object.fromEntries(new URLSearchParams(qs));
    return { path: '/'+(path||''), params };
  }

  async function render() {
    const { path, params } = parseHash();
    switch (path) {
      case '/':
      case '/home':
        renderHome(app);
        break;
      case '/bible':
        renderBible(app);
        break;
      case '/reader':
        renderReader(app, params); // params: book, ch, tr
        break;
      case '/ora':
        renderOra(app);
        break;
      case '/mentor':
        renderMentor(app);
        break;
      default:
        location.hash = '#/home';
    }
  }

  window.addEventListener('hashchange', render);
  render();
}
