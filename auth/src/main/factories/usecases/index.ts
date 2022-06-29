import {
  dbLoadAuthUser,
  dbLoadOneUser,
  dbSignIn,
  dbSignUp,
} from '../../../data/usecases';
import {
  LoadAuthUser,
  LoadOneUser,
  SignIn,
  SignUp,
} from '../../../domain/usecases';
import {
  bcryptHashPasswordAdapter,
  bcryptHashPasswordCompareAdapter,
  jwtEncryptAdapter,
  jwtDecryptAdapter,
} from '../../../infra/cryptography';
import {
  loadOneUserRepository,
  addUserRepository,
} from '../../../infra/db/mongoose/repositories';
import env from '../../config/env';

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
