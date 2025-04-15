const express = require("express");
const Router = express.Router;
const userRouter = Router();
const {userModel} = require("../db");
const {z} = require("zod");
const bcrypt = require("bcrypt");


userRouter.post("/signup", async (req , res ) => {
        const {email, password, firstname, lastname} = req.body;
        const requiredBody = z.object({
                email: z.string().min(3).max(100).email(),
                password: z.string().min().max(100),
                firstname: z.string().min(3).max(50),
                lastname: z.string().min(3).max(50)
              })
             
              
        const parsewithSuccess = requiredBody.safeParse(req.body);
        if(!parsewithSuccess.success){
                res.json({
                        message: "Incorrect format",
                        error: parsewithSuccess.error
                })
        }
        const hashPassword = await bcrypt.hash(password, 5)
        try {
                await userModel.create({
                        firstname:firstname,
                        lastname:lastname,
                        email:email,
                        password:hashPassword
                })
                res.json({
                        message: "User is Created "
                })
        
                
        } catch (error) {
                res.json({
                        error: "Something went wrong"
                })
        }
       
})

userRouter.post("/login", (req , res ) => {
        

})

userRouter.get("/purchases", (req , res ) => {

})

module.exports = {
        userRouter
}