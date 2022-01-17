import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import Header from '../components/header';
import MainView from '../pages/main';
import Login from '../pages/login';
import Register from '../pages/register';
import Details from '../pages/details';
import NotFound from '../pages/notFound';

export default function AppRouter() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainView} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route exact path="/movie/:moviename" component={Details} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}
