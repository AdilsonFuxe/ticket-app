import { Ticket } from '@src/domain/models';

export type LoadTicketsTickets = (
  params: LoadTicketsTickets.Params
) => Promise<LoadTicketsTickets.Response>;

export namespace LoadTicketsTickets {
  export type Params = {};
  export type Response = Ticket[];
}
