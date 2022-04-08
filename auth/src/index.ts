import express from 'express';
import mongoose from 'mongoose';
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

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
  });
};

start();
