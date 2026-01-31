import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  // Override res.send to log responses
  const originalSend = res.send;
  res.send = function(body?: any) {
    const duration = Date.now() - start;
    
    logger.info(`Outgoing response: ${req.method} ${req.path}`, {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      responseBody: body
    });
    
    return originalSend.call(this, body);
  };
  
  next();
};