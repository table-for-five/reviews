import React from 'react';

const axios = require('axios');

class Overview extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/restaurants', {
    })
      .then((response) => {
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
