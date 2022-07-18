import { AccessDeniedError } from '../../errors';
import { forbidden, ok, tryCatch } from '../../helpers';
import { BuildAuthMiddleware } from './protocols';

export const buildAuthMiddleware: BuildAuthMiddleware =
  ({ loadAuthUSer }) =>
  async (httpRequest) => {
    const accessToken = httpRequest.session?.jwt;
    if (accessToken) {
      const currentUser = loadAuthUSer(accessToken);
      console.log(currentUser);
      if (currentUser) {
        return ok({ currentUser });
      }
    }
    return forbidden(new AccessDeniedError());
  };

export const authMiddleware = tryCatch(buildAuthMiddleware);
