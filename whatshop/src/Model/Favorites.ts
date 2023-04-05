import Brewery from "./Brewery";

export default interface Favorites {
  _id?: string;
  uid?: string;
  breweryId: Brewery["id"];
  brewery: Brewery;
}