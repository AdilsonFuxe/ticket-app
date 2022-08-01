import { LoadTickets } from '@src/domain/usecases';
import { Controller, SanitizeObj } from '@src/interface/protocols';

type Dependencies = {
  loadTickets: LoadTickets;
  sanitize: SanitizeObj;
};

export const validateFields = ['title', 'price'];

export type BuildLoadTicketsController = (
  dependencies: Dependencies
) => Controller;
