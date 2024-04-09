const express = require("express");
const bodyParser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

////////////////////////////////////
const app = express();
////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(compression());
module.exports = app;
