import {
  AddTicket,
  LoadTicketById,
  LoadTicketsTickets,
  UpdateTicket,
} from '@src/domain/usecases';

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

export type LoadTicketByIdRepository = (
  id: string
) => Promise<LoadTicketByIdRepository.Response>;

export namespace LoadTicketByIdRepository {
  export type Response = LoadTicketById.Response;
}

export type UpdateTicketRepository = (
  id: string,
  params: UpdateTicketRepository.Params
) => Promise<UpdateTicketRepository.Response>;

export namespace UpdateTicketRepository {
  export type Params = UpdateTicket.Params;
  export type Response = UpdateTicket.Response;
}
