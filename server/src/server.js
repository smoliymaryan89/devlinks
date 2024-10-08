import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import env from './utils/env.js';

import authRouter from './routers/api/auth-router.js';
import profileRouter from './routers/api/profile-router.js';
import linkRouter from './routers/api/link-router.js';

const PORT = env('PORT', 3000);

const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('/api/auth', authRouter);
  app.use('/api/profile', profileRouter);
  app.use('/api/links', linkRouter);

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
