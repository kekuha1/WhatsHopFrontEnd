import { createContext } from "react";
import { FavoritesContextModel } from "./FavoritesContextModel";



const defaultValue:FavoritesContextModel = {
    favorites: [],
    addFavorite: () => Promise.resolve(),
    deleteFavorite: () => Promise.resolve(),
}

const FavoritesContext = createContext(defaultValue)

export default FavoritesContext;