import ServiceDetails from '../../server/services/fetchDetails';

/**
 * Fetch movie details
 */
exports.fetchMovieDetails = (req, res, next) => {
  const { moviename } = req.params;
  ServiceDetails(moviename)
    .get.then((data) => {
      res.locals.initialState = data.data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};
