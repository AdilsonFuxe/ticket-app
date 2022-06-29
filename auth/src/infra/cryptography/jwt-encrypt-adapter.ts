import { Encrypt } from '@src/data/protocols/cryptography';
import jwt from 'jsonwebtoken';
import { BuildJwtEncryptAdapter } from './protocols';

export const jwtEncryptAdapter: BuildJwtEncryptAdapter =
  (secret: string) =>
  (params: Encrypt.Params): string => {
    const accessToken = jwt.sign(params, secret, { expiresIn: '1d' });
    return accessToken;
  };
