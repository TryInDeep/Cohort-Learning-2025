const express = require('express');
const jwt = require("jsonwebtoken");
const {UserModel, TodoModel} = require("./db");
const { default: mongoose } = require('mongoose');
const { auth, JWT_SECRET } = require("./auth");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Tridip:xpZAnnaxMMUbBQaI@cluster0.sqfktqm.mongodb.net/ToDo-App")

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    await UserModel.create({
        name: name,
        email: email,
        password:password
    })

    res.json({
        message: "You are logged In"
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

     const user = await UserModel.findOne({ 
        email: email,
        password: password
     })
     
     if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)

        res.json({
            token: token
        })
     }else{
        res.status(403).json({
            messge: "Invalid Credential"
        })
     }
})

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    
    await TodoModel.create({
        userId,
        title
    })

    res.json({
        message :  "Todo Created"
    })

    
})

app.get("/todos",auth, async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({ 
        userId
    })

    res.json({
        todos
    })
   
})

app.listen(3000)