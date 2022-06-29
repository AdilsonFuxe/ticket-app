import {
  dbLoadAuthUser,
  dbLoadOneUser,
  dbSignIn,
  dbSignUp,
} from '@src/data/usecases';
import {
  LoadAuthUser,
  LoadOneUser,
  SignIn,
  SignUp,
} from '@src/domain/usecases';
import {
  bcryptHashPasswordAdapter,
  bcryptHashPasswordCompareAdapter,
  jwtEncryptAdapter,
  jwtDecryptAdapter,
} from '@src/infra/cryptography';
import {
  loadOneUserRepository,
  addUserRepository,
} from '@src/infra/db/mongoose/repositories';
import env from '@src/main/config/env';

export const makeDbSignIn = (): SignIn =>
  dbSignIn({
    encrypt: jwtEncryptAdapter(env.jwtSecret),
    hashPasswordCompare: bcryptHashPasswordCompareAdapter,
    loadOneUserRepository,
  });

export const makeDbSignUp = (): SignUp =>
  dbSignUp({
    hashPassword: bcryptHashPasswordAdapter(env.salt),
    addUserRepository,
  });

export const makeDbLoadOneUser = (): LoadOneUser =>
  dbLoadOneUser({
    loadOneUserRepository,
  });

export const makeDbLoadAuthUSer = (): LoadAuthUser =>
  dbLoadAuthUser({ decrypt: jwtDecryptAdapter(env.jwtSecret) });
