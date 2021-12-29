import React from 'react';
import Service from '../../server/services';
import MainPage from '../../index';
import ReactDOMServer from 'react-dom/server';
import { config } from '../../config/default-config';
import { url } from '../../config/url';

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  const {
    categories: { popular },
  } = config;

  const {
    categories: { movie },
  } = url;

  Service(movie, popular)
    .get.then((data) => {
      res.locals.initialState = data.data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

/**
 * Render Navigation
 */
exports.render = (template) =>
  function render(req, res) {
    const Main = (props) => <MainPage {...props} />;

    const initialState = res.locals.initialState;

    const component = ReactDOMServer.renderToString(
      <Main initialState={initialState} />
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
