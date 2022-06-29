import { Encrypt, HashPasswordCompare } from '@src/data/protocols/cryptography';
import { LoadOneUserRepository } from '@src/data/protocols/db';
import { SignIn } from '@src/domain/usecases';

interface Dependencies {
  encrypt: Encrypt;
  hashPasswordCompare: HashPasswordCompare;
  loadOneUserRepository: LoadOneUserRepository;
}

export type BuildDbSignIn = (dependencies: Dependencies) => SignIn;
