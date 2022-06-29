import { SignIn } from '../../../domain/usecases';
import { Encrypt, HashPasswordCompare } from '../../protocols/cryptography';
import { LoadOneUserRepository } from '../../protocols/db';

interface Dependencies {
  encrypt: Encrypt;
  hashPasswordCompare: HashPasswordCompare;
  loadOneUserRepository: LoadOneUserRepository;
}

export type BuildDbSignIn = (dependencies: Dependencies) => SignIn;
