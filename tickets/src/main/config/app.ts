import express from 'express';
import setupMiddleware from './middlewares';
import setupRoutes from './routes';
import setupHelmet from './config-helmet';

const app = express();
setupHelmet(app);
setupMiddleware(app);
setupRoutes(app);

export default app;
