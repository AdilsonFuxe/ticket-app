import { AuthUser } from '@src/domain/models';

export type LoadAuthUser = (accessToken: string) => LoadAuthUser.Response;

export namespace LoadAuthUser {
  export type Response = AuthUser;
}
