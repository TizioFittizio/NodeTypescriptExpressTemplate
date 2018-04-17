
import express = require('express');
import {Class} from './class';

const app = express();
const instance = new Class();

app.get('/', (req, res) => {
    res.status(418).send(instance.do());
});

app.listen(3000, () => {
    console.log('...');
});