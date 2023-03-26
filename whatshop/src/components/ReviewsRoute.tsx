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
    function loadReviews() {
      fetchReviewsByBrewId(breweryId).then(setReviews);
    }

    if (id) {
      setBreweryId(id);
    }

    loadReviews();
  }, [id, breweryId]);

  return (
    <div className="ReviewsRoute">
      <ReviewForm brewery_id={breweryId} />
      <h1>Reviews for {name}</h1>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>Loading reviews...</p>
      )}
      
    </div>
  );
}

export default ReviewsRoute;
