// подключаем библиотеку для работы с http
const http = require('http')
/**
 * Создаем сервер
 * В качестве аргумента функции createServer передается функция-обработчик запроса
 * В нашем случае, на каждый запрос к серверу будет вызываться console.log('Hello World')
 */
const server = http.createServer((req, res) => {
  // выводим в консоль урл, который запрашивается браузером
  console.log(req.url)
  const body = fs.readFileSync(`./public/index.html`)
  res.end(body)
})
// Вешаем наш сервер на порт 3000 (можно выбрать любой другой)
server.listen(process.env.PORT || 3000)
// Выводим в консоль, что сервер стартовал
console.log('Server started')