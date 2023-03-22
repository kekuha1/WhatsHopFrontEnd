import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL || ""
export async function GetAllUsers(): Promise<any[]> {
    return (await axios.get(`${baseUrl}/users`)).data
    
    
  }