import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovieDetails } from '../../actions';
import { url } from '../../config/url';
import CardFull from '../card/cardFull';

const List = ({ results, loading }) => {
  const { imgUrl } = url.images;
  const dispatch = useDispatch();

  const onHandleClick = (movieId) => (e) => {
    e.preventDefault;
    dispatch(fetchMovieDetails(movieId));
  };

  const Item = () =>
    results.map((movie) => (
      <li key={movie.id} className="movie-list__item">
        <Link to={`/movie/${movie.id}`} onClick={onHandleClick(movie.id)}>
          <CardFull
            cardTitle={movie.title}
            cardImage={`${imgUrl}${movie.backdrop_path}`}
            cardImageHeight={420}
            cardWidth={400}
            cardRate={movie.vote_average}
            cardDescription={movie.overview}
            cardSubheader={movie.release_date}
            cardTitleTypographyProps={{
              fontSize: '1.2rem',
              fontWeight: 500,
            }}
            loading={loading}
          />
        </Link>
      </li>
    ));

  return (
    <ul className="movie-list">
      <Item />
    </ul>
  );
};

export default List;
