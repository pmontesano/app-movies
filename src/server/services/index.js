const axios = require('axios');
import { config } from '../../config/default-config';

const { apiKey, apiUrl } = config;

const doRequest = (url, params) => {
  return axios.get(url, params);
};

// listings movies
const get = (param) => () =>
  doRequest(`${apiUrl}/${param}?api_key=${apiKey}&language=es-AR&page=1`, {
    responseType: 'json',
  });

const Service = (param) => {
  return {
    get: get(param),
  };
};

export default Service;
