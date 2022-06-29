import { Decrypt } from '@src/data/protocols/cryptography';
import { LoadAuthUser } from '@src/domain/usecases';

interface Dependencies {
  decrypt: Decrypt;
}

export type BuildDbLoadAuthUser = (dependencies: Dependencies) => LoadAuthUser;
