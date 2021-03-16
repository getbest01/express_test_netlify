const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(cors());

router.get("/", (req, res) => {
  let name = req.query.name;
  let hobby = req.query.hobby;
  let aaa = `name: ${name} hobby: ${hobby}`;
  //console.log(res)
  res.send(aaa);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
