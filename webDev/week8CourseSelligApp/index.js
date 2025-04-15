const express = require("express");
const mongoose = require("mongoose")

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

const app  = express();
app.use(express.json())



app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)

async function main (){
   await mongoose.connect("mongodb+srv://Tridip:xpZAnnaxMMUbBQaI@100xdev.upasbqa.mongodb.net/courseSellingApp")
   app.listen(3000)
   console.log("Listening on port 3000");
}
main();

