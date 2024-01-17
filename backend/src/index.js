const express = require("express");
const dotenv = require("dotenv").config();
const { connectDb } = require("./db/index");

const app = express();
const PORT = process.env.PORT;


connectDb();


app.listen(PORT, () => {
  console.log(`Server is running on port :  ${PORT}`);
});


