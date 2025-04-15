const express = require("express");
const Router = express.Router;
const userRouter = Router();
const { userModel } = require("../db");

const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min().max(100),
    firstname: z.string().min(3).max(50),
    lastname: z.string().min(3).max(50),
  });

  const parsewithSuccess = requiredBody.safeParse(req.body);
  if (!parsewithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parsewithSuccess.error,
    });
  }
  const hashPassword = await bcrypt.hash(password, 5);
  try {
    await userModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashPassword,
    });
    res.json({
      message: "User is Created ",
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({
      email: email,
    });
    const decodedPassword = await bcrypt.compare(password, user.password);

    if (decodedPassword) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_USER_PASSWORD
      );

      res.json({
        token: token,
      });
    } else {
      res.json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter,
};
