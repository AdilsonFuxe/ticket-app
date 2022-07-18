import { noContent, tryCatch } from '../../helpers';
import { BuildSignOut } from './protocols';

export const buildSignOut: BuildSignOut = () => async (httpRequest) => {
  return noContent();
};

export const signOutController = tryCatch(buildSignOut);
