import React from 'react';
import ContainerPage from '../../components/layout/container';
import BookmarksList from '../../components/bookmarks/bookmarksList';
import useBookmarks from '../../bookmarks/useBookmarks';

const Bookmarks = () => {
  const bookmarksState = useBookmarks();
  return (
    <ContainerPage sx={{ mt: '100px', mb: '100px' }}>
      <h3 className="bookmarks__title">Favoritos</h3>
      <BookmarksList {...bookmarksState} />
    </ContainerPage>
  );
};

export default Bookmarks;
