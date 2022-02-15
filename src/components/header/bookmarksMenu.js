import React from 'react';
import Menu from '@mui/material/Menu';
import BookmarksWidget from '../bookmarks/BookmarksWidget';
import useBookmarks from '../../bookmarks/useBookmarks';

const BookmarksMenu = ({ anchorEl, open, handleClose }) => {
  const bookmarksState = useBookmarks();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        sx: {
          padding: 0,
        },
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          maxWidth: 400,
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <h3 className="bookmarks-widget__title">Favoritos</h3>
      <BookmarksWidget
        {...bookmarksState}
        className="bookmarks-list"
        handleClose={handleClose}
      />
    </Menu>
  );
};

export default BookmarksMenu;
