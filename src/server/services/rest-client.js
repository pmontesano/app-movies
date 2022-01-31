const axios = require('axios');

export const doRequest = (url, params) => axios.get(url, params);
