// covid api call

import axios from 'axios';

const fetchCovidStats = async () => {
  try {
    const response = await axios.get('https://limitless-lake-38337.herokuapp.com/api/covid-stats');
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

export { fetchCovidStats };
