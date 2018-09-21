import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a7bc9f43851448909af33c9fdf4de7ae';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;



export default class SearchableMovieReviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
             <form onSubmit={this.handleSubmit}>
                 <input onChange={this.handleChange} type="text" />
                 <input type="submit" />
             </form>
             <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}