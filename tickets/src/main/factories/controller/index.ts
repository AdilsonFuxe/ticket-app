import {
  addTicketController,
  loadTicketsController,
  loadOneTicketController,
  updateTicketController,
} from '@src/interface/controller';
import { Controller } from '@src/interface/protocols';
import {
  makeAddTicketValidation,
  makeUpdateTicketValidation,
} from './protocols';
import {
  makeDbAddTicket,
  makeDbLoadTicketById,
  makeDbLoadTickets,
  makeDbUpdateTicket,
} from '@src/main/factories/usecases';
import { sanitizeObject } from '@src/main/factories/utils';

export const makeAddTicketController = (): Controller =>
  addTicketController({
    validate: makeAddTicketValidation(),
    addTicket: makeDbAddTicket(),
    sanitize: sanitizeObject,
  });

export const makeLoadTicketsController = (): Controller =>
  loadTicketsController({
    loadTickets: makeDbLoadTickets(),
    sanitize: sanitizeObject,
  });

export const makeLoadOneTicketController = (): Controller =>
  loadOneTicketController({
    loadTicketById: makeDbLoadTicketById(),
  });

export const makeUpdateTicketController = (): Controller =>
  updateTicketController({
    sanitize: sanitizeObject,
    updateTicket: makeDbUpdateTicket(),
    loadTicketById: makeDbLoadTicketById(),
    validate: makeUpdateTicketValidation(),
  });
