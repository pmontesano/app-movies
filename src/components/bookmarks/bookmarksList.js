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
import {
  handleRemoveBookmarksFunc,
  handleRemoveBookmarksSelectedFunc,
} from './bookmarksHandles';
import useBookmarks from '../../bookmarks/useBookmarks';

const BookmarkList = ({ results }) => {
  const bookmarksContext = useBookmarks();
  const dispatch = useDispatch();
  const { imgUrl } = url.images;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleClick = (id) => (e) => {
    const { checked } = e.target;
    setIsCheck([...isCheck, id]);

    if (!checked) {
      setIsCheck(isCheck.filter((x) => x !== id));
    }
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(results.map((x) => x.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleRemoveBookmarks = (id, state) => (e) => {
    e.preventDefault();
    const newState = handleRemoveBookmarksFunc(id, state);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
    setIsCheck([]);
  };

  const handleRemoveBookmarksSelected = (ids, state) => (e) => {
    e.preventDefault();
    const newState = handleRemoveBookmarksSelectedFunc(ids, state);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
    setIsCheck([]);
  };

  const FavouriteListItem = ({ id, img, title, description }) => (
    <ListItem
      key={id}
      secondaryAction={
        <Button
          size='small'
          onClick={handleRemoveBookmarks(id, bookmarksContext)}
        >
          Eliminar
        </Button>
      }
    >
      <ListItemButton role={undefined} dense sx={{ maxWidth: 80 }}>
        <ListItemIcon>
          <Checkbox
            onClick={handleClick(id)}
            edge='start'
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': id }}
            checked={isCheck.includes(id)}
          />
        </ListItemIcon>
      </ListItemButton>
      <div className='bookmarks-list__info'>
        <Link to={`/movie/${id}`}>
          <span className='bookmarks-list__img'>
            <CardMedia
              component='img'
              height='140'
              image={`${imgUrl}${img}`}
              alt={title}
              sx={{ borderRadius: '4px' }}
            />
          </span>
          <ListItemText
            id={id}
            primary={title}
            secondary={description}
            className='bookmarks-list__text'
          />
        </Link>
      </div>
    </ListItem>
  );

  return (
    <div className='bookmarks-content'>
      <div className='bookmarks-list-top'>
        <ListItemButton role={undefined} dense sx={{ maxWidth: 80 }}>
          <ListItemIcon>
            <Checkbox
              disabled={results?.length === 0 ? true : false}
              edge='start'
              onClick={handleSelectAll}
              checked={results?.length === 0 ? '' : isCheckAll}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': 1 }}
            />
          </ListItemIcon>
        </ListItemButton>
        <Button
          disabled={isCheck.length === 0}
          onClick={handleRemoveBookmarksSelected(isCheck, bookmarksContext)}
        >
          Eliminar favoritos seleccionados
        </Button>
      </div>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        className='bookmarks-list'
      >
        {results?.length === 0 ? (
          <ListItem
            sx={{ flexDirection: 'column' }}
            className='bookmarks-list__empty'
          >
            <h4>Nada por acá...</h4> <p>Aún no tenés productos en Favoritos</p>
          </ListItem>
        ) : (
          <TransitionGroup>
            {results?.map((movie) => (
              <CSSTransition key={movie.id} timeout={500} classNames='item'>
                <FavouriteListItem {...movie} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </List>
    </div>
  );
};

export default BookmarkList;
