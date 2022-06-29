import { LoadAuthUser } from '../../../domain/usecases';
import { Controller } from '../../protocols';

interface Dependencies {
  loadAuthUSer: LoadAuthUser;
}

export type BuildAuthMiddleware = (dependencies: Dependencies) => Controller;
