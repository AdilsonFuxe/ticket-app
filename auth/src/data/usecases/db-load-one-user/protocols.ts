import { LoadOneUser } from '../../../domain/usecases';
import { LoadOneUserRepository } from '../../protocols/db';

interface Dependencies {
  loadOneUserRepository: LoadOneUserRepository;
}

export type BuildDbLoadOneUser = (dependencies: Dependencies) => LoadOneUser;
