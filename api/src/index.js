require('dotenv').config();

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./controllers/userController')(app);
require('./controllers/punkController')(app);
require('./controllers/authController')(app);

app.listen(PORT);