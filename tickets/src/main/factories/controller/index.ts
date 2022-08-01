import { addTicketController } from '@src/interface/controller';
import { Controller } from '@src/interface/protocols';
import { makeAddTicketValidation } from './protocols';
import { makeDbAddTicket } from '@src/main/factories/usecases';
import { sanitizeObject } from '@src/main/factories/utils';

export const makeAddTicketController = (): Controller =>
  addTicketController({
    validate: makeAddTicketValidation(),
    addTicket: makeDbAddTicket(),
    sanitize: sanitizeObject,
  });
