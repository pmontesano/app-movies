import {
  BOOKMARKS_ADDED,
  BOOKMARKS_REMOVED,
  FETCH_COMPLETE,
} from '../actions/types';

const bookmarks = {};

export const bookmarksReducer = (state = bookmarks, action) => {
  switch (action.type) {
    case FETCH_COMPLETE:
      return {
        ...state,
        ...action.payload,
      };
    case BOOKMARKS_ADDED:
      return {
        ...state,
        ...action.payload,
      };
    case BOOKMARKS_REMOVED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state, bookmarksList: [], results: [] };
  }
};
