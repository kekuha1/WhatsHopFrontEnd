import * as React from "react";
import { useParams } from "react-router-dom";
import Review from "../model/Review";
import { useEffect, useState } from "react";
import { ReviewsList } from "./ReviewsList";
// import { fetchReviews } from '../services/ReviewServices';
import ReviewForm from "./ReviewForm";
import { fetchReviews } from "../services/ReviewServices";

function ReviewsRoute() {
  const { id, name } = useParams<{ id: string; name: string }>();

  const [breweryId, setBreweryId] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    function loadReviews() {
      fetchReviews().then(setReviews);
    }

    if (id) {
      setBreweryId(id);
    }

    loadReviews();
  }, [id, fetchReviews]);

  return (
    <div className="ReviewsRoute">
      <h1>Reviews for {name}</h1>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>Loading reviews...</p>
      )}
      <ReviewForm brewery_id={breweryId} />
    </div>
  );
}

export default ReviewsRoute;
