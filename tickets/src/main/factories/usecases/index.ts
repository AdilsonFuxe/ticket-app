import { dbAddTicket, dbLoadTickets } from '@src/data/usecases';
import { AddTicket, LoadTickets } from '@src/domain/usecases';
import {
  addTicketRepository,
  loadTicketsRepository,
} from '@src/infra/db/mongoose/repositories';

export const makeDbAddTicket = (): AddTicket =>
  dbAddTicket({
    addTicketRepository,
  });

export const makeDbLoadTickets = (): LoadTickets =>
  dbLoadTickets({ loadTicketsRepository });
