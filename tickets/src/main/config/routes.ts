import { Express, Router } from 'express';
import helloRouter from '@src/main/routes/hello-world';


export default (app: Express): void => {
  const router = Router();
  helloRouter(router);
  app.use('/v1', router);
};
