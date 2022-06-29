import { User } from '@src/domain/models';

export type LoadOneUser = (
  params: LoadOneUSer.Params
) => Promise<LoadOneUSer.Response>;

export namespace LoadOneUSer {
  export type Params = {
    email?: string;
    id?: string;
  };
  export type Response = User;
}
