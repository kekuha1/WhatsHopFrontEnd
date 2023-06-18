import axios from 'axios';
import { Places } from '../model/Places';


const baseUrl = process.env.REACT_APP_BASE_URL || '';

export async function fetchGooglePlacesRequest(name: string, city: string, state: string): Promise<Places> {
  const params: any = {};
  
  if (name) {
    params.name = name.replace(/\s+/g, '+');
  }
  if (city) {
    params.city = city.replace(/\s+/g, '+');
  }
  if (state) {
    params.state = state.replace(/\s+/g, '+');
  }
  
  try {
    console.log(params);
    const response = await axios.get<Places>(`${baseUrl}/google-places`, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Google Places data');
  }
}