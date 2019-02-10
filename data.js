const faker = require('faker')
const db = require('./database/index.js')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function overallAvg (arr) {
//     let sum = 0;
//     for (var i = 0; i < reviewArr; i++) {
//         sum += arr.rating.overall;
//     }
//     return sum/arr.length;
// }


function newReview () {
    let reviewArr = [];
    for (let i = 1; i <= getRandomInt(50); i++) {
        let reviews = {
            username: faker.internet.userName(),
            date: faker.date.between('2018-05-01', '2019-02-01'),
            location: faker.address.city() + ', ' + faker.address.stateAbbr(),
            reviewInfo: faker.lorem.paragraph({min:1, max:3}),
            rating: {
                overall: faker.random.number({min:1, max:5}),
                food: faker.random.number({min:1, max:5}),
                service: faker.random.number({min:1, max:5}),
                ambience: faker.random.number({min:1, max:5}),
                value: faker.random.number({min:1, max:5})
            }
        }
        reviewArr.push(reviews);
    }
    // reviewArr.reduce((acc, value) => acc += value.overall, 0) / reviewArr.length;
    // reviewArr.reduce((acc, value) => acc += value.food, 0) / reviewArr.length;
    // reviewArr.reduce((acc, value) => acc += value.service, 0) / reviewArr.length;
    // reviewArr.reduce((acc, value) => acc += value.ambience, 0) / reviewArr.length;
    // reviewArr.reduce((acc, value) => acc += value.value, 0) / reviewArr.length;
    //save  each

    return reviewArr
}

function newRestaurant (i) {
    let restaurantId = i
    reviews = newReview();
    return {
        restaurantId,
        reviews
    }
}

var restaurantArr = [];
for (let i = 1; i < 100; i++) {
  restaurantArr.push(newRestaurant());
}

db.Restaurant.insertMany(restaurantArr, function(err, docs) {
  if (err) {
    console.error('failed')
  } else {
    console.log('saved')
  }
});


//or one big array with all reviews ... use insert many mongodb

// rating: [{
//     overall: faker.random.number({min:1, max:5}),
//     food: faker.random.number({min:1, max:5}),
//     service: faker.random.number({min:1, max:5}),
//     ambience: faker.random.number({min:1, max:5}),
//     value: faker.random.number({min:1, max:5})
//   }],