export const addBookmarks = (addBookmarks) => (dispatch) => {
  dispatch({ type: 'BOOKMARKS_ADDED', ...addBookmarks, payload: addBookmarks });
};

export const removeBookmarks = (movieId) => (dispatch) => {
  dispatch({ type: 'BOOKMARKS_REMOVED', ...addBookmarks, payload: movieId });
};
