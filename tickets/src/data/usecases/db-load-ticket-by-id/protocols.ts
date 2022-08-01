import { LoadTicketByIdRepository } from '@src/data/protocols/db';
import { LoadTicketById } from '@src/domain/usecases';

type Dependencies = {
  loadTicketByIdRepository: LoadTicketByIdRepository;
};

export type BuildLoadTicketById = (
  dependencies: Dependencies
) => LoadTicketById;
