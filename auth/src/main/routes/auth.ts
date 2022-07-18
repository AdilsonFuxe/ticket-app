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
  router.post('/signup', adaptRoute(makeSignUpController));
  router.post('/signout', auth, adaptRoute(makeSignOutController));
  router.get('/me', auth, adaptRoute(makeMeController));
};
