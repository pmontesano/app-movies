import React, { createContext, useState, useEffect } from 'react';

export const BookmarksContext = createContext();

const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarks')) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch (err) {
      localStorage.removeItem('bookmarks');
      console.log(err);
    }
  }, [bookmarks]);

  const add = (newState) => {
    return setBookmarks(newState);
  };

  const remove = (newState) => {
    return setBookmarks(newState);
  };

  const contextValue = {
    ...bookmarks,
    bookmarksList: bookmarks?.bookmarksList ? bookmarks.bookmarksList : [],
    results: bookmarks?.results ? bookmarks.results : [],
    addBookmark: add,
    removeBookmark: remove,
  };

  return (
    <BookmarksContext.Provider value={contextValue}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksProvider;
