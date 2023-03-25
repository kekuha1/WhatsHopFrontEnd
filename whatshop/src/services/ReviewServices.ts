import axios from 'axios';
import Review from '../Model/Review';


const baseUrl = process.env.REACT_APP_BASE_URL || ""

export async function fetchReviews():Promise<Review[]> {
    return await axios.get<Review[]>(`${baseUrl}/reviews`)
    .then((res) => res.data)
}

export async function addReview (review:Review):Promise<Review> {
    return await axios.post<Review>(`${baseUrl}/reviews`, review).then((res) => res.data)
}