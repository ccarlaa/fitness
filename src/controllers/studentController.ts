import { Decimal } from '@prisma/client/runtime/index.js';
import { Request, Response } from 'express';
import { newStudentService } from '../services/studentService.js';

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

    const { userId } = res.locals.userId

    await newStudentService(
        userId,
        name,
        age, 
        weight, 
        height, 
        objective, 
        comments
    );

    return res.status(201).send("Estudent successfully registered");
}