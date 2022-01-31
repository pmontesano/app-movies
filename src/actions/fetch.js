import ServicesMain from '../server/services';
import ServicesDetails from '../server/services/fetchDetails';

export const fetchInitialData = (data) => async (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  try {
    dispatch({ type: 'FETCH_START', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};

export const fetchThunk =
  (pathParam = 'movie', movieParam = 'popular', page = 1) =>
  async (dispatch) => {
    dispatch({ type: 'FETCH_PENDING' });
    try {
      const data = await ServicesMain(pathParam, movieParam, page).get.then(
        (data) => data.data
      );
      dispatch({ type: 'FETCH_COMPLETE', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', error: err.message });
    }
  };

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  try {
    const data = await ServicesDetails(movieId).get.then((data) => data.data);
    dispatch({ type: 'FETCH_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};
