const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

  const body = fs.readFileSync(filePath)
  res.end(body)
  })
server.listen(process.env.PORT || 3002)
console.log('Server started')