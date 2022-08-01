import {
  dbAddTicket,
  dbLoadTickets,
  dbLoadTicketById,
  dbUpdateTicket,
} from '@src/data/usecases';
import {
  AddTicket,
  LoadTickets,
  LoadTicketById,
  UpdateTicket,
} from '@src/domain/usecases';
import {
  addTicketRepository,
  loadTicketsRepository,
  loadTicketByIdRepository,
  updateTicketRepository,
} from '@src/infra/db/mongoose/repositories';

export const makeDbAddTicket = (): AddTicket =>
  dbAddTicket({
    addTicketRepository,
  });

export const makeDbLoadTickets = (): LoadTickets =>
  dbLoadTickets({ loadTicketsRepository });

export const makeDbLoadTicketById = (): LoadTicketById =>
  dbLoadTicketById({ loadTicketByIdRepository });

export const makeDbUpdateTicket = (): UpdateTicket =>
  dbUpdateTicket({ updateTicketRepository });
