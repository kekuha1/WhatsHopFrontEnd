import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import Review from "../model/Review";
import { useEffect, useState } from "react";
import { ReviewsList } from "./ReviewsList";
// import { fetchReviews } from '../services/ReviewServices';
import ReviewForm from "./ReviewForm";
import { fetchReviewsByBrewId } from "../services/ReviewServices";

function ReviewsRoute() {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  const [breweryId, setBreweryId] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
  if (id) {
    setBreweryId(id);
  }
}, [id]);

useEffect(() => {
  if (breweryId) {
    fetchReviewsByBrewId(breweryId).then(setReviews);
  }
}, [breweryId]);

  return (
    <div className="ReviewsRoute">
      <ReviewForm brewery_id={breweryId} />
      <h1>Reviews for {name}</h1>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <h3>No reviews yet!</h3>
      )}
      
    </div>
  );
}


export default ReviewsRoute;
