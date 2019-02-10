const express = require('express')
const app = express()
const port = 7888

const db = require('../database/index.js')

app.use(express.static('public'))

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.get('/restaurants', function(req, res){
  db.Restaurant.find(function(err, docs){
      if (err) {
          res.statusCode = 404;
          res.send('error')
      } else {
          res.send(docs);
      }
  })
})