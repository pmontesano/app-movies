import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProfileMenu from './profileMenu';

const Navbar = () => {
  return (
    <nav role="navigation" className="navbar">
      <Box
        className="navbar__links"
        sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
      >
        <Typography sx={{ minWidth: 100 }}>
          INICIAR SESION/REGISTRARSE
        </Typography>
      </Box>
      <ProfileMenu />
    </nav>
  );
};

export default Navbar;
