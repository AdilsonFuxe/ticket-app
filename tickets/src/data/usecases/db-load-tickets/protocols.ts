import { LoadTicketsTicketsRepository } from '@src/data/protocols/db';
import { LoadTicketsTickets } from '@src/domain/usecases';

type Dependencies = {
  loadTicketsTicketsRepository: LoadTicketsTicketsRepository;
};

export type BuildLoadTicketsTickets = (
  dependencies: Dependencies
) => LoadTicketsTickets;
