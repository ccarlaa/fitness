import { Decimal } from '@prisma/client/runtime/index.js';
import { Request, Response } from 'express';
import { deleteStudentService, getStudentsService, newStudentService, updateStudentService } from '../services/studentService.js';

export async function newStudentController(req: Request, res: Response) {
    const {
        name,
        age, 
        weight, 
        height, 
        objective, 
        comments 
    } : { 
        name: string, 
        age: number, 
        weight: Decimal, 
        height: Decimal, 
        objective: string, 
        comments: string 
    } = req.body;

    const { userId } = res.locals.userId;

    await newStudentService(
        userId,
        name,
        age, 
        weight, 
        height, 
        objective, 
        comments
    );

    return res.status(201).send("Estudante registrado com sucesso");
}

export async function getStudentsController(req: Request, res: Response) {
    const { userId } = res.locals.userId;

    const studentsList = await getStudentsService(userId);

    return res.status(200).send(studentsList);
}

export async function deleteStudentController(req: Request, res: Response) {
    const { userId } = res.locals.userId;
    const { id } = req.params;

    const studentId = parseInt(id);

    await deleteStudentService(studentId, userId);

    return res.status(201).send("Estudante deletado com sucesso");
}

export async function updateStudentController(req: Request, res: Response) {
    const {
        name,
        age, 
        weight, 
        height, 
        objective, 
        comments 
    } : { 
        name: string, 
        age: number, 
        weight: Decimal, 
        height: Decimal, 
        objective: string, 
        comments: string 
    } = req.body;

    const { userId } = res.locals.userId;

    const { id } = req.params;
    const studentId = parseInt(id)

    await updateStudentService(
        studentId,
        userId, 
        name, 
        age, 
        weight, 
        height, 
        objective, 
        comments 
    )

    return res.status(201).send("Informações atualizadas com sucesso");
}