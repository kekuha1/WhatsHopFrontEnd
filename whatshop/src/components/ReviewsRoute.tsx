import * as React from 'react';
import { useParams } from 'react-router-dom';
import Review from '../model/Review'
import { useEffect, useState } from 'react';
import { ReviewsList } from './ReviewsList';
import { fetchReviews } from '../services/ReviewServices';
import ReviewForm from './ReviewForm';


function ReviewsRoute () {
  //used to capture the id for the brewery
  const { id } = useParams<{id:string}>();
  //used to capture the brewery name to display it to the screen
  const { name } = useParams<{name:string}>();

  const [brewery_id, setBreweryId] = useState<string>();

  useEffect(() => {
    setBreweryId(id);
    
    async function loadReviews() {
      const reviews = await fetchReviews();
      setReviews(reviews);
    }
    
    loadReviews();
  }, [id]);

  const [reviews, setReviews] = useState<Review[]>();

  return (
    <div className='ReviewsRoute'>
      <h1>Reviews for {name}</h1>
      {reviews ? <ReviewsList reviews={reviews}/> : <p>Loading reviews...</p>}
      <ReviewForm brewery_id={brewery_id}/>
    </div>
  );
}
export default ReviewsRoute;

