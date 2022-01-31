import { combineReducers } from 'redux';
import { fetchDataReducer, fetchMovieDetailsReducer } from './fetch';
import { bookmarksReducer } from './bookmarks';

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  fetchMovieDetails: fetchMovieDetailsReducer,
  bookmarks: bookmarksReducer,
});

export default reducer;
