import express, { type Express } from 'express';
import { serverConfig } from './config/index';
import apiRoutes from './routes';
import { appErrorHandler, errorHandler } from './middlewares/error.middleware';
import { logger } from './config/logger';
import { attachCorrelationMiddleware } from './middlewares/correlation.middleware';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(attachCorrelationMiddleware);
app.use('/api', apiRoutes);

app.use(appErrorHandler);
app.use(errorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
  logger.info(`Server started on port ${serverConfig.PORT}`); 
});

export default app;