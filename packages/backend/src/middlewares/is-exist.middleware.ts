import { Request, Response, NextFunction } from 'express';
import { HttpError, tryCatch } from './error-handler.middleware';

type ServiceType<T> = {
  findAvailableById: (id: string, userId: string) => Promise<T | null>;
  findbyIdWithEditAccess: (id: string, userId: string) => Promise<T | null>;
};

export const isExist = <T>(service: ServiceType<T>, checkEditAccess: boolean = false) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId } = req.user as { id: string };

    const data = checkEditAccess
      ? await service.findbyIdWithEditAccess(req.params.id, userId)
      : await service.findAvailableById(req.params.id, userId);

    if (!data) throw new HttpError(404, 'Not Found');

    next();
  });
