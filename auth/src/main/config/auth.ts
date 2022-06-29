import { adaptMiddleware } from '../adapters';
import { makeAuthMiddleware } from '../factories/middleware';

export const auth = adaptMiddleware(makeAuthMiddleware);
