import { BuildDbLoadAuthUser } from './protocols';

export const dbLoadAuthUser: BuildDbLoadAuthUser =
  ({ decrypt }) =>
  (accessToken: string) => {
    const user = decrypt(accessToken);
    return user;
  };
