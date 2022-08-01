import { badRequest, created } from '@src/interface/helpers/http-helper';
import tryCatch from '@src/interface/helpers/try-cache';
import { BuildAddTicketController, validateFields } from './protocols';

const buildAddTicketController: BuildAddTicketController =
  ({ validate, addTicket, sanitize }) =>
  async (httRequest) => {
    const error = validate(httRequest.body);
    if (error) {
      return badRequest(error);
    }
    const sanitizedBody = sanitize(httRequest.body, validateFields);
    const ticket = await addTicket(sanitizedBody);
    return created(ticket);
  };
export const addTicketController = tryCatch(buildAddTicketController);
