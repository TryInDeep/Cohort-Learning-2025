const express = require("express");
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomtryIndeep"
const app = express();
app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You Are Sign Up ",
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((u) => {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = jwt.sign({
      username : username, 
    }, JWT_SECRET);
    
    res.json({
      message: token,
    });
  } else {
    res.json({
      message: "In valid username or password",
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodeInformation = jwt.verify(token, JWT_SECRET)
  const username = decodeInformation.username

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if(users[i].username == username)
    {
        foundUser = users[i]
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message : "Invalid token !!"
        })
    }

  }
});

app.listen(4000);
