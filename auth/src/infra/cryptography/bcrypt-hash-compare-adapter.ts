import bcrypt from 'bcrypt';
import { HashPasswordCompare } from '../../data/protocols/cryptography';

export const bcryptHashPasswordCompareAdapter: HashPasswordCompare = async (
  value: string,
  hash: string
): Promise<boolean> => {
  const isValid = await bcrypt.compare(value, hash);
  return isValid;
};
