import { combineReducers } from 'redux';
import {
  fetchDataReducer,
  fetchMovieDetailsReducer,
  fetchMovieSimilarReducer,
} from './fetch';
import { bookmarksReducer } from './bookmarks';

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  fetchMovieDetails: fetchMovieDetailsReducer,
  fetchMovieSimilar: fetchMovieSimilarReducer,
  bookmarks: bookmarksReducer,
});

export default reducer;
