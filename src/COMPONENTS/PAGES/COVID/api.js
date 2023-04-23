import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env)

const date = new Date();
console.log(date);

const fetchCovidStats = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': process.env.COVID_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return { data: response.data.response, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
};

export { fetchCovidStats };
