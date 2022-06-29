import { Decrypt } from '@src/data/protocols/cryptography';
import { AuthUser } from '@src/domain/models';
import jwt from 'jsonwebtoken';
import { BuildJwtDecryptAdapter } from './protocols';

export const jwtDecryptAdapter: BuildJwtDecryptAdapter =
  (secret: string) => (accessToken: string) => {
    const result = jwt.verify(accessToken, secret) as AuthUser;
    return result;
  };
