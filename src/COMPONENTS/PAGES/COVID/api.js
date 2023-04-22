import axios from 'axios';
 const date = new Date();
 console.log(date);
const fetchCovidStats = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': '9f5d0c8553msh7e4cfdabfc5e0f9p112f57jsnde15b5674f41',
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
