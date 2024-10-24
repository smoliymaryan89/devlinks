import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import pino from "pino-http";
import env from "./utils/env";

import { CustomError } from "./types/error";

import authRouter from "./routers/api/auth-router";
import linkRouter from "./routers/api/link-router";

const PORT = env("PORT", "3000");

const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use("/api/auth", authRouter);
  app.use("/api/links", linkRouter);

  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      message: "Not found",
    });

    next();
  });

  app.use(
    (err: CustomError, req: Request, res: Response, next: NextFunction) => {
      const { status = 500, message = "Server error" } = err;
      res.status(status).json({ message });

      next();
    }
  );

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
