const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});

let reviewSchema = new mongoose.Schema({
  restaurantId: Number,
  rating: {
    overall: Number,
    food: Number,
    service: Number,
    ambience: Number,
    value: Number
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
          value: Number
      }
  }]

});

let Review = mongoose.model('Review', reviewSchema);

Review.create({ restaurantId: 1009, reviewId: 2000 }, function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results)
    }
});

module.exports Review = Review;