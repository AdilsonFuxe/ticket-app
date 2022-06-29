import cookieSession from 'cookie-session';
import { Express, json } from 'express';
import cors from 'cors';

export default (app: Express): void => {
  app.use(json());

  app.set('trust proxy', true);

  app.use(
    cookieSession({
      signed: false,
      secure: true,
    })
  );

  app.use(cors());
  app.use((req, res, next) => {
    res.type('json');
    next();
  });
};
