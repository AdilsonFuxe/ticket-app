import './setup-env';

export default {
  mongoUrl: 'mongodb://tickets-mongo-srv:27017/tickets',
  port: 3000,
  jwtSecret: process.env.JWT_KEY!,
  salt: 12,
};
