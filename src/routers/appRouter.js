import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import Header from '../components/header';
import MainView from '../pages/main';
import Login from '../pages/login';
import Register from '../pages/register';
import Details from '../pages/details';
import NotFound from '../pages/notFound';
import Bookmarks from '../pages/bookmarks';
import Search from '../pages/search';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainView} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route exact path="/movie/:moviename" component={Details} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/search" component={Search} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default AppRouter;
