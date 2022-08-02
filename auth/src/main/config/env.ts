import 'dotenv/config';

export default {
  mongoUrl: process.env.MONGO_URI!,
  port: 3000,
  jwtSecret: process.env.JWT_KEY!,
  salt: 12,
};
