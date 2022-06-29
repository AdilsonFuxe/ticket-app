import { HashPassword } from '@src/data/protocols/cryptography';
import { AddUserRepository } from '@src/data/protocols/db';
import { SignUp } from '@src/domain/usecases';

interface Dependencies {
  hashPassword: HashPassword;
  addUserRepository: AddUserRepository;
}

export type BuildDbSignUp = (dependencies: Dependencies) => SignUp;
