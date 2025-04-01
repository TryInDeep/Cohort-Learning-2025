const express = require("express");

const app = express();

app.use(express.json()) // very first middleware

// function middleware (req, res, next){
//     console.log(`Method is ${req.method}`);
//     let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//     console.log(`Url is + ${fullUrl}`);
//     console.log(new Date());
//     next();
// }


// app.use(middleware)

app.get("/sum",function(req, res) {

    console.log(req.body
    );
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(4000);