import { badRequest, unauthorized, tryCatch, ok } from '../../helpers';
import { HttpSessionType } from '../../protocols';
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
    const session = { jwt: auth.accessToken };
    return ok(auth.user, {
      type: HttpSessionType.createSession,
      data: session,
    });
  };

export const signInController = tryCatch(buildSignIn);
