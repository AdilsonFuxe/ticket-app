import { SignUp } from '../../../domain/usecases';
import { HashPassword } from '../../protocols/cryptography';
import { AddUserRepository } from '../../protocols/db';

interface Dependencies {
  hashPassword: HashPassword;
  addUserRepository: AddUserRepository;
}

export type BuildDbSignUp = (dependencies: Dependencies) => SignUp;
