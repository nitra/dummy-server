const http = require('http')

const app = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json')

  if (req.url.includes('graphql')) {
    res.end(
      '{"data": { "__schema": { "types": [ { "name": "Query", "kind": "OBJECT" } ], "queryType": { "name": "Query" } } } }'
    )
  } else {
    res.end('{}')
  }
})
app.listen(80)
