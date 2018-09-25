import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: []
  }

  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.results
      }))
  }

  
  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" handleSearchChange={this.handleSearchChange}/>
          <button type="submit"> Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
