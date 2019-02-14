import React from 'react';
import IndividualRating from './IndividualRating';

const Ratings = (props) => {
  console.log(props.ratingBar);
  return (
    <span className="ratings">

      {' '}
      {Object.values(props.ratingBar).map(rating => <IndividualRating rating={rating} />)}
    </span>
  );
};

export default Ratings;
