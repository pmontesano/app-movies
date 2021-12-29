import React from 'react';
import ContainerPage from '../layout/container';
import ListMovies from '../movies/listMovies';
import Header from '../header';

const Main = (props) => {
  return (
    <>
      <Header />
      <ContainerPage sx={{ mt: '100px' }}>
        <ListMovies {...props} />
      </ContainerPage>
    </>
  );
};

Main.defaultProps = {};

export default Main;
