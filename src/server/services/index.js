const axios = require('axios');

const apiKey = '93bdccf8057252978f579b4d00437c7e';

const doRequest = () => (url, params) => {
  return axios.get(url, params);
};

// listings movies
const get = (req) => () =>
  doRequest(req)(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    {
      responseType: 'json',
    }
  );

const Service = (req) => {
  if (!req) {
    // eslint-disable-next-line
    console.warn('services/searches: you must provide a req object');
  }
  return {
    get: get(req),
  };
};

export default Service;
