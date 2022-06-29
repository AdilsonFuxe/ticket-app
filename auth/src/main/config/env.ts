import './setup-env';

export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://auth-mongo-srv:27017/auth',
  port: 3000,
  jwtSecret: process.env.JWT_KEY!,
  salt: 12,
};
