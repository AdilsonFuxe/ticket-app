import { AddTicket, LoadTicketsTickets } from '@src/domain/usecases';

export namespace AddTicketRepository {
  export type Params = AddTicket.Params;
  export type Response = AddTicket.Response;
}

export type AddTicketRepository = (
  params: AddTicketRepository.Params
) => Promise<AddTicketRepository.Response>;

export type LoadTicketsTicketsRepository = (
  params: LoadTicketsTicketsRepository.Params
) => Promise<LoadTicketsTicketsRepository.Response>;

export namespace LoadTicketsTicketsRepository {
  export type Params = LoadTicketsTickets.Params;
  export type Response = LoadTicketsTickets.Response;
}
