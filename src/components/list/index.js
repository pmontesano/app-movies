import React from 'react';
import { url } from '../../config/url';
import CardFull from '../card/cardFull';
import Skeleton from '../skeleton';

const List = ({ results, loading }) => {
  const { imgUrl } = url.images;

  const Item = () =>
    results.map((movie) => (
      <li key={movie.id} className="movie-list__item">
        {loading === true ? (
          <Skeleton />
        ) : (
          <CardFull
            cardTitle={movie.title}
            cardImage={`${imgUrl}${movie.backdrop_path}`}
            cardImageHeight={420}
            cardWidth={400}
            cardRate={movie.vote_average}
            cardDescription={movie.overview}
            cardSubheader={movie.release_date}
            cardTitleTypographyProps={{ fontSize: '1.2rem', fontWeight: 500 }}
          />
        )}
      </li>
    ));

  return (
    <ul className="movie-list">
      <Item />
    </ul>
  );
};

export default List;
