import axios from 'axios';
const apikey=process.env.REACT_APP_API_KEY;
async function getWishlist() {
  //const API_KEY = '5bc69216d3539e8aedc6878e89ce487d'; 

  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/550', {
      params: {
        api_key: apikey,
        language: 'en-US',
      },
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Response Data:', response.data);
  } catch (error) {
    if (error.response) {

      console.error('Data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      
      console.error('Error:', error.message);
    }
    console.error('Full Error Object:', error);
  }
}

getWishlist();

export default axios;
  