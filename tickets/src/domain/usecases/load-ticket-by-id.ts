import { Ticket } from '@src/domain/models';

export type LoadTicketById = (id: string) => Promise<LoadTicketById.Response>;

export namespace LoadTicketById {
  export type Response = Ticket;
}
