import Favorites from "../model/Favorites";


export interface FavoritesContextModel  {
  favorites: Favorites[];
  addFavorite: (favorite: Favorites) => Promise<void>;
  deleteFavorite: (breweryId: string) => Promise<void>;
};