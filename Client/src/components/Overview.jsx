import React from 'react';
import styled from 'styled-components';
import Ratings from './Ratings';
import RatingCategories from './RatingCategories';
import BarChart from './BarChart';

const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: {},
      reviews: [],

    };
  }

  componentDidMount() {
    axios.get('/restaurants', {
    })
      .then((response) => {
        console.log(response.data.rating);
        this.setState({ rating: response.data.rating });
        this.setState({ reviews: response.data.reviews });
        console.log(response.data.reviews.length);
        // console.log(response.data.reviews);
        console.log('res', response);
      })
      .catch((error) => {
        console.log('err', error);
      });
  }


  render() {
    return (
      <All>
        <div>
          <Header>
            {/* <p> */}
            What
            {' '}
            {this.state.reviews.length}
            {' '}
            People Are Saying
            {/* </p> */}
          </Header>
          <Flex>
            <div className="container">
              <LeftSide>

                <Description>
                  <Paragraph>Overall ratings and reviews</Paragraph>
                </Description>
                <Disclosure>
                  Reviews can only be made by diners who have eaten at this restaurant
                </Disclosure>

                <RatingsFlex>
                  <Ratings ratingBar={this.state.rating} />
                  <RatingCategories categories={this.state.rating} />
                </RatingsFlex>

              </LeftSide>
              <Left>Noise - Moderate</Left>
              <div>81% of people would recommend it to a friend</div>
            </div>
            <RightSide>
              <BarChart chart={this.state.reviews} />
            </RightSide>

          </Flex>
        </div>
      </All>
    );
  }
}

export default Overview;

const All = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  color: black;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: no wrap;
  padding-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

const Disclosure = styled.div`
  padding-top: 0.5rem;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  display: block;
`;

const RatingsFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const LeftSide = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  padding: 2rem 0 0;
  display: block;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;

`;

const Left = styled.div`
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0…l='%23333' x='5' y='14' width='3' height='6' rx='.5'/%3E%3C/g%3E%3C/svg%3E);
`;
