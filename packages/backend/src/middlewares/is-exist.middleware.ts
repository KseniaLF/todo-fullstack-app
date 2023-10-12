import { Request, Response, NextFunction } from 'express';
import { HttpError, tryCatch } from './error-handler.middleware';

type ServiceType<T> = {
  findAvailableById: (id: string, userId: string) => Promise<T | null>;
};

export const isExist = <T>(service: ServiceType<T>) =>
  tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId } = req.user as { id: string };

    const todo = await service.findAvailableById(req.params.id, userId);

    if (!todo) throw new HttpError(404, 'Not Found');

    next();
  });
