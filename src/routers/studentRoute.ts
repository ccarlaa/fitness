import { Router } from "express";
import  studentSchema  from "../schemas/studentSchema.js";
import { bodyMiddleware } from "../middlewares/bodyMiddleware.js";
import { newStudentController, getStudentsController, deleteStudentController, updateStudentController } from "../controllers/studentController.js";
import { validateToken } from "../middlewares/validateToken.js";

const studentRoute = Router();

studentRoute.post('/new-student', validateToken, bodyMiddleware(studentSchema.newStudentSchema), newStudentController);
studentRoute.get('/students', validateToken, getStudentsController);
studentRoute.delete('/students/:id', validateToken, deleteStudentController);
studentRoute.patch('/update-student/:id', validateToken, bodyMiddleware(studentSchema.newStudentSchema), updateStudentController)

export default studentRoute;