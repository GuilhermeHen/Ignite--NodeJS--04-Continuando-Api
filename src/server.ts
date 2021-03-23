import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";

import swaggerFile from "./config/swagger.json";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333);
console.log("Server Running!");
