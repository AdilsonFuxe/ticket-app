import { authMiddleware } from '@src/interface/middlewares/auth-middleware';
import { makeDbLoadAuthUSer } from '@src/main/factories/usecases';

export const makeAuthMiddleware = authMiddleware({
  loadAuthUSer: makeDbLoadAuthUSer(),
});
