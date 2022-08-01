import { Router } from 'express';
import { adaptRoute } from '@src/main/adapters';
import {
  makeAddTicketController,
  makeLoadTicketsController,
} from '@src/main/factories/controller';

export default (router: Router): void => {
  router.post('/tickets', adaptRoute(makeAddTicketController()));
  router.get('/tickets', adaptRoute(makeLoadTicketsController()));
};
