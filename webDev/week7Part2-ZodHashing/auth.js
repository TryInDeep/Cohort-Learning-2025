const jwt = require("jsonwebtoken")
const JWT_SECRET = "kjsalhfh@kashd"


function authentication (req , res , next) {
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_SECRET)

    if(response){
        req.userId = response.id;
        next()
    }else{
        res.json({
            message: " Invalid Authentication"
        })
    }
}

module.exports = {
    authentication, JWT_SECRET
}