import React from 'react';
import BarOne from './BarOne';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <BarOne />
      </div>
    );
  }
}

export default BarChart;

/* need to access array of reviews[i]['overall']
// get length of array
//take total overall for 5 and divide by length of array to get percentage for bar */
