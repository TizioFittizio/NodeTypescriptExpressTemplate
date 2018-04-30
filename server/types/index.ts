import { Router, Request, Response, NextFunction } from 'express';

export type RouteAction = (req: Request, res: Response) => void;
export type RouteMiddleware = (req: Request, res: Response, next: NextFunction) => void;
export enum Method {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}
