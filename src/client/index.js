import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AuthProvider from '../auth/authProvider';
import BookmarksProvider from '../bookmarks/bookmarksProvider';
import reducer from '../reducers';
import { asyncMiddleware } from '../middlewares/async';
import '@fontsource/roboto';
import '../styles/main.scss';

import App from '../index';

const preloadedState = window._PRELOADED_STATE;

const initReducer = reducer;

const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

ReactDom.hydrate(
  <AuthProvider>
    <BookmarksProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App {...preloadedState} />
        </BrowserRouter>
      </Provider>
    </BookmarksProvider>
  </AuthProvider>,
  document.getElementById('app')
);
