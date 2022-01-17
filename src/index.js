import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { asyncMiddleware } from './middlewares/async';
import AppRouter from './routers/appRouter';

const App = ({ initialState }) => {
  const initReducer = reducer(initialState);

  const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
