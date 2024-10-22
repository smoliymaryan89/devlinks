import express, { Request, Response } from "express";
import cors from "cors";
import pino from "pino-http";
import env from "./utils/env";

import { CustomError } from "./types/error";

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

  app.use("*", (req: Request, res: Response) => {
    res.status(404).json({
      message: "Not found",
    });
  });

  app.use((err: CustomError, req: Request, res: Response) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;