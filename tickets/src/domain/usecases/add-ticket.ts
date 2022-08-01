import { Ticket } from '@src/domain/models';

export type AddTicket = (
  params: AddTicket.Params
) => Promise<AddTicket.Response>;

export namespace AddTicket {
  export type Params = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = Ticket;
}
