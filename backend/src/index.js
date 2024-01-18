const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser')


const { connectDb } = require("./db/index");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser());


connectDb()
  .then(() => {
    try {
      const PORT = process.env.PORT;
      app.listen(PORT || 8000, () => {
        console.log("Server running on PORT ", PORT);
      });
    } catch (error) {
      console.log("Server boot failed ", error);
    }
  })
  .catch((error) => {
    console.log("MongoDb connection failed : ", error);
  });


