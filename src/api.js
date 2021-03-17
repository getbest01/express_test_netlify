const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const fs = require("fs");

const app = express();
const router = express.Router();

app.use(cors());


router.get("/", (req, res) => {
  let name = req.query.name;

  let rawdata = fs.readFileSync('./transactions.json');
  //let rawdata = fs.readFileSync('./JSON/transactions.json');
  let student = JSON.parse(rawdata);
  let aaa = JSON.stringify(student);
  res.send(aaa);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
