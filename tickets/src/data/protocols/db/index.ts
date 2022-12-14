import {
  AddTicket,
  LoadTicketById,
  LoadTickets,
  UpdateTicket,
} from '@src/domain/usecases';

export namespace AddTicketRepository {
  export type Params = AddTicket.Params;
  export type Response = AddTicket.Response;
}

export type AddTicketRepository = (
  params: AddTicketRepository.Params
) => Promise<AddTicketRepository.Response>;

export type LoadTicketsRepository = (
  params: LoadTicketsRepository.Params
) => Promise<LoadTicketsRepository.Response>;

export namespace LoadTicketsRepository {
  export type Params = LoadTickets.Params;
  export type Response = LoadTickets.Response;
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
