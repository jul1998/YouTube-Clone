import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
const options = {
  method: 'GET',
  params: {part: 'snippet', 
  videoId: 'M7FIvfx5J10',
    maxResults: '50',
},
  headers: {
    'X-RapidAPI-Key': '345900ee59msh7c0deba68a260cap1ba235jsna38becc7594c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    try {
        const response = await axios.request(BASE_URL+url,options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }