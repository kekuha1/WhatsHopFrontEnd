import * as React from 'react';
import Review from '../model/Review';

export interface IReviewsListProps {
    reviews: Review[]
}

export function ReviewsList ({reviews} : IReviewsListProps) {
  return (
    <div className='ReviewsList'>
     {reviews.map(rev => (
  <div key={rev._id} className="review-card">
    <div className="card-body">
      <h3 className="card-title">Rating: {rev.rating}</h3>
      <p className="card-text">Name: {rev.fullName}</p>
      <p className="card-text">Beer Selection: {rev.beerSelection}</p>
      <p className="card-text">Good Brewery Atmosphere: {rev.atmosphere}</p>
      <p className="card-text">Comment: {rev.comment}</p>
    </div>
  </div>
))}
      
    </div>
  );
}
