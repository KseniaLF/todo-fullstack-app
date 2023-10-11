import { Request, Response, NextFunction } from 'express';
import { HttpError, tryCatch } from './error-handler.middleware';

type ServiceType<T> = {
  findbyId: (id: string) => Promise<T | null>;
};

export const isExist = <T>(service: ServiceType<T>) =>
  tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const todo = await service.findbyId(req.params.id);

    if (!todo) throw new HttpError(404, 'Not Found');

    next();
  });
