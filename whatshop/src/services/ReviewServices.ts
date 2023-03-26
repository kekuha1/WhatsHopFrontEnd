import axios from "axios";
import Review from "../model/Review";

const baseUrl = process.env.REACT_APP_BASE_URL || "";

export async function fetchReviewsByBrewId(breweryId: string): Promise<Review[]> {
  return await axios
    .get<Review[]>(`${baseUrl}/review/${breweryId}`)
    .then((res) => res.data);
}

export async function addReview(review: Review): Promise<Review> {
  return await axios
    .post<Review>(`${baseUrl}/review/`, review)
    .then((res) => res.data);
}
