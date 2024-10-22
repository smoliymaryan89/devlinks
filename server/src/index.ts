import initMongoDB from "./db/initMongoDB";
import startServer from "./server";

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
