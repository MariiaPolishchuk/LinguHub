const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Порт, который будет слушать сервер

// Статическое обслуживание файлов из папки "public"
app.use(express.static(path.join(__dirname, 'public')));

// Обработка всех запросов, кроме статических файлов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
