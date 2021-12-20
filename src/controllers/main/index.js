import React from "react";
import MainService from "../../server/services";
import MainPage from "../../index";
import ReactDOMServer from "react-dom/server";

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  MainService(req)
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
    const Main = (props) => <MainPage {...props} />;

    const initialState = res.locals.initialState;

    const component = ReactDOMServer.renderToString(
      <Main props={initialState} />
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
