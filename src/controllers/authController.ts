import { Request, Response } from 'express';
import { signUpService, signInService } from '../services/authService.js';

export async function signUpController(req: Request, res: Response) {
    const { name, email, password } : { name: string, email: string, password: string } = req.body;
    await signUpService( name, email, password);
    return res.status(201).send("Successfully registered");
}

export async function signInController(req: Request, res: Response) {
    const { email, password } : { email: string, password: string } = req.body;
    const answer = await signInService(email, password);
    return res.status(200).send(answer);
}
