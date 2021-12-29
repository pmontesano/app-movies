const axios = require('axios');

export const doRequest = (url, params) => {
  return axios.get(url, params);
};
