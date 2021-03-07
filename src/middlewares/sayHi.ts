import { nextTick } from 'process';

import { Request, Response, NextFunction } from 'express';

export const sayHi = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log('a');
  next();
};
