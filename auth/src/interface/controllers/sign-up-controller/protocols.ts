import { SignIn, LoadOneUser, SignUp } from '@src/domain/usecases';
import { Controller, Validation } from '@src/interface/protocols';

interface Dependencies {
  signUp: SignUp;
  signIn: SignIn;
  loadOneUser: LoadOneUser;
  validateSignUp: Validation;
}

export type BuildSignUp = (dependencies: Dependencies) => Controller;
