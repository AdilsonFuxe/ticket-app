import { BuildDbSignIn } from './protocols';

export const dbSignIn: BuildDbSignIn =
  ({ loadOneUserRepository, hashPasswordCompare, encrypt }) =>
  async ({ email, password }) => {
    const user = await loadOneUserRepository({ email });
    if (user) {
      const isValid = await hashPasswordCompare(password, user.password);
      if (isValid) {
        const accessToken = encrypt({
          id: user.id,
          email: user.email,
        });
        return {
          user,
          accessToken,
        };
      }
    }
    return null;
  };
