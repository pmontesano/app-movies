import React from 'react';
import MainPage from '../../index';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

/**
 * Render view
 */
exports.render = (template) =>
  function render(req, res) {
    const Main = (props) => <MainPage {...props} />;

    const initialState = res.locals.initialState;
    const context = {};

    const component = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Main initialState={initialState} />
      </StaticRouter>
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
