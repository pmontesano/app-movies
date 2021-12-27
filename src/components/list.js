import React from 'react';
import { url } from '../config/url';
import CardFull from './cardFull';
import Stack from './stack';
import Skeleton from './skeleton';

const List = ({ fetchData: { results, loading }, className }) => {
  const { imgUrl } = url;

  const style = {
    movieListClass: {
      display: 'flex',
    },

    movieListStackClass: {
      flexWrap: 'wrap',
    },

    movieListItemClass: {
      display: 'flex',
      alignSelf: 'stretch',
      flex: '1 0 21%',
      marginTop: '20px',
      marginLeft: 0,
    },
  };

  const { movieListClass, movieListItemClass, movieListStackClass } = style;

  const Item = () =>
    results.map((movie) => (
      <li key={movie.id} style={{ ...movieListItemClass }}>
        {loading === true ? (
          <Skeleton />
        ) : (
          <CardFull
            cardTitle={movie.title}
            cardImage={`${imgUrl}${movie.backdrop_path}`}
            cardImageHeight={420}
            cardWidth={345}
            cardRate={movie.vote_average}
            cardDescription={movie.overview}
            cardSubheader={movie.release_date}
            cardTitleTypographyProps={{ fontSize: '1.2rem', fontWeight: 500 }}
          />
        )}
      </li>
    ));

  return (
    <ul style={{ ...movieListClass }}>
      <Stack direction="row" spacing={2} style={{ ...movieListStackClass }}>
        <Item />
      </Stack>
    </ul>
  );
};

export default List;
