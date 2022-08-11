import { Request, Response, NextFunction } from "express";
import { wrongSchemaError } from "../utils/errorUtils.js";

export function bodyMiddleware(schema : any) {
    return (req : Request, res : Response, next : NextFunction) => {
        const validation = schema.validate(req.body);

        if (validation.error) {
            const message : string = validation.error.message;
            throw wrongSchemaError(message);
        }
        
        next();
    };
}