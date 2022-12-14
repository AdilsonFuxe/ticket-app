import {
  Encrypt,
  HashPassword,
  Decrypt,
} from '../../data/protocols/cryptography';

export type BuildBcryptHashPasswordAdapter = (salt: number) => HashPassword;
export type BuildJwtEncryptAdapter = (secret: string) => Encrypt;
export type BuildJwtDecryptAdapter = (secret: string) => Decrypt;
