// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  const reviews = props.reviews.map(review =>
    <div className='review'>
      <h3>{review.display_title} </h3>
      <span> BY {review.byline}</span>
      <p> {review.summary_short} </p>
    </div>
  )
  return (
    <div className='review-list'>
      {reviews}
    </div>
  )
}

export default MovieReviews
