import { BuildDbSignUp } from './protocols';

export const dbSignUp: BuildDbSignUp =
  ({ addUserRepository, hashPassword }) =>
  async ({ email, password }) => {
    const hashedPAssword = await hashPassword(password);
    const user = await addUserRepository({ email, password: hashedPAssword });
    return user;
  };
