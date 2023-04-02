import axios from "axios";
import Favorites from "../model/Favorites";

const baseUrl = process.env.REACT_APP_BASE_URL || "";

export async function fetchFavoritesByUserId(user: string): Promise<Favorites[]> {
  return await axios
    .get<Favorites[]>(`${baseUrl}/user/${user}`)
    .then((res) => res.data);
}

export async function addFavorite(favorite: Favorites): Promise<Favorites> {
  return await axios
    .post<Favorites>(`${baseUrl}/user/`, favorite)
    .then((res) => res.data);
}