import React from 'react';

const notFoundPage = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <div>Página no encontrada</div>;
};

export default notFoundPage;
