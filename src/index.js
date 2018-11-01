import React from 'react'
import ReactDOM from 'react-dom'

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer'

require('es6-promise').polyfill()
require('isomorphic-fetch')

ReactDOM.render(
  <div key='app' className='app'>
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
)
