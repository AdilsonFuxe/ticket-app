import { AuthUser } from '@src/domain/models';

export type Encrypt = (params: Encrypt.Params) => string;

export namespace Encrypt {
  export type Params = AuthUser;
}
