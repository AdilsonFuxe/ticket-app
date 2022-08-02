import mongoose from 'mongoose';
import env from './config/env';

import app from './config/app';

const start = async () => {
  if (!env.jwtSecret) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!env.mongoUrl) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    await mongoose.connect(env.mongoUrl);
  } catch (error) {
    console.error(error);
  }
  app.listen(env.port, () => {
    console.log('Server is running on port 3000!!');
  });
};

start();
