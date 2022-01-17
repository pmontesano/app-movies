import React from 'react';
import ContainerPage from '../layout/container';
import ListMovies from '../movies/listMovies';

const Main = (props) => {
  return (
    <ContainerPage sx={{ mt: '100px' }}>
      <ListMovies {...props} />
    </ContainerPage>
  );
};

Main.defaultProps = {};

export default Main;
