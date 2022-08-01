import { Response, Request } from 'express';
import { Controller, HttpRequest } from '@src/interface/protocols';

export const adaptRoute = (controller: Controller) => async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
      ip: req.ip,
      method: req.method,
      path: req.path,
      userAgent: req.headers['user-agent'],
    };
    const httpResponse = await controller(httpRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
