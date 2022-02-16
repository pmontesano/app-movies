export const handleAddBookmarksFunc = (id, results, bookmarksState) => {
  const newBookmarks = results.reduce((acc, el) => {
    if (el.id === id) {
      return {
        ...acc,
        id: el.id,
        title: el.title,
        description: el.overview,
        rating: el.vote_average,
        img: el.backdrop_path,
      };
    }
    return acc;
  }, {});

  const newState = {
    ...bookmarksState,
    bookmarksList: bookmarksState.bookmarksList.concat(id),
    results: [newBookmarks, ...bookmarksState.results],
  };

  return newState;
};

export const handleRemoveBookmarksFunc = (id, bookmarksState) => {
  const newState = {
    ...bookmarksState,
    bookmarksList: bookmarksState.bookmarksList.filter((x) => x !== id),
    results: bookmarksState.results.filter((x) => x.id !== id),
  };

  return newState;
};

export const handleRemoveBookmarksSelectedFunc = (ids, bookmarksState) => {
  const newState = {
    ...bookmarksState,
    bookmarksList: bookmarksState.bookmarksList.filter((x) => !ids.includes(x)),
    results: bookmarksState.results.filter((x) => !ids.includes(x.id)),
  };

  return newState;
};

export const checkBookmarked = (id) => {
  const getBookmarksStorage = JSON.parse(localStorage.getItem('bookmarks'))
    ? JSON.parse(localStorage.getItem('bookmarks')).bookmarksList.includes(id)
    : false;

  console.log('checkBookmarked getBookmarksStorage', getBookmarksStorage);

  return getBookmarksStorage;
};
