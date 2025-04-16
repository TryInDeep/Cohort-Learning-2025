const express = require("express");
const Router = express.Router;
const courseRouter = Router();

const { userMiddleware } = require("../middleware/userMiddleware");
const { purchaseModel, courseModel } = require("../db");

courseRouter.post("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;
  try {
    await purchaseModel.create({
      userId: userId,
      purchaseId: courseId,
    });
    res.json({
      message: "Course Purchased",
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

courseRouter.get("/preview", async (req, res) => {
  try {
    const courses = await courseModel.find({});
    res.json({
      courses,
    });
  } catch (error) {
    res.json({
      error: "Something went wrong",
    });
  }
});

module.exports = {
  courseRouter
};

