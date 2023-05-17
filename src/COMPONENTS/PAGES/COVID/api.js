import axios from 'axios';

const fetchCovidStats = async () => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    // const response = await axios.get('https://limitless-lake-38337.herokuapp.com/api/covid');

    return response;
  } catch (error) {
    console.error('Error fetching COVID stats:', error.message);
    return null;
  }
};

export { fetchCovidStats };
