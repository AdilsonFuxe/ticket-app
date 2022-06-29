import { User } from '../models';

export type SignUp = (params: SignUp.Params) => Promise<SignUp.Response>;

export namespace SignUp {
  export type Params = {
    email: string;
    password: string;
  };

  export type Response = User;
}
