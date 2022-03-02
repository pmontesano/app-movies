import { doRequest } from './rest-client';
import { config } from '../../config/default-config';

const { apiKey, apiUrl } = config;

// search movies
const search = (query, page = 1) =>
  doRequest(
    `${apiUrl}/search/movie?query=${query}&api_key=${apiKey}&page=${page}`
  );

const ServicesSearch = (query) => ({
  search: search(query),
});

export default ServicesSearch;
