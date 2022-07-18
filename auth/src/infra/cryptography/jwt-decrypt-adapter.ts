import jwt from 'jsonwebtoken';
import { BuildJwtDecryptAdapter } from './protocols';
import { AuthUser } from '../../domain/models';

export const jwtDecryptAdapter: BuildJwtDecryptAdapter =
  (secret: string) => (accessToken: string) => {
    const result = jwt.verify(accessToken, secret) as AuthUser;

    if (result) {
      const { id, email } = result;
      return { id, email };
    }

    return null;
  };
