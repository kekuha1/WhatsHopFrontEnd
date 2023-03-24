import * as React from 'react';
import { useParams } from 'react-router-dom';
import Brewery from '../model/Brewery'
import { useEffect, useState } from 'react';

export interface IReviewsRouteProps {
  
}

export function ReviewsRoute (props: IReviewsRouteProps) {
  //used to capture the id for the brewery
  const {id} = useParams<{id:string}>();
  console.log(id)
  //used to capture the brewery name to display it to the screen
  const {name} = useParams<{name:string}>();

  // const [reviews, setReviews] = useState<Reviews[]>();
  // useEffect(loadReviews, [])

    // function loadReviews() {
    //   fetchReviews().then(setReviews)
    // }
  
  return (
    <div className='ReviewsRoute'>
      <h1>Reviews for {name}</h1>
      {/* lift up state for reviewslist
      lift up state for ReviewsForm */}
      
    </div>
  );
}
