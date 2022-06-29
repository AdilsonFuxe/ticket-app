import { SignIn } from '@src/domain/usecases';
import { Controller, Validation } from '@src/interface/protocols';

interface Dependencies {
  signIn: SignIn;
  validateSignIn: Validation;
}

export type BuildSignIn = (dependencies: Dependencies) => Controller;
