import { LoadAuthUser } from '@src/domain/usecases';
import { Controller } from '@src/interface/protocols';

interface Dependencies {
  loadAuthUSer: LoadAuthUser;
}

export type BuildAuthMiddleware = (dependencies: Dependencies) => Controller;
