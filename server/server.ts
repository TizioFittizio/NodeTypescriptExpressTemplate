require('./config/config');

import express = require('express');
import path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(3000, (hostname: string) => {
    console.log(`Server started at port ${port}`);
});