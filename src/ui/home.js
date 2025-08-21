// src/ui/home.js
export function renderHome() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="home">
      <h1>📖 Ora App</h1>
      <p>Христианское приложение для духовного роста</p>
      <button id="open-reader">Открыть читалку</button>
    </div>
  `;

  // обработчик кнопки
  document.getElementById("open-reader").addEventListener("click", () => {
    window.location.hash = "#reader";
  });
}
