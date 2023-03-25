import { createContext } from "react";
import Review from "../Model/Review";

interface ReviewsContextModel {
  reviews: Review[];
  addReviewHandler: (review: Review)=> void;
}

const defaultValues: ReviewsContextModel = {
  reviews: [],
  addReviewHandler: (review: Review)=> {}
};

const ReviewsContext = createContext(defaultValues);

export default ReviewsContext;
