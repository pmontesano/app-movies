import { combineReducers } from 'redux';
import { fetchReducer, fetchMovieDetailsReducer } from './fetch';

const reducer = (state) =>
  combineReducers({
    fetchData: fetchReducer(state),
    fetchMovieDetails: fetchMovieDetailsReducer(state),
  });

export default reducer;
