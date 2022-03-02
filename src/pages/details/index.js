import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetail from '../../components/movies/detail.js';

const Details = (props) => {
  const initialState = useSelector((state) => state);

  const { fetchMovieDetails, fetchMovieSimilar, fetchVideo } = initialState;

  return (
    <MovieDetail
      {...fetchMovieDetails}
      movieSimilar={fetchMovieSimilar}
      movieVideo={fetchVideo}
      {...props}
    />
  );
};
export default Details;
