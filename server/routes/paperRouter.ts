import { Router, Request, Response, NextFunction } from 'express';
import { BaseRouter } from './baseRouter';
import { IRoute } from '../interfaces/IRoute';
import { Method } from '../types/index';
import { Paper } from '../models/paper';

export class PaperRouter extends BaseRouter {

    protected readonly paperRoutes: IRoute[] = [
        {
            // POST Create a paper
            url: '/',
            method: Method.POST,
            action: this.create.bind(this)
        },
        {
            // GET Get papers with the title specified
            url: '/:title',
            method: Method.GET,
            action: this.get.bind(this)
        },
        {
            // PATCH Edit a paper
            url: '/:title',
            method: Method.PATCH,
            action: this.edit.bind(this)
        },
        {
            // DELETE Delete a paper
            url: '/:title',
            method: Method.DELETE,
            action: this.delete.bind(this)
        }
    ];

    constructor() {
        super();
        this.setRoutes(this.paperRoutes);
        this.setupAPI();
    }

    private async create(req: Request, res: Response) {
        try {
            const body = {
                title: req.body.title,
                text: req.body.text
            };
            const paper = new Paper(body);
            await paper.save();
            res.status(201).send();
        }
        catch (e) {
            res.status(400).send(e);
        }
    }

    private async get(req: Request, res: Response) {
        try {
            const papers = await Paper.findByTitle(req.params.title);
            res.status(200).send(papers);
        }
        catch (e) {
            res.status(400).send(e);
        }
    }

    private async edit(req: Request, res: Response) {
        try {
            if (!req.body.text) {
                throw new Error();
            }
            await Paper
            .updateMany({
                title: req.params.title
            }, {
                text: req.body.text
            });
            res.status(200).send();
        }
        catch (e) {
            res.status(400).send(e);
        }
    }

    private async delete(req: Request, res: Response) {
        try {
            await Paper.deleteMany({
                title: req.params.title
            });
            res.status(200).send();
        }
        catch (e){
            res.status(400).send(e);
        }
    }

}
