import { UpdateTicket } from '@src/domain/usecases';
import { BuildUpdateTicker } from './protocols';

export const dbUpdateTicket: BuildUpdateTicker =
  ({ updateTicketRepository }) =>
  async (
    id: string,
    params: UpdateTicket.Params
  ): Promise<UpdateTicket.Response> => {
    const ticket = await updateTicketRepository(id, params);
    return ticket;
  };
