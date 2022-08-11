import cors from "cors";
import express from "express";
import "express-async-errors";

import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import authRoute from "./routers/authRoute.js";
import studentRoute from "./routers/studentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoute);
app.use(studentRoute)

app.use(errorHandlerMiddleware);

export default app;
