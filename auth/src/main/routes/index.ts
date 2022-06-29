import { Router } from 'express';
import { adaptRoute } from '@src/main/adapters';
import {
  makeMeController,
  makeSignInController,
  makeSignOutController,
  makeSignUpController,
} from '@src/main/factories/controller';
import { auth } from '@src/main/config/auth';

export default (router: Router): void => {
  router.post('/signin', adaptRoute(makeSignInController));
  router.get('/signup', adaptRoute(makeSignUpController));
  router.get('/signout', adaptRoute(makeSignOutController));
  router.put('/me', auth, adaptRoute(makeMeController));
};
