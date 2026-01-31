import { Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { asyncLocalStorage } from '../utils/helpers/request.helpers';
import { logger } from '../config/logger';

export const attachCorrelationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const correlationId = uuidV4();
  req.headers['x-correlation-id'] = correlationId;
  
  asyncLocalStorage.run({ correlationId }, () => {
    logger.info(`Incoming request: ${req.method} ${req.path}`, {
      method: req.method,
      path: req.path,
      query: req.query,
      body: req.body
    });
    next();
  });
};