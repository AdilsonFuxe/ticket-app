import {
  meController,
  signInController,
  signOutController,
  signUpController,
} from '../../../interface/controllers';
import { makeDbLoadOneUser, makeDbSignIn, makeDbSignUp } from '../usecases';

import { makeSignUpValidation, makeSignInValidation } from './protocols';

export const makeSignUpController = signUpController({
  loadOneUser: makeDbLoadOneUser(),
  validateSignUp: makeSignUpValidation(),
  signIn: makeDbSignIn(),
  signUp: makeDbSignUp(),
});

export const makeSignInController = signInController({
  validateSignIn: makeSignInValidation(),
  signIn: makeDbSignIn(),
});

export const makeSignOutController = signOutController();

export const makeMeController = meController();
