import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UseAuth from '../../auth/useAuth';
import UseBookmarks from '../../bookmarks/useBookmarks';

const Bookmarks = ({
  id,
  handleAddBookmarks,
  handleRevomeBookmarks,
  variant,
}) => {
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
      className="bookmarks-icon"
      id={id}
      color={bookmarked ? 'primary' : variant}
      aria-label="add to favorites"
      onClick={() => handleAddBookmarksClick(id)}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default Bookmarks;
