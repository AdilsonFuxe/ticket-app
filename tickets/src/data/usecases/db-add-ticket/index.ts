import { AddTicket } from '@src/domain/usecases';
import { BuildAddTicket } from './protocols';

export const dbAddTicket: BuildAddTicket =
  ({ addTicketRepository }) =>
  async (params: AddTicket.Params): Promise<AddTicket.Response> => {
    const ticket = await addTicketRepository(params);
    return ticket;
  };
