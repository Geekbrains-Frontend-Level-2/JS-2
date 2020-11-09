// подключаем библиотеку для работы с файловой системой
const fs = require('fs')
// в переменную text считываем содержимое файла script.js (utf8 - кодировка файла)
const text = fs.readFileSync('script.js', 'utf8')
// выводим переменную text в консоль
console.log(text)