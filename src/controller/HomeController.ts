import { Request, Response } from 'express';

export class HomeController {
  async info(response: Response) {
    response.status(200).json({ data: 'success' });
  }

  async notFound(request: Request, response: Response) {
    response
      .status(404)
      .json({ status: 404, url: request.originalUrl, msg: 'Not found' });
  }
}
