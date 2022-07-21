import { SignIn, LoadOneUser, SignUp } from '../../../domain/usecases';
import { Controller, Validation } from '../../protocols';

interface Dependencies {
  signUp: SignUp;
  signIn: SignIn;
  loadOneUser: LoadOneUser;
  validateSignUp: Validation;
}

export type BuildSignUp = (dependencies: Dependencies) => Controller;
