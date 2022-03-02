import { combineReducers } from 'redux';
import {
  fetchDataReducer,
  fetchMovieDetailsReducer,
  fetchMovieSimilarReducer,
  fetchMovieVideoReducer,
} from './fetch';
import { bookmarksReducer } from './bookmarks';
import { searchReducer } from './search';

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  fetchMovieDetails: fetchMovieDetailsReducer,
  fetchMovieSimilar: fetchMovieSimilarReducer,
  bookmarks: bookmarksReducer,
  fetchVideo: fetchMovieVideoReducer,
  search: searchReducer,
});

export default reducer;
