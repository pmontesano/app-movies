import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto';
import '../styles/main.scss';

import App from '../index';

const preloadedState = window._PRELOADED_STATE;

ReactDom.hydrate(
  <BrowserRouter>
    <App {...preloadedState} />
  </BrowserRouter>,
  document.getElementById('app')
);
