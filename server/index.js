const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/static", express.static(__dirname + "/public"));

app.use("/api", require("./routers/infoRouter"));

app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
