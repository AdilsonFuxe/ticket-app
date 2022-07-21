import { Controller, HttpRequest } from '../protocols';
import { serverError } from './http-helper';

type GenericFunction<T> = (...arg: T[]) => Controller;

export function tryCatch<T>(fn: GenericFunction<T>) {
  return (...props: T[]) =>
    async (httpRequest: HttpRequest) => {
      try {
        return await fn(...props)(httpRequest);
      } catch (error: any) {
        return serverError(error);
      }
    };
}
