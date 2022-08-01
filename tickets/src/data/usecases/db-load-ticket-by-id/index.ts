import { LoadTicketById } from '@src/domain/usecases';
import { BuildLoadTicketById } from './protocols';

export const dbLoadTicketById: BuildLoadTicketById =
  ({ loadTicketByIdRepository }) =>
  async (id: string): Promise<LoadTicketById.Response> => {
    const ticket = await loadTicketByIdRepository(id);
    return ticket;
  };
