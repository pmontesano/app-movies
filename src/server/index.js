import express from 'express';
import path from 'path';

import template from './template';

/**
 * Routers
 */
import { fetchData, render } from '../controllers/main';

const server = express();

server.use(
  '/static',
  express.static(path.join(__dirname, '..', '..', 'dist', 'static'))
);

/**
 * Mount routers
 */
server.get('/', fetchData, render(template));

server.listen(3000, () => console.log('Server started http://localhosts:3000'));
