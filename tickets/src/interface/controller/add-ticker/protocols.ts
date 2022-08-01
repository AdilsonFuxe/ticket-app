import { AddTicket } from '@src/domain/usecases';
import { Controller, SanitizeObj, Validation } from '@src/interface/protocols';

type Dependencies = {
  validate: Validation;
  addTicket: AddTicket;
  sanitize: SanitizeObj;
};

export const validateFields = ['title', 'price'];

export type BuildAddTicketController = (
  dependencies: Dependencies
) => Controller;
