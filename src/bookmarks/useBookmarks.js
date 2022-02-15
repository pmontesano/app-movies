import { useContext } from 'react';
import { BookmarksContext } from './bookmarksProvider';

const useBookmarks = () => {
  const contextValue = useContext(BookmarksContext);
  return contextValue;
};

export default useBookmarks;
