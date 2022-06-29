import { Router } from 'express';
import { adaptRoute } from '../adapters';
import {
  makeMeController,
  makeSignInController,
  makeSignOutController,
  makeSignUpController,
} from '../factories/controller';
import { auth } from '../config/auth';

export default (router: Router): void => {
  router.post('/signin', adaptRoute(makeSignInController));
  router.get('/signup', adaptRoute(makeSignUpController));
  router.get('/signout', adaptRoute(makeSignOutController));
  router.put('/me', auth, adaptRoute(makeMeController));
};
