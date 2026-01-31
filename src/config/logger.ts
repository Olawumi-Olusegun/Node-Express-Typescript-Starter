import winston from 'winston';
import 'winston-daily-rotate-file';
import { getCorrelationId } from '../utils/helpers/request.helpers';

const getCorrelationIdSafe = (): string | undefined => {
    try {
        const correlationId = getCorrelationId();
        return correlationId === 'no-correlation-id' ? undefined : correlationId;
    } catch (error) {
        return undefined;
    }
};

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.json(), // Log in JSON format
        winston.format.printf(({ timestamp, level, message, ...data }) => {
            const correlationId = getCorrelationIdSafe();
            const output = { 
                timestamp, 
                level, 
                message, 
                ...(correlationId && { correlationId }), // Only include if available
                data 
            };
            return JSON.stringify(output, null, 2); // Pretty print JSON
        }), // Pretty print for better readability
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
            filename: 'logs/%DATE%-app.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '30d'
        }),
    ],
});