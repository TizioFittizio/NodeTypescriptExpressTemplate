require('./config/config.ts');
require('./db/mongoose.ts');

import express = require('express');
import bodyParsed = require('body-parser');

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParsed.json());

app.listen(port, (hostname: string) => {
    console.log(`Server started at port ${port}`);
});
