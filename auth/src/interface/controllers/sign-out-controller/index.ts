import {
  badRequest,
  created,
  unauthorized,
  tryCatch,
  noContent,
} from '@src/interface/helpers';
import { BuildSignOut } from './protocols';

export const buildSignOut: BuildSignOut = () => async (httpRequest) => {
  httpRequest.session = null;
  return noContent();
};

export const signOutController = tryCatch(buildSignOut);
