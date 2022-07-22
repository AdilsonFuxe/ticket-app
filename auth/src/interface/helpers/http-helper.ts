import { NotFoundError, ServerError, UnauthorizedError } from '../errors';
import {
  HttpResponse,
  HttpResponseSession,
  HttpStatusCode,
} from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.badRequest,
  body: error,
});

export const created = (
  data: any,
  session?: HttpResponseSession
): HttpResponse => ({
  statusCode: HttpStatusCode.created,
  body: data,
  session,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: new ServerError(error.stack),
});

export const notFoundError = (paramName: string): HttpResponse => ({
  statusCode: HttpStatusCode.notFound,
  body: new NotFoundError(paramName),
});

export const ok = (data: any, session?: HttpResponseSession): HttpResponse => ({
  statusCode: HttpStatusCode.ok,
  body: data,
  session,
});

export const noContent = (session?: HttpResponseSession): HttpResponse => ({
  statusCode: HttpStatusCode.noContent,
  session,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: HttpStatusCode.unauthorized,
  body: new UnauthorizedError(),
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.forbidden,
  body: error,
});
