import { Express, Router } from 'express';
import ticketsRouter from '@src/main/routes/tickets';

export default (app: Express): void => {
  const router = Router();
  ticketsRouter(router);
  app.use('/v1', router);
};
