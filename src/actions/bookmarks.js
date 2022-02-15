export const addBookmarks = (bookmarks) => (dispatch) => {
  dispatch({ type: 'BOOKMARKS_ADDED', ...bookmarks, payload: bookmarks });
};

export const removeBookmarks = (bookmarks) => (dispatch) => {
  dispatch({
    type: 'BOOKMARKS_REMOVED',
    ...bookmarks,
    payload: bookmarks,
  });
};

export const initialBookmarks = (bookmarks) => (dispatch) => {
  dispatch({
    type: 'BOOKMARKS_COMPLETE',
    ...bookmarks,
    payload: bookmarks,
  });
};
