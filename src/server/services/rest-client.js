const axios = require('axios');

const Resclient = () => {
  doRequest = () => (url, params) => {
    return axios.get(url, params);
  };
};

export default Resclient;
