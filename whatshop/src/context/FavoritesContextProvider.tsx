import React, { createContext, useContext, useEffect, useState } from "react";
import Favorites from "../model/Favorites";
import { fetchFavoritesByUserId, addFavorite, deleteFavorite } from "../services/favoritesservice";
import FavoritesContext from "./FavoritesContext";

type FavoritesContextProviderProps = {
  children: React.ReactNode;
  userId: string;
};

const FavoritesContextProvider = ({ children, userId }: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<Favorites[]>([]);

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = await fetchFavoritesByUserId(userId);
      setFavorites(favorites);
    };

    getFavorites();
  }, [userId]);

  const handleAddFavorite = async (favorite: Favorites) => {
    const newFavorite = await addFavorite(favorite);
    setFavorites([...favorites, newFavorite]);
  };

  const handleDeleteFavorite = async (id: string) => {
    await deleteFavorite(id);
    setFavorites(favorites.filter((favorite) => favorite._id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite: handleAddFavorite, deleteFavorite: handleDeleteFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider