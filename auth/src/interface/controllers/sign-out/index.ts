import { noContent, tryCatch } from '../../helpers';
import { HttpSessionType } from '../../protocols';
import { BuildSignOut } from './protocols';

export const buildSignOut: BuildSignOut = () => async (httpRequest) => {
  return noContent({
    data: null,
    type: HttpSessionType.destroySession,
  });
};

export const signOutController = tryCatch(buildSignOut);
