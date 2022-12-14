import { NotFoundError, ServerError } from '@src/interface/errors';
import { HttpResponse, HttpStatusCode } from '@src/interface/protocols';


export const badRequest = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.badRequest,
  body: error,
});

export const created = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.created,
  body: data,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: new ServerError(error.stack),
});

export const notFoundError = (paramName: string): HttpResponse => ({
  statusCode: HttpStatusCode.notFound,
  body: new NotFoundError(paramName),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.ok,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: HttpStatusCode.noContent,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.forbidden,
  body: error,
});
