import { Express } from 'express';
import helmet from 'helmet';

export default (app: Express): void => {
  app.use(helmet.hidePoweredBy());
};
