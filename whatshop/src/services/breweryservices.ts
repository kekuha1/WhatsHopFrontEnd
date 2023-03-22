import axios from "axios";
import Brewery from "../model/Brewery";
export async function GetAllBreweries(): Promise<Brewery[]> {
  return (await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries?per_page=12')).data
  
  
}