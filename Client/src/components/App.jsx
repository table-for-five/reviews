import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
      return (
        <div>
         < Overview />
        </div>
      );
    }
}


class Overview extends React.Component {
    render () {
      return (
        <div className="ratingscontainer">
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
      )
    }
}
export default App;