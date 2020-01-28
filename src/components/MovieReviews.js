import React from 'react';

let MovieReviews = ({ reviews }) => <div className='review-list'> {reviews.map(Review)} </div>
MovieReviews.defaultProps = {
  reviews: []
}


let Review = ({
  headline, byline, link, summary_short
}) => {
  return (
    <div key={headline} className='review'>
      <header>
        <a className='review-link' href={link.url}> {headline} </a>
        <span classname='author'> {byline} </span>
      </header>
      <blockquote> {summary_short} </blockquote>
    </div>
  )
}



export default MovieReviews;
