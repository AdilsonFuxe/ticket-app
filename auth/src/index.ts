import express from 'express';
import { NotFoundError } from './errors';
import { errorHandle } from './middlewares';
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandle);

app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});
