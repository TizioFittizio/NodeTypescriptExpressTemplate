"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../types");
class BaseRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes = [];
    }
    getRouter() {
        return this.router;
    }
    setRoutes(routes) {
        this.routes = routes;
    }
    setupAPI() {
        if (!this.routes.length) {
            return console.warn('No routes for this router');
        }
        for (const route of this.routes) {
            const middlewares = route.middlewares && route.middlewares.length ? route.middlewares : [];
            switch (route.method) {
                case types_1.Method.GET:
                    this.router.get(route.url, ...middlewares, route.action);
                    break;
                case types_1.Method.POST:
                    this.router.post(route.url, ...middlewares, route.action);
                    break;
                case types_1.Method.PATCH:
                    this.router.patch(route.url, ...middlewares, route.action);
                    break;
                case types_1.Method.DELETE:
                    this.router.delete(route.url, ...middlewares, route.action);
            }
        }
    }
}
exports.BaseRouter = BaseRouter;
