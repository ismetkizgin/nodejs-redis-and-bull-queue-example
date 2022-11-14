require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const initJobs = require("./queue");
initJobs();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(require("./routers/authRouter"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
