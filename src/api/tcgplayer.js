import axios from 'axios';

const TCGPLAYER_API_BASE_URL = 'https://api.tcgplayer.com/v1.37.0/'; // Example URL, use the correct one
const TCGPLAYER_API_KEY = 'your-api-key'; // Replace with your actual API key

const apiClient = axios.create({
  baseURL: TCGPLAYER_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${TCGPLAYER_API_KEY}`,
    'Accept': 'application/json',
  }
});

export default apiClient;
