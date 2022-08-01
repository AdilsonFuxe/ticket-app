import { Router } from 'express';
import { adaptRoute } from '@src/main/adapters';
import { makeHelloWorldController } from '@src/main/factories/controller';

export default (router: Router): void => {
  router.get('/hello', adaptRoute(makeHelloWorldController));
};