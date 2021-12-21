const axios = require('axios');

const apiUrl = 'https://api.themoviedb.org/3/movie';
const apiKey = '93bdccf8057252978f579b4d00437c7e';

const doRequest = () => (url, params) => {
  return axios.get(url, params);
};

// listings movies
const get = (param) => () =>
  doRequest()(`${apiUrl}/${param}?api_key=${apiKey}&language=es-AR&page=1`, {
    responseType: 'json',
  });

const Service = (param) => {
  return {
    get: get(param),
  };
};

export default Service;
