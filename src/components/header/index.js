import React from 'react';
import Navbar from './navbar';
import ContainerPage from '../layout/container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ContainerPage>
        <div className="header_content">
          <div className="logo">
            <Link to="/">MonteMovies</Link>
          </div>
          <Navbar />
        </div>
      </ContainerPage>
    </div>
  );
};

export default Header;
