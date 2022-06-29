import bcrypt from 'bcrypt';
import { BuildBcryptHashPasswordAdapter } from './protocols';

export const bcryptHashPasswordAdapter: BuildBcryptHashPasswordAdapter =
  (salt: number) =>
  async (value: string): Promise<string> => {
    const hash = await bcrypt.hash(value, salt);
    return hash;
  };
