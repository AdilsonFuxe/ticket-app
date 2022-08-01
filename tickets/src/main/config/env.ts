import './setup-env';

export default {
  mongoUrl: 'mongodb://ticket-mongo-srv:27017/ticket',
  port: 3000,
  jwtSecret: process.env.JWT_KEY!,
  salt: 12,
};
