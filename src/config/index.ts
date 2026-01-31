import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

const loadEnv = () => {
  dotenv.config();
  console.log("Environment variables loaded");
};
loadEnv();

const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) ?? 3001,
};

export { serverConfig };
