import { AccessDeniedError } from '@src/interface/errors';
import { forbidden, ok, tryCatch } from '@src/interface/helpers';
import { BuildAuthMiddleware } from './protocols';

export const buildAuthMiddleware: BuildAuthMiddleware =
  ({ loadAuthUSer }) =>
  async (httpRequest) => {
    const accessToken = httpRequest.session?.jwt;
    if (accessToken) {
      const currentUser = loadAuthUSer(accessToken);
      if (currentUser) {
        return ok({ currentUser });
      }
    }
    return forbidden(new AccessDeniedError());
  };

export const authMiddleware = tryCatch(buildAuthMiddleware);
