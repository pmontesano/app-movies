import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MyMenu from './myMenu';
import BookmarksMenu from './bookmarksMenu';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorBookmarksEl, setAnchorBookmarksEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openBookmarks = Boolean(anchorBookmarksEl);
  const handleBookmarksClick = (event) => {
    setAnchorBookmarksEl(event.currentTarget);
  };
  const handleBookmarksClose = () => {
    setAnchorBookmarksEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <Tooltip title="Favorite">
          <MenuItem onClick={handleBookmarksClick} size="small">
            Favoritos
          </MenuItem>
        </Tooltip>
      </Box>
      <MyMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      <BookmarksMenu
        anchorEl={anchorBookmarksEl}
        open={openBookmarks}
        handleClose={handleBookmarksClose}
      />
    </>
  );
}
