import axios from 'axios';

interface BreweryImageResponse {
  url: string;
}

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API;

export const GetBreweryImage = async (latitude?: string, longitude?: string): Promise<BreweryImageResponse> => {
  if (!latitude || !longitude) {
    return { url: '' };
  }

  const response = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x400&maptype=roadmap&markers=color:red%7Clabel:B%7C${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`, { responseType: 'blob' });

  const url = URL.createObjectURL(response.data);
  console.log('Image URL:', url);

  return { url };
};