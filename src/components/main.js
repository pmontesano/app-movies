import React from 'react';
import ContainerPage from './container';
import ListMovies from './listMovies';
import Header from './header';

const Main = (props) => {
  console.log(props);
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
