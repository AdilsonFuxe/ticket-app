import { User } from '@src/domain/models';

export type AddUserRepository = (
  params: AddUserRepository.Params
) => Promise<AddUserRepository.Response>;

export namespace AddUserRepository {
  export type Params = {
    email: string;
    password: string;
  };

  export type Response = User;
}
