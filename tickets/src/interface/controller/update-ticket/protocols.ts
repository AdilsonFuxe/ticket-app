import { UpdateTicket } from '@src/domain/usecases';
import { Controller, SanitizeObj, Validation } from '@src/interface/protocols';

type Dependencies = {
  validate: Validation;
  updateTicket: UpdateTicket;
  sanitize: SanitizeObj;
};

export const validateFields = ['title', 'price'];

export type BuildUpdateTicketController = (
  dependencies: Dependencies
) => Controller;
