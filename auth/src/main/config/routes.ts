import { Express, Router } from 'express';
import authRouter from '@src/main/routes';

export default (app: Express): void => {
  const router = Router();
  authRouter(router);
  app.use('/api/users', router);
};
