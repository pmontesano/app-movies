import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { asyncMiddleware } from './middlewares/async';
import { Routes, Route } from 'react-router-dom';
import MainView from './pages/main';
import DetailsView from './pages/details';

const App = ({ initialState }) => {
  const initReducer = reducer(initialState);

  const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
      <MainView />
    </Provider>
  );
};

export default App;
