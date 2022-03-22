import React from 'react';
import Navbar from './navbar';
import ContainerPage from '../layout/container';
import { Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

const Header = () => {
  const auth = useAuth();

  const isLogged = auth?.isLogged;

  return (
    <div className='header'>
      <ContainerPage>
        <div
          className={`header_content ${
            !isLogged ? 'header_content-original' : ''
          } `}
        >
          <div className='logo'>
            <Link to='/'>MonteMovies</Link>
          </div>
          <Navbar />
        </div>
      </ContainerPage>
    </div>
  );
};

export default Header;
