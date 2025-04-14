import "@dotenvx/dotenvx/config";

export const db = {
  mongoUri: process.env.MONGODB_URI,
};
