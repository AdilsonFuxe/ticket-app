import { UpdateTicketRepository } from '@src/data/protocols/db';
import { UpdateTicket } from '@src/domain/usecases';

type Dependencies = {
  updateTicketRepository: UpdateTicketRepository;
};

export type BuildUpdateTicker = (dependencies: Dependencies) => UpdateTicket;
