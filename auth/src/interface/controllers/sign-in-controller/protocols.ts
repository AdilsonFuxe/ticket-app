import { SignIn } from '../../../domain/usecases';
import { Controller, Validation } from '../../protocols';

interface Dependencies {
  signIn: SignIn;
  validateSignIn: Validation;
}

export type BuildSignIn = (dependencies: Dependencies) => Controller;
