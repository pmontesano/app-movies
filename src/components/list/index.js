import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../../actions';
import { addBookmarks, removeBookmarks } from '../../actions';
import { url } from '../../config/url';
import CardFull from '../card/cardFull';
import {
  handleAddBookmarksFunc,
  handleRemoveBookmarksFunc,
} from '../bookmarks/bookmarksHandles';
import useBookmarks from '../../bookmarks/useBookmarks';

const List = ({ results, loading, data }) => {
  const { imgUrl } = url.images;
  const dispatch = useDispatch();
  const bookmarksContext = useBookmarks();

  const onHandleClick = (movieId) => (e) => {
    e.preventDefault;
    dispatch(fetchMovieDetails(movieId));
  };

  const handleAddBookmarks = (id) => {
    const newState = handleAddBookmarksFunc(id, results, bookmarksContext);
    bookmarksContext.addBookmark(newState);
    dispatch(addBookmarks(newState));
  };

  const handleRevomeBookmarks = (id) => {
    const newState = handleRemoveBookmarksFunc(id, bookmarksContext);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
  };

  const Item = () =>
    results.map((movie) => {
      const average = movie.vote_average === 0 ? 'NR' : movie.vote_average;
      return (
        <li key={movie.id} className="movie-list__item">
          <CardFull
            cardTitle={movie.title}
            cardImage={`${imgUrl}${movie.backdrop_path}`}
            cardImageHeight={420}
            cardWidth={400}
            cardRate={average}
            cardDescription={movie.overview}
            cardSubheader={movie.release_date}
            cardTitleTypographyProps={{
              fontSize: '1.2rem',
              fontWeight: 500,
            }}
            loading={loading}
            handleLinkClick={onHandleClick(movie.id)}
            linkParam={`/movie/${movie.id}`}
            bookmarksId={movie.id}
            handleAddBookmarks={handleAddBookmarks}
            handleRevomeBookmarks={handleRevomeBookmarks}
            isBookmarked={movie.bookmarked}
          />
        </li>
      );
    });

  return (
    <ul className="movie-list">
      <Item />
    </ul>
  );
};

export default List;
