import { AuthUser } from '@src/domain/models';

export type Decrypt = (accessToken: string) => Decrypt.Response;

export namespace Decrypt {
  export type Response = AuthUser;
}
