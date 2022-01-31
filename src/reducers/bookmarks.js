import { BOOKMARKS_ADDED, BOOKMARKS_REMOVED } from '../actions/types';

const bookmarks = {};

export const bookmarksReducer = (state = bookmarks, action) => {
  switch (action.type) {
    case BOOKMARKS_ADDED:
      return {
        ...state,
        bookmarksList: action.payload,
      };
    case BOOKMARKS_REMOVED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state, bookmarksList: [] };
  }
};
