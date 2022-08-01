import { ok } from '@src/interface/helpers/http-helper';
import tryCatch from '@src/interface/helpers/try-cache';
import { BuildLoadTicketsController, validateFields } from './protocols';

const buildLoadTicketsController: BuildLoadTicketsController =
  ({ loadTickets, sanitize }) =>
  async (httRequest) => {
    const sanitizedParams = sanitize(httRequest.body, validateFields);
    const tickets = await loadTickets(sanitizedParams);
    return ok(tickets);
  };
export const loadTicketsController = tryCatch(buildLoadTicketsController);
