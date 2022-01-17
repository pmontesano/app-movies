import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetail from '../../components/movies/detail.js';

const Details = (props) => {
  const initialState = useSelector((state) => state);

  const { fetchMovieDetails } = initialState;

  return <MovieDetail {...fetchMovieDetails} {...props} />;
};
export default Details;
