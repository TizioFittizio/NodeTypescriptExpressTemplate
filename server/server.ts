
import express = require('express');
import path = require('path');
const app = express();

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('...');
});