const { Router } = require("express");
const userRouter = Router();

const {signup} = require("./controllers");

// signup
userRouter.post("/users/signup", signup);

module.exports = userRouter;