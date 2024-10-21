import express from "express";
import env from "./utils/env";

const PORT = env("PORT", "3000");

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
