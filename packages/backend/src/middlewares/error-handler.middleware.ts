import { Request, Response, NextFunction } from 'express';

const errorMessages: {
  [key: number]: string;
} = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict'
};

export class HttpError extends Error {
  status: number;

  constructor(status: number, message = errorMessages[status]) {
    super(message);
    this.status = status;
  }
}

type ErrorMiddleware = (err: HttpError, req: Request, res: Response, next: NextFunction) => void;

export const errorHandler: ErrorMiddleware = (err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ status, message });
};

// decorator
export const tryCatch =
  (ctrl: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
