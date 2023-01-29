
import { NextFunction, Request, Response } from 'express';
import { AuthorizationError } from '../Errors/AuthorizationError';
export const RequireAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser)
        throw new AuthorizationError();
    next()
}
