const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  
  const publicPath = './public'

  let body = null

  try {
    body = fs.readFileSync(`${publicPath}${req.url}`)
    
  } catch(e) {
    console.log(e)
    body = fs.readFileSync(`${publicPath}/index.html`)
  }

   res.end(body)
  })
server.listen(process.env.PORT || 3002)
console.log('Server started')