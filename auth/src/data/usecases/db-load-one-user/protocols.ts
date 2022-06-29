import { LoadOneUserRepository } from '@src/data/protocols/db';
import { LoadOneUser } from '@src/domain/usecases';

interface Dependencies {
  loadOneUserRepository: LoadOneUserRepository;
}

export type BuildDbLoadOneUser = (dependencies: Dependencies) => LoadOneUser;
