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

const routes = [
  {
    path: '/',
    exact: true,
    component: MainView,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/movie/:moviename',
    component: Details,
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
  },
];

export default routes;
