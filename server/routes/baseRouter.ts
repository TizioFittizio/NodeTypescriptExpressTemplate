import { Router, Request, Response, NextFunction } from 'express';
import { IRoute } from '../interfaces/IRoute';
import { Method } from '../types';

export abstract class BaseRouter {

    // TODO MA SE PROVO A FARE CHE ESTENDE UN ROUTER?

    private router: Router;
    private routes: IRoute[];

    constructor() {
        this.router = Router();
        this.routes = [];
    }

    public getRouter() {
        return this.router;
    }

    protected setRoutes(routes: IRoute[]): void {
        this.routes = routes;
    }

    protected setupAPI() {

        if (!this.routes.length) {
            return console.warn('No routes for this router');
        }

        for (const route of this.routes) {

            const middlewares = route.middlewares && route.middlewares.length ? route.middlewares : [];

            switch (route.method) {
                case Method.GET:
                    this.router.get(route.url, ...middlewares, route.action);
                    break;
                case Method.POST:
                    this.router.post(route.url, ...middlewares, route.action);
                    break;
                case Method.PATCH:
                    this.router.patch(route.url, ...middlewares, route.action);
                    break;
                case Method.DELETE:
                    this.router.delete(route.url, ...middlewares, route.action);
            }

        }
    }
}
