const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/controllers/index')(app);

const port = process.env.PORT || 3333;

app.listen(port, console.log(`Listening on http://localhost:${port}`));
