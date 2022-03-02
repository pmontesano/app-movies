import React from 'react';
import ContainerPage from '../layout/container';
import ListMovies from '../movies/listMovies';
import Search from '../search';

const Main = (props) => {
  return (
    <>
      <div className="hero">
        <ContainerPage>
          <div className="title">
            <h2>Bienvenidos.</h2>
            <h3>
              Millones de películas, programas de televisión y personas por
              descubrir. Explora ahora.
            </h3>
          </div>
          <Search />
        </ContainerPage>
      </div>
      <ContainerPage sx={{ mt: '50px' }}>
        <ListMovies {...props} />
      </ContainerPage>
    </>
  );
};

Main.defaultProps = {};

export default Main;
