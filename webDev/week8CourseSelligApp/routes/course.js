const express = require("express");
const Router = express.Router;
const courseRouter = Router();


courseRouter.post("/purchases", (req , res ) => {
    res.json({
        
    })
})

courseRouter.get("/preview", (req , res ) => {
    res.json({
        
    })
})


module.exports = {
    courseRouter: courseRouter
}