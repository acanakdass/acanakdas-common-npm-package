import { NextFunction, Request, Response } from "express";
import { CustomError } from "../Errors/CustomError";

export const ErrorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    } else {
        console.log(err.message)
        const errors = [{ message: "Something went wrong!" }]
        return res.status(400).send({ errors });
    }
}