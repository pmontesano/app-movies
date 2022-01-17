import { doRequest } from './rest-client';
import { config } from '../../config/default-config';

const { apiKey, apiUrl, language } = config;

// listings movies details
const get = (movieId) => {
  return doRequest(
    `${apiUrl}/movie/${movieId}?api_key=${apiKey}&language=${language}`,
    {
      responseType: 'json',
    }
  );
};

const ServiceDetails = (movieId) => ({
  get: get(movieId),
});

export default ServiceDetails;
