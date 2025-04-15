const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config")


function adminMiddleware(req, res, next){
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_ADMIN_PASSWORD)

    if(response){
        req.userId = response.id;
        next();
    }else{
        res.json({
            message: "Invalid Authentication"
        })
    }
}
module.exports= {
    adminMiddleware
}