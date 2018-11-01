// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) =>
  <div className='review-list'>
    {props.reviews.map(review =>
      <div key={review.id} className='review'>
        <h1>{review.display_title}</h1>
      </div>
    )}
  </div>

export default MovieReviews
