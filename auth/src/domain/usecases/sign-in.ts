import { User } from '../models';

export type SignIn = (params: SignIn.Params) => Promise<SignIn.Response>;

export namespace SignIn {
  export type Params = {
    email: string;
    password: string;
  };

  export type Response = {
    user: User;
    accessToken: string;
  };
}
