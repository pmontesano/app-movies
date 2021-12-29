import express from 'express';
import path from 'path';

import template from './template';

/**
 * Routers
 */
import { fetchData, render } from '../controllers/main';
import { fetchMovieDetails, renderDetails } from '../controllers/detail';

const server = express();

server.use('/', express.static(path.join(__dirname, '../../build')));
server.use('/static', express.static(path.join(__dirname, '../static')));

/**
 * Mount routers
 */
server.get('/', fetchData, render(template));

server.get(`/movie/123`, fetchMovieDetails, renderDetails(template));

server.listen(3000, () => console.log('Server started http://localhosts:3000'));
