const faker = require('faker');
const db = require('./database/index.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newReview() {
  const reviewArr = [];
  for (let i = 1; i <= getRandomInt(50); i++) {
    const reviews = {
      username: faker.internet.userName(),
      date: faker.date.between('2018-05-01', '2019-02-01'),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      reviewInfo: faker.lorem.paragraph(5),
      rating: {
        overall: faker.random.number({ min: 1, max: 5 }),
        food: faker.random.number({ min: 1, max: 5 }),
        service: faker.random.number({ min: 1, max: 5 }),
        ambience: faker.random.number({ min: 1, max: 5 }),
        value: faker.random.number({ min: 1, max: 5 }),
      },
    };
    reviewArr.push(reviews);
  }

  return reviewArr;
}


function newRestaurant(i) {
  const restaurantId = i;

  const reviews = newReview();

  const rating = {};
  rating.avgOverall = Number((reviews.reduce((acc, value) => acc += value.rating.overall, 0)
    / reviews.length).toFixed(1));
  rating.avgFood = Number((reviews.reduce((acc, value) => acc += value.rating.food, 0)
    / reviews.length).toFixed(1));
  rating.avgService = Number((reviews.reduce((acc, value) => acc += value.rating.service, 0)
    / reviews.length).toFixed(1));
  rating.avgAmbience = Number((reviews.reduce((acc, value) => acc += value.rating.ambience, 0)
    / reviews.length).toFixed(1));
  rating.avgValue = Number((reviews.reduce((acc, value) => acc += value.rating.value, 0)
    / reviews.length).toFixed(1));


  return {
    restaurantId,
    rating,
    reviews,
  };
}

const restaurantArr = [];

for (let i = 1; i < 100; i++) {
  restaurantArr.push(newRestaurant(i));
}

db.Restaurant.insertMany(restaurantArr, (err, docs) => {
  if (err) {
    console.error('failed');
  } else {
    console.log('saved');
  }
});
