const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")


function userMiddleware(req, res, next){
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_USER_PASSWORD)

    if(response){
        req.userId= response.id;
        next();
    }else{
        res.json({
            message: "Invalid Authentication"
        })
    }
}
module.exports= {
    userMiddleware
}