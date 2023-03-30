import axios from "axios";
import Brewery from "../model/Brewery";

export async function GetAllBreweries(): Promise<Brewery[]> {
  const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries?per_page=12');
  return response.data;
}

export async function queryBreweries(city: string, state: string): Promise<Brewery[]> {
  const params: any = {};
  if (city) {
    params.by_city = encodeURIComponent(city.replace(/\s+/g, '_'));
  }
  if (state) {
    console.log(typeof state)
    params.by_state = encodeURIComponent(state.replace(/\s+/g, '_'));
  }
  try {
    const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries?per_page=12', { params });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function GetBreweryById(id: string) {
  return axios.get<Brewery>(`https://api.openbrewerydb.org/v1/breweries/${id}`
  )
}