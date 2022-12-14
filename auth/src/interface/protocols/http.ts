import { AuthUser } from '../../domain/models';

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export enum HttpSessionType {
  createSession = 'createSession',
  destroySession = 'destroySession',
}

export type HttpResponseSession = {
  data: any;
  type: HttpSessionType;
};

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
  session?: HttpResponseSession;
};

export type HttpRequest = {
  body?: any;
  headers?: any;
  query?: any;
  params?: any;
  ip?: string;
  method?: string;
  userAgent?: string;
  session?: any;
  currentUser?: AuthUser;
  path?: string;
};
