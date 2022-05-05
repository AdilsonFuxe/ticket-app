import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors';
import { validateRequest } from '../middlewares';
import { User } from '../models';
import { Password } from '../services';
import jwt from 'jsonwebtoken';

const router = Router();

const validation = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('You must supply a password'),
];

router.post(
  '/api/users/signin',
  validation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!,
      { expiresIn: '1d' }
    );

    req.session = { jwt: userJwt };

    return res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
