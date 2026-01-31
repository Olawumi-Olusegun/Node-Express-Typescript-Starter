import express from 'express';
import pingRoutes from './ping.routes';

const router = express.Router();

router.use("/ping", pingRoutes);

export default router;