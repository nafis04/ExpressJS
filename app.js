import express from "express";
import { appConfig } from "./config/app.config.js";

const app = express();
const PORT = appConfig.port;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
