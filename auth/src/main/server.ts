import mongoose from 'mongoose';
import env from './config/env';

import app from './config/app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect(env.mongoUrl);
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
  });
};

start();
