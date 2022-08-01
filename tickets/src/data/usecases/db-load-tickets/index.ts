import { LoadTicketsTickets } from '@src/domain/usecases';
import { BuildLoadTicketsTickets } from './protocols';

export const dbLoadTicketsTickets: BuildLoadTicketsTickets =
  ({ loadTicketsTicketsRepository }) =>
  async (
    params: LoadTicketsTickets.Params
  ): Promise<LoadTicketsTickets.Response> => {
    const tickets = await loadTicketsTicketsRepository(params);
    return tickets;
  };
