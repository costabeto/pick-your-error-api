const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

const port = process.env.PORT || 3333;

app.listen(port, console.log(`Listening on http://localhost:3333`));
