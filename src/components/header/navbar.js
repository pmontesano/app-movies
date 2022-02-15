import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProfileMenu from './profileMenu';
import { Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

const Navbar = () => {
  const auth = useAuth();

  const isLogged = auth?.isLogged;

  const LoginMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <div className="navbar__links">
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/login">INICIAR SESION/REGISTRARSE</Link>
        </Typography>
      </div>
    </Box>
  );

  return (
    <nav role="navigation" className="navbar">
      {!isLogged ? <LoginMenu /> : <ProfileMenu />}
    </nav>
  );
};

export default Navbar;
