import React from 'react';
import Ratings from './Ratings';
import RatingCategories from './RatingCategories';

const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: {},
    };
  }

  componentDidMount() {
    axios.get('/restaurants', {
    })
      .then((response) => {
        // console.log(response.data.rating);
        this.setState({ rating: response.data.rating });
        console.log('res', response);
      })
      .catch((error) => {
        console.log('err', error);
      });
  }


  render() {
    return (
      <div className="ratings-container">
        <div className="header">Whats 2944 People Are Saying</div>
        <div className="flex">
          <div className="firstBox">
            <div className="description">Overall ratings and reviews</div>
            <div className="disclosure">Reviews can only be made by diners who have eaten at this restaurant</div>
            <div>
              {/* <h6>{this.state.rating.avgAmbience}</h6> */}
              <Ratings ratingBar={this.state.rating} />
              <RatingCategories categories={this.state.rating} />
            </div>
          </div>
          <div className="secondBox">
            <h1>
              Placeholder
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
