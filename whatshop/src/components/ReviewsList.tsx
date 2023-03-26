import * as React from 'react';
import Review from '../model/Review';

export interface IReviewsListProps {
    reviews: Review[]
}

export function ReviewsList ({reviews} : IReviewsListProps) {
  return (
    <div className='ReviewsList'>
        <ul>
            {reviews.map(rev => <li>
                <h3>Rating: {rev.rating}</h3>
                <p>Name: {rev.fullName}</p>
                <p>Beer Selection: {rev.beerSelection}</p>
                <p>Good Brewery Atmosphere: {rev.atmosphere}</p>
                <p>Comment: {rev.comment}</p>
            </li>)}
        </ul>
      
    </div>
  );
}
