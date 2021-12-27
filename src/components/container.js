import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ContainerPage = ({ children, maxWidth, ...rest }) => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth={maxWidth ? maxWidth : 'xl'} {...rest}>
      {children}
    </Container>
  </React.Fragment>
);

export default ContainerPage;
