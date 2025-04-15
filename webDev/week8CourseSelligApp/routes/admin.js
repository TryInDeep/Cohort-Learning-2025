const express = require("express");
const Router = express.Router;
const { adminModel } = require("../db");
const { courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/adminMiddleware");
const adminRouter = Router();

const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");

adminRouter.post("/signup", async (req, res) => {
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
    await adminModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashPassword,
    });
    res.json({
      message: "Admin is Created ",
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});
adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await adminModel.findOne({
      email: email,
    });
    const decodedPassword = await bcrypt.compare(password, user.password);

    if (decodedPassword) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_ADMIN_PASSWORD
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
adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const creatorId = req.userId;
  const { title, description, price, imageUrl } = req.body;
  try {
    await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: creatorId,
    });
    res.json({
      message: "Course Created"
    })
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

adminRouter.put("/course", adminMiddleware, (req, res) => {
  res.json({});
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({});
});

module.exports = {
  adminRouter
};
