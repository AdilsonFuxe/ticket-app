import { Ticket } from '@src/domain/models';

export type UpdateTicket = (
  id: string,
  params: UpdateTicket.Params
) => Promise<UpdateTicket.Response>;

export namespace UpdateTicket {
  export type Params = Partial<Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>>;
  export type Response = Ticket;
}
