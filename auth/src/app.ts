import cookieSession from 'cookie-session';
import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors';
import { errorHandle } from './middlewares';
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';

const app = express();

app.set('trust proxy', true);

app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandle);

export { app };
