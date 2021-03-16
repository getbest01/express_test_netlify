const express = require("express");
const cors = require("cors")
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(cors())

router.get("/", (req, res) => {
  res.json({
    name: "Jason",
    residence: "Canada",
    character: "brilliant",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
