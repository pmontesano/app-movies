import React from 'react';
import HomeService from '../../server/services';
import HomePage from '../../pages/home';
import ReactDOMServer from 'react-dom/server';

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  HomeService(req)
    .get()
    .then((data) => {
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
    const Home = (props) => <HomePage {...props} />;

    const initialState = res.locals.initialState;

    const component = ReactDOMServer.renderToString(
      <Home props={initialState} />
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
