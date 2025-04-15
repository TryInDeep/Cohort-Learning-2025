const express = require("express");
const Router = express.Router;
const {adminModel} = require("../db")
const adminRouter = Router();

adminRouter.post("/signup", (req , res ) => {
    res.json({

    })
})
adminRouter.post("/login", (req , res ) => {
    res.json({
        
    })
})
adminRouter.post("/course", (req , res ) => {
    res.json({
        
    })
})

adminRouter.put("/course", (req , res ) => {
    res.json({
        
    })
})

adminRouter.get("/course/bulk", (req , res ) => {
    res.json({
        
    })
})

module.exports = {
    adminRouter : adminRouter
}