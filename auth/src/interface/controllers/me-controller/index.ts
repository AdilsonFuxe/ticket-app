import { ok, tryCatch } from '../../helpers';
import { BuildMe } from './protocols';

export const buildMe: BuildMe = () => async (httpRequest) => {
  return ok({ currentUser: httpRequest.currentUser || null });
};

export const meController = tryCatch(buildMe);
