import {
  badRequest,
  created,
  unauthorized,
  tryCatch,
} from '@src/interface/helpers';
import { BuildSignIn } from './protocols';

export const buildSignIn: BuildSignIn =
  ({ validateSignIn, signIn }) =>
  async (httpRequest) => {
    const error = validateSignIn(httpRequest.body);
    if (error) {
      return badRequest(error);
    }
    const { email, password } = httpRequest.body;
    const auth = await signIn({ email, password });
    if (!auth) {
      return unauthorized();
    }
    httpRequest.session = { jwt: auth.accessToken };
    return created(auth.user);
  };

export const signInController = tryCatch(buildSignIn);
