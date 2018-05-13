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
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
exports.schema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    text: {
        type: String,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
});
exports.schema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const paper = this;
        paper.time = new Date();
    });
});
exports.schema.methods.clearText = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const paper = this;
        paper.text = '';
        yield paper.save();
        return Promise.resolve();
    });
};
exports.schema.statics.findByTitle = function (title) {
    return __awaiter(this, void 0, void 0, function* () {
        return exports.Paper.find({
            title
        });
    });
};
exports.Paper = mongoose.model('Paper', exports.schema);
