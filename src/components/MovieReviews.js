import React from 'react';
import Review from './Review'

const MovieReviews = (props) => {

  // const reviews = props.reviews.map( review =>
  //   < Review key={review.link.url} review={review}/>
  // )

  const reviews = props.reviews.map( review =>
    <div className="review">
      <h3>{review.headline}</h3>
      <p>{review.summary_short}</p>
    </div>
  )

  return (
    <div className="review-list">
      { reviews }
    </div>
  )
}


export default MovieReviews
