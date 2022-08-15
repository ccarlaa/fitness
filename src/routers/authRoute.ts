import { Router } from "express";
import { bodyMiddleware } from "../middlewares/bodyMiddleware.js";
import userSchema from "../schemas/authSchema.js";
import { signInController, signUpController } from "../controllers/authController.js";

const { newUserSchema, loginSchema } = userSchema;

const authRoute = Router();

authRoute.post('/sign-up', bodyMiddleware(newUserSchema), signUpController);
authRoute.post('/sign-in', bodyMiddleware(loginSchema), signInController);

export default authRoute;