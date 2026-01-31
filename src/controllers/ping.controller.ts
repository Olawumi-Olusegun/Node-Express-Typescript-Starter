import { Request, Response } from "express";
import { logger } from '../config/logger';

export const createHandler = (req: Request, res: Response) => {
    logger.info('Ping endpoint called');
    res.send({ message: "pong" });
    logger.info('Ping response sent', { response: { message: "pong" } });
}