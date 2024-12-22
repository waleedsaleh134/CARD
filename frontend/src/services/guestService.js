import axios from 'axios';

const API_URL = 'http://localhost:5000/api/guests';

const guestService = {
  createGuest: async (guest) => {
    const response = await axios.post(API_URL, guest);
    return response.data;
  }
};

export default guestService;
