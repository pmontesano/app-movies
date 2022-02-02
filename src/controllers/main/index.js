import React from 'react';
import Service from '../../server/services';
import { config } from '../../config/default-config';
import { url } from '../../config/url';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchPath } from 'react-router';
import reducer from '../../reducers';
import { asyncMiddleware } from '../../middlewares/async';
import { fetchInitialData } from '../../actions';
import MainPage from '../../index';
import routes from '../../routers/routes';
import template from '../../server/template';

const initReducer = reducer;
const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  console.log(req.locals);

  const {
    categories: { popular },
  } = config;

  const {
    categories: { movie },
  } = url;

  Service(movie, popular)
    .get.then((data) => {
      const results = data.data;
      store.dispatch(fetchInitialData(results));
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

/**
 * Render view
 */
exports.render = (template) =>
  function render(req, res) {
    const Main = (props) => <MainPage {...props} />;

    console.log('res.locals.user', res.locals.user);

    const context = {};
    const initialState = store.getState();
    initialState.user = res.locals.user ? res.locals.user : null;

    const component = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Main />
        </StaticRouter>
      </Provider>
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
