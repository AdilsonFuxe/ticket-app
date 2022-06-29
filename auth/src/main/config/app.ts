import express from 'express';
import setupMiddleware from './middlewares';
import setupRoutes from './routes';
import setupHelmet from './config-helmet';
import { NotFoundError } from '@src/interface/errors';

const app = express();

setupMiddleware(app);

setupHelmet(app);
setupRoutes(app);

app.all('*', async (req, res) => {
  throw new NotFoundError('route');
});

export default app;
