import { doRequest } from './rest-client';
import { config } from '../../config/default-config';
import { url } from '../../config/url';

const { apiKey, apiUrl, language } = config;

const { categories } = url;

// listings movies
const get = (pathParam, movieParam, page) =>
  doRequest(
    `${apiUrl}/${categories[pathParam]}/${movieParam}?api_key=${apiKey}&language=${language}&page=${page}`,
    {
      responseType: 'json',
    }
  );

const getDetails = (pathParam, movieParam, page = 1) =>
  doRequest(
    `${apiUrl}/${categories[pathParam]}/${movieParam}?api_key=${apiKey}&language=${language}&page=${page}`,
    {
      responseType: 'json',
    }
  );

const Service = (pathParam, movieParam, page) => ({
  get: get(pathParam, movieParam, page),
  getDetails: getDetails(pathParam, movieParam, page),
});

export default Service;
