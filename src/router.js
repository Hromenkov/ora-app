export function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

export function getPathAndQuery() {
  const raw = location.hash || '#/';
  const [path, q = ''] = raw.split('?');
  const params = {};
  q.split('&').filter(Boolean).forEach(p=>{
    const [k,v] = p.split('=');
    params[decodeURIComponent(k)] = decodeURIComponent(v ?? '');
  });
  return { path, params };
}

let routes = {};
export function initRouter(map) {
  routes = map;
  addEventListener('hashchange', render);
  render();
}

function render() {
  const { path, params } = getPathAndQuery();
  const handler = routes[path] || routes['#/404'] || (()=>{});
  handler({ params, go });
}
