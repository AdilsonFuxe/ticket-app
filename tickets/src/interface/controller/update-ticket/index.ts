import {
  badRequest,
  notFoundError,
  ok,
} from '@src/interface/helpers/http-helper';
import tryCatch from '@src/interface/helpers/try-cache';
import { BuildUpdateTicketController, validateFields } from './protocols';

const buildUpdateTicketController: BuildUpdateTicketController =
  ({ validate, updateTicket, loadTicketById, sanitize }) =>
  async (httRequest) => {
    const error = validate(httRequest.body);
    if (error) {
      return badRequest(error);
    }
    const sanitizedBody = sanitize(httRequest.body, validateFields);
    const { id } = httRequest.params;
    const ticket = await loadTicketById(id);
    if (!ticket) {
      return notFoundError('ticket');
    }
    const updatedTicket = await updateTicket(id, sanitizedBody);
    return ok(updatedTicket);
  };
export const updateTicketController = tryCatch(buildUpdateTicketController);
