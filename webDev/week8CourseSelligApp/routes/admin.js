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
  const adminId = req.userId;
  const { title, description, price, imageUrl } = req.body;
  try {
    const course = await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: adminId,
    });
    res.json({
      message: "Course Created",
      courseId: course._id,
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageUrl, courseId } = req.body;
  try {
    const course = await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
      }
    );
    res.json({
      message: "Course Updated",
      courseId: course._id,
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  try {
    const courses = await courseModel.find({
      creatorId: adminId,
    });
    res.json({
      YourCoursesAre : courses
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

module.exports = {
  adminRouter,
};
