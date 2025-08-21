// простой роутер с историей
const routes = new Map();
const root = () => document.getElementById('app');

export const router = {
  register(name, render) { routes.set(name, render); },
  go(name, params = {}) {
    const el = root();
    el.innerHTML = '';
    const render = routes.get(name);
    if (!render) throw new Error(`Route not found: ${name}`);
    render(el, params);
    if (window.Telegram?.WebApp) {
      const stack = window.__stack || (window.__stack = []);
      stack.push(name);
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(() => router.back());
    }
    window.scrollTo(0,0);
  },
  back() {
    const stack = window.__stack || [];
    stack.pop(); // текущий
    const prev = stack.pop() || 'home';
    router.go(prev);
    if (!stack.length && window.Telegram?.WebApp) {
      window.Telegram.WebApp.BackButton.hide();
    }
  }
};
