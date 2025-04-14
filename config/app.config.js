import "@dotenvx/dotenvx/config";

export const appConfig = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development",
};
