import { dbAddTicket } from '@src/data/usecases';
import { AddTicket } from '@src/domain/usecases';
import { addTicketRepository } from '@src/infra/db/mongoose/repositories';

export const makeDbAddTicket = (): AddTicket =>
  dbAddTicket({
    addTicketRepository,
  });
