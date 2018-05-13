"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRouter_1 = require("./baseRouter");
const index_1 = require("../types/index");
const paper_1 = require("../models/paper");
class PaperRouter extends baseRouter_1.BaseRouter {
    constructor() {
        super();
        this.paperRoutes = [
            {
                url: '/',
                method: index_1.Method.POST,
                action: this.create.bind(this)
            },
            {
                url: '/:title',
                method: index_1.Method.GET,
                action: this.get.bind(this)
            },
            {
                url: '/:title',
                method: index_1.Method.PATCH,
                action: this.edit.bind(this)
            },
            {
                url: '/:title',
                method: index_1.Method.DELETE,
                action: this.delete.bind(this)
            }
        ];
        this.setRoutes(this.paperRoutes);
        this.setupAPI();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = {
                    title: req.body.title,
                    text: req.body.text
                };
                const paper = new paper_1.Paper(body);
                yield paper.save();
                res.status(201).send();
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const papers = yield paper_1.Paper.findByTitle(req.params.title);
                res.status(200).send(papers);
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.text) {
                    throw new Error();
                }
                yield paper_1.Paper
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
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield paper_1.Paper.deleteMany({
                    title: req.params.title
                });
                res.status(200).send();
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
    }
}
exports.PaperRouter = PaperRouter;
