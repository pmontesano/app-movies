import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UseAuth from '../../auth/useAuth';
import UseBookmarks from '../../bookmarks/useBookmarks';

const Bookmarks = ({ id, handleAddBookmarks, handleRevomeBookmarks }) => {
  const auth = UseAuth();
  const history = useHistory();
  const bookmarksValue = UseBookmarks();

  const bookmarked = bookmarksValue?.bookmarksList.includes(id);

  const handleAddBookmarksClick = (id) => {
    if (auth?.isLogged) {
      if (!bookmarked) {
        handleAddBookmarks(id);
      } else {
        handleRevomeBookmarks(id);
      }
    } else {
      history.push('/login');
    }
  };

  return (
    <IconButton
      id={id}
      color={bookmarked ? 'primary' : 'default'}
      aria-label="add to favorites"
      onClick={() => handleAddBookmarksClick(id)}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default Bookmarks;
