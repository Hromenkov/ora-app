// src/main.js

// Подключаем стили
import "./styles/base.css";

// Находим контейнер
const app = document.getElementById("app");

// Рендерим стартовый экран
app.innerHTML = `
  <h1>Привет, ORA!</h1>
  <p>Это твое первое приложение 🎉</p>
`;
