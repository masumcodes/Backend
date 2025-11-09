const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json("snenk");
});

app.get("/masum", (req, res) => {
  res.send("200");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
