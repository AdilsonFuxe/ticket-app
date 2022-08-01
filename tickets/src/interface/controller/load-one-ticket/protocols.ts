import { LoadTicketById } from '@src/domain/usecases';
import { Controller, SanitizeObj } from '@src/interface/protocols';

type Dependencies = {
  loadTicketById: LoadTicketById;
};

export type BuildLoadOneTicketController = (
  dependencies: Dependencies
) => Controller;
