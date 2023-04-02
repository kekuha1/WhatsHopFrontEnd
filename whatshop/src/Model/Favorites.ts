import Brewery from "./Brewery";

export default interface Favorites {
    _id?: string;
    uid?: string;
    Brewery: Brewery;
}