import { Router } from "express";
import studentSchema from "../schemas/studentSchema.js";
import { bodyMiddleware } from "../middlewares/bodyMiddleware.js";
import { newStudentController } from "../controllers/studentController.js";
import { validateToken } from "../middlewares/validateToken.js";

const studentRoute = Router();

studentRoute.post('/new-student', validateToken, bodyMiddleware(studentSchema.newStudentSchema), newStudentController);

export default studentRoute;