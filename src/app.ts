import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { AppError } from './app/errors/AppError';
import createConnection from './database';
import { routes } from './routes';

class App {
  public server: express.Application;

  constructor() {
    createConnection();
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err: Error, req: Request, res: Response, _next: NextFunction) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({ error: err.message });
        }

        return res.status(500).json({
          status: 'Error',
          message: `Internal server error ${err.message}`
        });
      }
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
