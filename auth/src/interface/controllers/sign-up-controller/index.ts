import { EmailInUseError } from '../../errors';
import { badRequest, created, tryCatch, forbidden } from '../../helpers';
import { BuildSignUp } from './protocols';

export const buildSignUp: BuildSignUp =
  ({ validateSignUp, signIn, loadOneUser, signUp }) =>
  async (httpRequest) => {
    const error = validateSignUp(httpRequest.body);
    if (error) {
      return badRequest(error);
    }
    const { email, password } = httpRequest.body;
    const user = await loadOneUser({ email });
    if (user) {
      return forbidden(new EmailInUseError());
    }
    await signUp({ email, password });
    const auth = await signIn({ email, password });
    const session = { jwt: auth.accessToken };
    return created(auth.user, session);
  };

export const signUpController = tryCatch(buildSignUp);
