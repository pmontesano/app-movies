import React from 'react';
import Navbar from './navbar';
import ContainerPage from '../layout/container';

const Header = () => {
  return (
    <div className="header">
      <ContainerPage>
        <div className="header_content">
          <div className="logo">MonteMovies</div>
          <Navbar />
        </div>
      </ContainerPage>
    </div>
  );
};

export default Header;
