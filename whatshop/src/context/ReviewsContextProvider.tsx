import { ReactNode, useEffect, useState } from "react";
import Review from "../model/Review";
import { addReview, fetchReviews } from "../services/ReviewServices";
import ReviewsContext from "./ReviewsContext";

interface Props {
  children: ReactNode;
}

const ReviewsContextProvider = ({ children }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {}, []);
  const addReviewHandler = async (review: Review)=>{
    await addReview(review)
  const reviewArray = await fetchReviews()
  setReviews(reviewArray)
  }
  return (
    <ReviewsContext.Provider value={{reviews, addReviewHandler}}>{children}</ReviewsContext.Provider>
  );
};
export default ReviewsContextProvider;
