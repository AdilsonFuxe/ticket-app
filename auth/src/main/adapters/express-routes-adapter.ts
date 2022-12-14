import { Response, Request } from 'express';
import {
  Controller,
  HttpRequest,
  HttpSessionType,
} from '../../interface/protocols';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
      ip: req.ip,
      method: req.method,
      path: req.path,
      userAgent: req.headers['user-agent'],
      currentUser: req?.currentUser,
    };
    const httpResponse = await controller(httpRequest);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      const session = httpResponse.session;
      if (session) {
        switch (session.type) {
          case HttpSessionType.createSession:
            req.session = session.data;
            break;
          case HttpSessionType.destroySession:
            req.session = null;
            break;
        }
      }
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
