import { Express, json } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
export default (app: Express): void => {
  app.use(json());

  app.set('trust proxy', true);

  app.use(
    cookieSession({
      signed: false,
      secure: process.env.NODE_ENV != 'test',
    })
  );

  app.use(cors());
  app.use((req, res, next) => {
    res.type('json');
    next();
  });
};
