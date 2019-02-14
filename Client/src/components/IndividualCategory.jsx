import React from 'react';
import styled from 'styled-components';

const IndividualCategory = props => (
  <CategorySpan>{props.category}</CategorySpan>
);
export default IndividualCategory;

const CategorySpan = styled.span`
  margin: 3px;
`;
