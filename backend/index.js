require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
  console.log("served started 4000 PORT");
  mongoose.connect(uri);
  console.log("DB Connect");
});
