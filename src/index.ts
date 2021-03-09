import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';

const PORT = process.env.APP_PORT || 5100;

createConnection()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        route.middleware
          ? route.middleware
          : (req: Request, res: Response, next: express.NextFunction) => {
              next();
            },
        route.middleware_2
          ? route.middleware_2
          : (req: Request, res: Response, next: express.NextFunction) => {
              next();
            },
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.listen(PORT);

    console.log(`Express server has started on port ${PORT}.`);
  })
  .catch((error) => console.log(error));
