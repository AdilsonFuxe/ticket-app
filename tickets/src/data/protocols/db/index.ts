import { AddTicket } from "@src/domain/usecases";

export type AddTicketRepository = (params: AddTicketRepository.Params) => Promise<AddTicketRepository.Response>

export namespace AddTicketRepository {
  export type Params =  AddTicket.Params
  export type Response = AddTicket.Response
}