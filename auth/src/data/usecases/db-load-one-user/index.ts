import { LoadOneUSer } from '@src/domain/usecases';
import { BuildDbLoadOneUser } from './protocols';

export const dbLoadOneUser: BuildDbLoadOneUser =
  ({ loadOneUserRepository }) =>
  async (params: LoadOneUSer.Params) => {
    const user = await loadOneUserRepository(params);
    return user;
  };
