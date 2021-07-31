const http = require('http')

const app = http.createServer(function (_req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end('{}')
})
app.listen(80)
