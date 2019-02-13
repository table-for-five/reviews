const express = require('express');

const app = express();

const port = 7888;

const findOne = require('../database/index.js');

// app.get('/', (req, res) => res.send())
// app.use(express.static('../client/public/dist'))
app.use(express.static(`${__dirname}/../public/dist`));

app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get('/restaurants', (req, res) => {
  findOne.findOneRestaurant((err, data) => {
    if (err) {
      res.sendStatus(404);
      res.send('error');
    } else {
      res.send(data);
    }
  });
});
