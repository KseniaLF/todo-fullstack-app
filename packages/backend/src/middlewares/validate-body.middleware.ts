import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { HttpError, tryCatch } from './error-handler.middleware';

export const validateBody = (schema: Joi.Schema) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) throw new HttpError(400, error.message);
    next();
  });
