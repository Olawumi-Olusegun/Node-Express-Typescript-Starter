import express from 'express';
import { createHandler } from '../../controllers/ping.controller';
import { validateData } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const pingRoutes = express.Router();

pingRoutes.post('/', validateData({ body: pingSchema }), createHandler);

export default pingRoutes;