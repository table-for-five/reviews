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
      individualOverall: Number,
      individualFood: Number,
      individualService: Number,
      individualAmbience: Number,
      individualValue: Number,
    },
  }],

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);


const findOneRestaurant = function (callback) {
  return Restaurant.findOne({ restaurantId: 26 }, (err, restaurant) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, restaurant);
    }
  });
};

module.exports.Restaurant = Restaurant;
module.exports.findOneRestaurant = findOneRestaurant;
