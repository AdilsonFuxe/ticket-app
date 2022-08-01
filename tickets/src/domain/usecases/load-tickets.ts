import { Ticket } from '@src/domain/models';

export type LoadTickets = (
  params: LoadTickets.Params
) => Promise<LoadTickets.Response>;

export namespace LoadTickets {
  export type Params = Partial<Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>>;
  export type Response = Ticket[];
}
