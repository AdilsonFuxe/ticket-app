import { authMiddleware } from '../../../interface/middlewares/auth-middleware';
import { makeDbLoadAuthUSer } from '../usecases';

export const makeAuthMiddleware = authMiddleware({
  loadAuthUSer: makeDbLoadAuthUSer(),
});
