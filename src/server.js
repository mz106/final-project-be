require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./db/connection");
const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.use(userRouter);

app.listen(port, () => {
  connection();
  console.log(`server is listening on port ${port}`);
});

module.exports = app;
