import { LoadTickets } from '@src/domain/usecases';
import { BuildLoadTickets } from './protocols';

export const dbLoadTickets: BuildLoadTickets =
  ({ loadTicketsRepository }) =>
  async (params: LoadTickets.Params): Promise<LoadTickets.Response> => {
    const tickets = await loadTicketsRepository(params);
    return tickets;
  };
