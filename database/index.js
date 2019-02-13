const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');
// mongoose.connect("mongodb://localhost:7888/reviews", { useNewUrlParser: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

const restaurantSchema = new mongoose.Schema({
  restaurantId: Number,
  rating: {
    avgOverall: Number,
    avgFood: Number,
    avgService: Number,
    avgAmbience: Number,
    avgValue: Number,
  },
  reviews: [{
    username: String,
    date: String,
    location: String,
    reviewInfo: String,
    rating: {
      overall: Number,
      food: Number,
      service: Number,
      ambience: Number,
      value: Number,
    },
  }],

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);


const findOneRestaurant = function (callback) {
  return Restaurant.findOne({ restaurantId: 5 }, (err, restaurant) => {
    if (err) {
      callback(err, null);
      console.log('error');
    } else {
      callback(null, restaurant);
    }
  });
};


// const findOneRestaurant = db.restaurants.findOne({ restaurantId: 2 });


module.exports.Restaurant = Restaurant;
module.exports.findOneRestaurant = findOneRestaurant;
