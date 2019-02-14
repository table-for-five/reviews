import React from 'react';
import styled from 'styled-components';
import IndividualCategory from './IndividualCategory';

const RatingCategories = props => (
  <Category>
    {Object.keys(props.categories).map(category => (
      <IndividualCategory category={category} />
    ))}
  </Category>
);

export default RatingCategories;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
