import mongoose = require('mongoose');
import { IPaperDocument } from '../interfaces/IPaper';
import { Model, Schema, HookNextFunction } from 'mongoose';

export interface IPaper extends IPaperDocument {
    clearText(): void;
}

export interface IPaperModel extends Model<IPaper> {
    findByTitle(title: string): IPaper[];
}

export const schema: Schema = new Schema({
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

schema.pre('save', async function(next: HookNextFunction) {
    const paper = this as IPaper;
    paper.time = new Date();
});

schema.methods.clearText = async function() {
    const paper = this as IPaper;
    paper.text = '';
    await paper.save();
    return Promise.resolve();
};

schema.statics.findByTitle = async function(title: string) {
    return Paper.find({
        title
    });
};

export const Paper: IPaperModel = mongoose.model<IPaper, IPaperModel>('Paper', schema);
