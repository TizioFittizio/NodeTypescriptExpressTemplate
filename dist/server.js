"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('./config/config.ts');
require('./db/mongoose.ts');
const express = require("express");
const bodyParsed = require("body-parser");
const paperRouter_1 = require("./routes/paperRouter");
exports.app = express();
const port = process.env.PORT || 3000;
exports.app.use(bodyParsed.json());
exports.app.use('/paper', new paperRouter_1.PaperRouter().getRouter());
exports.app.listen(port, (hostname) => {
    console.log(`Server started at port ${port}`);
});
