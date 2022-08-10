import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import userSchema from "../schemas/authSchema.js";
import { signInController, signUpController } from "../controllers/authController.js";

const { newUserSchema, loginSchema } = userSchema;

const authRoute = Router();

authRoute.post('/sign-up', authMiddleware(newUserSchema), signUpController);
authRoute.post('/sign-in', authMiddleware(loginSchema), signInController);

export default authRoute;