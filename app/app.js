const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../app/routes/api');
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(router);
app.use('/api',router)
module.exports = app