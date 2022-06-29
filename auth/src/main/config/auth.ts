import { adaptMiddleware } from '@src/main/adapters';
import { makeAuthMiddleware } from '@src/main/factories/middleware';

export const auth = adaptMiddleware(makeAuthMiddleware);
