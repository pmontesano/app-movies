import MainService from '../server/services';

export const fetchThunk = (pathParam, movieParam, page) => async (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  try {
    const data = await MainService(pathParam, movieParam, page).get.then(
      (data) => data.data
    );
    dispatch({ type: 'FETCH_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};
