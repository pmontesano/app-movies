import React from 'react';
import { url } from '../config/url';
import PageNotFound from '../pages/pageNotFound';

const List = ({ results }) => {
  const { imgUrl } = url;
  console.log('list results', results);

  return (
    <div>
      <PageNotFound />
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <img src={`${imgUrl}${movie.backdrop_path}`} />
            <p>{movie.title}</p>
            <span>{movie.vote_average}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
