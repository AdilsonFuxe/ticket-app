import { Router } from 'express';
import { adaptRoute } from '@src/main/adapters';
import {
  makeAddTicketController,
  makeLoadTicketsController,
  makeLoadOneTicketController,
  makeUpdateTicketController,
} from '@src/main/factories/controller';

export default (router: Router): void => {
  router.post('/tickets', adaptRoute(makeAddTicketController()));
  router.get('/tickets', adaptRoute(makeLoadTicketsController()));
  router.get('/tickets/:id', adaptRoute(makeLoadOneTicketController()));
  router.put('/tickets/:id', adaptRoute(makeUpdateTicketController()));
};
