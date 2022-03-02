import ServicesMain from '../server/services';
import ServicesDetails from '../server/services/fetchDetails';
import ServicesSearch from '../server/services/search';

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
  dispatch({ type: 'FETCH_DETAILS_PENDING' });
  try {
    const data = await ServicesDetails(movieId).get.then((data) => data.data);
    dispatch({ type: 'FETCH_DETAILS_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_DETAILS_ERROR', error: err.message });
  }
};

export const fetchMovieSimilar = (movieId) => async (dispatch) => {
  dispatch({ type: 'FETCH_SIMILAR_PENDING' });
  try {
    const data = await ServicesDetails(movieId).getSimilar.then(
      (data) => data.data
    );
    dispatch({ type: 'FETCH_SIMILAR_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_SIMILAR_ERROR', error: err.message });
  }
};

export const fetchMovieVideo = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_VIDEO_PENDING' });
  try {
    const data = await ServicesDetails(id).getVideo.then((data) => data.data);
    dispatch({ type: 'FETCH_VIDEO_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_VIDEO_ERROR', error: err.message });
  }
};

export const searchMovies = (query, page) => async (dispatch) => {
  dispatch({ type: 'SEARCH_PENDING' });
  try {
    const data = await ServicesSearch(query, page).search.then(
      (data) => data.data
    );
    dispatch({ type: 'SEARCH_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'SEARCH_ERROR', error: err.message });
  }
};
