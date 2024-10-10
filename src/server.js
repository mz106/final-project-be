require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/.netlify/functions/api/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.use("/.netlify/functions/api", userRouter);

module.exports = app;
