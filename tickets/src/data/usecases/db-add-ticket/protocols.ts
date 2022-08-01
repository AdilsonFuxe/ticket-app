import { AddTicketRepository } from "@src/data/protocols/db"
import { AddTicket } from "@src/domain/usecases"

type Dependencies = {
  addTicketRepository: AddTicketRepository
}

export type BuildAddTicket = (dependencies: Dependencies) => AddTicket