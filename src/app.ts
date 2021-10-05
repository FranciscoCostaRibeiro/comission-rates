import express, { json } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import TransactionRoute from "./routes/transaction-route";

const config = require("../config");
let url: string = config.dburl;

mongoose.connect(url).then(
  () => {
    console.log("Connected to database!");
  },
  (error) => {
    console.log(error);
  }
);

const app = express();
app.use(json());
app.use(morgan("tiny"));
app.use("/api/transaction", TransactionRoute);

app.get("/", (req, res) => {
  res.send("Well done!");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
