import { RouteAction, RouteMiddleware, Method } from '../types';

export interface IRoute {
    url: string;
    method: Method;
    action: RouteAction;
    middlewares?: RouteMiddleware[];
}
