import { LoadAuthUser } from '../../../domain/usecases';
import { Decrypt } from '../../protocols/cryptography';

interface Dependencies {
  decrypt: Decrypt;
}

export type BuildDbLoadAuthUser = (dependencies: Dependencies) => LoadAuthUser;
