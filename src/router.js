// src/router.js
import { renderHome }   from './ui/home.js';
import { renderBible }  from './ui/bible.js';
import { renderOra }    from './ui/ora.js';
import { renderMentor } from './ui/mentor.js';
import { renderReader } from './ui/reader.js';

export function startRouter(root) {
  const routes = {
    '#/home'   : (p) => renderHome(root, p),
    '#/bible'  : (p) => renderBible(root, p),
    '#/ora'    : (p) => renderOra(root, p),
    '#/mentor' : (p) => renderMentor(root, p),
    '#/reader' : (p) => renderReader(root, p),
  };

  function parseHash() {
    const [path, queryStr=''] = location.hash.split('?');
    const params = Object.fromEntries(new URLSearchParams(queryStr));
    return { path, params };
  }

  function render() {
    const { path, params } = parseHash();
    const handler = routes[path] || routes['#/home'];
    handler(params);
  }

  window.addEventListener('hashchange', render);
  if (!location.hash) location.hash = '#/home';
  render();
}
