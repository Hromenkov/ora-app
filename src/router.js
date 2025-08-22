// src/router.js
import { renderHome } from './ui/home.js?v=ui14';
import { renderBibleSelect } from './ui/bible-select.js?v=ui14';
import { renderReader } from './ui/reader.js?v=ui14';
import { renderOra } from './ui/ora.js?v=ui14';
import { renderMentor } from './ui/mentor.js?v=ui14';

export function startRouter(app) {
  const routes = {
    '':          () => renderHome(app),
    '#home':     () => renderHome(app),
    '#bible':    () => renderBibleSelect(app),
    '#reader':   (params) => renderReader(app, params),
    '#ora':      () => renderOra(app),
    '#mentor':   () => renderMentor(app),
  };

  function parseHash() {
    const [path, query=''] = location.hash.split('?');
    const params = Object.fromEntries(new URLSearchParams(query));
    return { path, params };
  }

  function render() {
    const { path, params } = parseHash();
    (routes[path] || routes[''])(params);
  }

  window.addEventListener('hashchange', render);
  render();
}
