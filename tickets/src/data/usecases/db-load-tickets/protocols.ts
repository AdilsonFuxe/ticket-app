import { LoadTicketsRepository } from '@src/data/protocols/db';
import { LoadTickets } from '@src/domain/usecases';

type Dependencies = {
  loadTicketsRepository: LoadTicketsRepository;
};

export type BuildLoadTickets = (dependencies: Dependencies) => LoadTickets;
