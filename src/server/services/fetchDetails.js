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

const getSimilar = (movieId) => {
  return doRequest(
    `${apiUrl}/movie/${movieId}/similar?api_key=${apiKey}&language=${language}&page=1`
  );
};

const getVideo = (movieId) => {
  return doRequest(
    `${apiUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US&page=1`
  );
};

const ServiceDetails = (movieId) => ({
  get: get(movieId),
  getSimilar: getSimilar(movieId),
  getVideo: getVideo(movieId),
});

export default ServiceDetails;
