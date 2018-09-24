import React from 'react';

const Review = (props) =>
  <div className="review">
    <h3>{props.review.headline}</h3>
    <p>{props.review.summary_short}</p>
  </div>

export default Review

// Review - resp.results:
// {
//   "display_title": "Colette",
//   "mpaa_rating": "R",
//   "critics_pick": 1,
//   "byline": "MANOHLA DARGIS",
//   "headline": "Review: ‘Colette’ and One Woman’s Lust for Life",
//   "summary_short": "Keira Knightley stars in the attractive biographical movie “Colette,” which takes a light, enjoyably fizzy approach to its subject.",
//   "publication_date": "2018-09-20",
//   "opening_date": null,
//   "date_updated": "2018-09-24 02:44:21",
//   "link": {
//     "type": "article",
//     "url": "http://www.nytimes.com/2018/09/20/movies/colette-review.html",
//     "suggested_link_text": "Read the New York Times Review of Colette"
//   },
//   "multimedia": {
//     "type": "mediumThreeByTwo210",
//     "src": "https://static01.nyt.com/images/2018/09/19/arts/19colette1/merlin_143890539_b04f8a07-099a-46e2-9af4-3de2e7185111-mediumThreeByTwo210.jpg",
//     "width": 210,
//     "height": 140
//   }
// }
