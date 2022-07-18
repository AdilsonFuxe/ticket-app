import { Response, Request, NextFunction } from 'express';
import { Controller, HttpRequest } from '../../interface/protocols';

export const adaptMiddleware = (middleware: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
      session: req.session,
    };
    const httpResponse = await middleware(httpRequest);
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
      next();
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
