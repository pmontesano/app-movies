import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { url } from '../../config/url';
import { removeBookmarks } from '../../actions';
import { handleRemoveBookmarksFunc } from './bookmarksHandles';
import useBookmarks from '../../bookmarks/useBookmarks';

const BookmarkList = ({ results }) => {
  const [checked, setChecked] = useState([0]);
  const bookmarksContext = useBookmarks();

  const dispatch = useDispatch();

  const { imgUrl } = url.images;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleRemoveBookmarks = (id, state) => (e) => {
    e.preventDefault();
    const newState = handleRemoveBookmarksFunc(id, state);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
  };

  const FavouriteListItem = ({ movie, labelId }) => (
    <ListItem
      key={movie.id}
      secondaryAction={
        <Button
          size="small"
          onClick={handleRemoveBookmarks(movie.id, bookmarksContext)}
        >
          Eliminar
        </Button>
      }
    >
      <ListItemButton
        role={undefined}
        onClick={handleToggle(movie)}
        dense
        sx={{ maxWidth: 80 }}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(movie) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
      </ListItemButton>
      <div className="bookmarks-list__info">
        <Link to={`/movie/${movie.id}`}>
          <span className="bookmarks-list__img">
            <CardMedia
              component="img"
              height="140"
              image={`${imgUrl}${movie.img}`}
              alt={movie.title}
              sx={{ borderRadius: '4px' }}
            />
          </span>
          <ListItemText
            id={labelId}
            primary={movie.title}
            secondary={movie.description}
          />
        </Link>
      </div>
    </ListItem>
  );

  return (
    <div className="bookmarks-content">
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        className="bookmarks-list"
      >
        {results?.length === 0 ? (
          <ListItem
            sx={{ flexDirection: 'column' }}
            className="bookmarks-list__empty"
          >
            <h4>Nada por acá...</h4> <p>Aún no tenés productos en Favoritos</p>
          </ListItem>
        ) : (
          <TransitionGroup>
            {results?.map((movie) => (
              <CSSTransition key={movie.id} timeout={500} classNames="item">
                <FavouriteListItem movie={movie} labelId={movie.id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </List>
    </div>
  );
};

export default BookmarkList;
