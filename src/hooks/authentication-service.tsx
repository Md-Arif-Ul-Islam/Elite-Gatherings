import axios from 'axios';

export async function registerUser(userData) {
 
    try {
      const response = await axios.post('http://localhost:5000/register', userData,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Successfully Created User", response.data); 
      return response.data;

    } catch (error) {
      if (error.response) {
        // Request made and server responded with a status code other than 2xx
        console.log('Server responded with error:', error.response.data);
        console.log('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made, but no response was received
        console.log('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.log('Error in request setup:', error.message);
      }
      throw error;
    }
    
  }
  