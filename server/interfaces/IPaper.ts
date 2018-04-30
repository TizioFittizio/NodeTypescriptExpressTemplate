import { Document } from 'mongoose';

export interface IPaperDocument extends Document {
    title: string;
    text: string;
    time: Date;
}
