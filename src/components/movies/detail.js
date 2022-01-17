import React from 'react';

const MovieDetail = ({ title, overview }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;
