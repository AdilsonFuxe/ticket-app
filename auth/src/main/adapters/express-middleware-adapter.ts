import { Response, Request, NextFunction } from 'express';
import { AuthUser } from '../../domain/models';
import { Controller, HttpRequest } from '../../interface/protocols';

declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthUser;
    }
  }
}

export const adaptMiddleware = (middleware: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      session: req.session,
    };
    const httpResponse = await middleware(httpRequest);
    if (httpResponse.statusCode === 200) {
      req.currentUser = httpResponse.body.currentUser;
      next();
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
