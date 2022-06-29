import { HashPasswordCompare } from '@src/data/protocols/cryptography';
import bcrypt from 'bcrypt';

export const bcryptHashPasswordCompareAdapter: HashPasswordCompare = async (
  value: string,
  hash: string
): Promise<boolean> => {
  const isValid = await bcrypt.compare(value, hash);
  return isValid;
};
