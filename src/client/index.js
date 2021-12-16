import React from 'react';
import ReactDom from 'react-dom';

import App from '../pages/main';

const preloadedState = window._PRELOADED_STATE;

ReactDom.hydrate(<App {...preloadedState} />, document.getElementById('root'));
