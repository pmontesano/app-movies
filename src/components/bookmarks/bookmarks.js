import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UseAuth from '../../auth/useAuth';

const Bookmarks = ({ id, handleAddBookmarks, handleRevomeBookmarks }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const auth = UseAuth();
  const history = useHistory();

  const handleAddBookmarksClick = (id) => {
    if (auth?.isLogged) {
      if (!isBookmarked) {
        setIsBookmarked(true);
        handleAddBookmarks(id);
      } else {
        setIsBookmarked(false);
        handleRevomeBookmarks(id);
      }
    } else {
      history.push('/login');
    }
  };

  return (
    <IconButton
      id={id}
      color={isBookmarked ? 'primary' : 'default'}
      aria-label="add to favorites"
      onClick={() => handleAddBookmarksClick(id)}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default Bookmarks;
