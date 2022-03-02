import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { url } from '../../config/url';
import { removeBookmarks, fetchMovieDetails } from '../../actions';
import { handleRemoveBookmarksFunc } from './bookmarksHandles';
import useBookmarks from '../../bookmarks/useBookmarks';

export default function BookmarksWidget({ results, handleClose }) {
  const { imgUrl } = url.images;
  const bookmarksContext = useBookmarks();
  const dispatch = useDispatch();

  const handleDispatch = (id) => {
    dispatch(fetchMovieDetails(id));
  };

  const handleRemoveBookmarks = (id, state) => (e) => {
    e.preventDefault();
    const newState = handleRemoveBookmarksFunc(id, state);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
  };

  const FavouriteResults = ({ id, title, description, img }) => (
    <li key={id} className="bookmarks-list__item">
      <Card
        sx={{ maxWidth: 400, border: 0, boxShadow: 'none' }}
        className="card-simple"
      >
        <Link
          to={`/movie/${id}`}
          onClick={() => handleDispatch(id)}
          className="bookmarks-list__img"
        >
          <CardMedia
            component="img"
            height="140"
            image={`${imgUrl}${img}`}
            alt={title}
            sx={{ borderRadius: '4px' }}
          />
        </Link>
        <CardContent
          sx={{
            paddingBottom: '0 !important',
            paddingTop: '0 !important',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: '1.3rem' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="card-simple__description"
          >
            {description}
          </Typography>
          <CardActions>
            <Button size="small">
              <Link to={`/movie/${id}`} onClick={() => handleDispatch(id)}>
                Ver
              </Link>
            </Button>
            <Button
              size="small"
              onClick={handleRemoveBookmarks(id, bookmarksContext)}
            >
              Eliminar
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </li>
  );

  return (
    <>
      {results.length === 0 ? (
        <div className="bookmarks-widget__empty">
          <p>
            Agregá acá los productos que te gustaron para poder verlos más
            tarde.
          </p>
        </div>
      ) : (
        <>
          <ul className="bookmarks-widget__results">
            <TransitionGroup>
              {results.map((movie) => (
                <CSSTransition key={movie.id} timeout={500} classNames="item">
                  <FavouriteResults {...movie} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
          <div className="bookmarks-widget__bottom">
            <Link to="/bookmarks" onClick={handleClose}>
              Ver todos los favoritos
            </Link>
          </div>
        </>
      )}
    </>
  );
}
