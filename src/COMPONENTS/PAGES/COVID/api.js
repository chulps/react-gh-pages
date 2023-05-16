import axios from 'axios';

// const fetchCovidStats = async () => {
//   try {
//     const options = {
//       method: 'GET',
//       url: 'https://Covid&#8210;193.p.rapidapi.com/statistics',
//       headers: {
//         'X-RapidAPI-Key': '9f5d0c8553msh7e4cfdabfc5e0f9p112f57jsnde15b5674f41',
//         'X-RapidAPI-Host': 'Covid&#8210;193.p.rapidapi.com',
//       },
//     };
//     const response = await axios.request(options);
//     return { data: response.data.response, error: null };
//   } catch (err) {
//     return { data: null, error: err.message };
//   }
// };


// Import axios (you should have axios installed in your React project)

const fetchCovidStats = async () => {
  try {
    const response = await axios.get('https://limitless-lake-38337.herokuapp.com/api/covid');
    return response;
  } catch (error) {
    console.error('Error fetching COVID stats:', error.message);
    return null;
  }
};

export { fetchCovidStats };
