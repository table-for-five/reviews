const express = require('express')
const app = express()
const path = require('path')
const port = 7888

const db = require('../database/index.js')

// app.get('/', (req, res) => res.send())
// app.use(express.static('../client/public/dist'))
app.use(express.static(__dirname + '/../public/dist'))

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