import Service from '../../server/services';
import { config } from '../../config/default-config';
import { url } from '../../config/url';

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  const {
    categories: { popular },
  } = config;

  const {
    categories: { movie },
  } = url;

  Service(movie, popular)
    .get.then((data) => {
      res.locals.initialState = data.data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};
