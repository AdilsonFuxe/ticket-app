import { LoadOneUSer } from '@src/domain/usecases';

export type LoadOneUserRepository = (
  params: LoadOneUserRepository.Params
) => Promise<LoadOneUserRepository.Response>;

export namespace LoadOneUserRepository {
  export type Params = LoadOneUSer.Params;
  export type Response = LoadOneUSer.Response;
}
