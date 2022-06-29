import { Express, Router } from 'express';
import authRouter from '../routes/auth';

export default (app: Express): void => {
  const router = Router();
  authRouter(router);
  app.use('/api/users', router);
};
