import React from 'react';
import styled from 'styled-components';

const IndividualRating = props => (
  <RatingSpan>{props.rating}</RatingSpan>
);
export default IndividualRating;

const RatingSpan = styled.span`
  margin: 3px;
  position: relative;
  padding: 0 25px;
`;
