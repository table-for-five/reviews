import React from 'react';

class Overview extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="ratings-container">
        <div className="header">What 2944 People Are Saying</div>
        <div className="flex">
          <div className="firstBox">
            <div className="description">Overall ratings and reviews</div>
            <div className="disclosure">Reviews can only be made by diners who have eaten at this restaurant</div>
          </div>
          <div className="secondBox">
            <h1>test</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
