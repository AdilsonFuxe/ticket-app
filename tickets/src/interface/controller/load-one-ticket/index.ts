import { ok } from '@src/interface/helpers/http-helper';
import tryCatch from '@src/interface/helpers/try-cache';
import { BuildLoadOneTicketController } from './protocols';

const buildLoadOneTicketController: BuildLoadOneTicketController =
  ({ loadTicketById }) =>
  async (httRequest) => {
    const { id } = httRequest.params;
    const ticket = await loadTicketById(id);
    return ok(ticket);
  };
export const loadOneTicketController = tryCatch(buildLoadOneTicketController);
