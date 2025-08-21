const routes = new Map();
const root = () => document.getElementById('app');

export const router = {
  register(name, render){ routes.set(name, render); },
  go(name, params = {}){
    const el = root(); el.innerHTML = '';
    const render = routes.get(name);
    if (!render) throw new Error(`Route not found: ${name}`);
    render(el, params);
    window.scrollTo(0, 0);
  }
};

