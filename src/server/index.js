import express from 'express';
import path from 'path';

import template from './template';

/**
 * Routers
 */
import { fetchData } from '../controllers/main';
import { fetchMovieDetails } from '../controllers/detail';
import { render } from '../controllers/render';

const server = express();

server.use('/', express.static(path.join(__dirname, '../../build')));
server.use('/static', express.static(path.join(__dirname, '../static')));

/**
 * Mount routers
 */
server.get('/', fetchData, render(template));

server.get(`/movie/:moviename`, fetchMovieDetails, render(template));

server.listen(3000, () => console.log('Server started http://localhosts:3000'));
