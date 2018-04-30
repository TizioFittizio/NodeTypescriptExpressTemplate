require('./config/config');

import express = require('express');
import path = require('path');

export const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, (hostname: string) => {
    console.log(`Server started at port ${port}`);
});
