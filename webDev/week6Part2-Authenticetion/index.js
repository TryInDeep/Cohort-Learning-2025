const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "TridipPramanickIsTheExtrodinaryGuy";
const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    users.push({
      username: username,
      password: password,
    });
    res.json({
      message: "You are sign UP ",
    });
  } else {
    res.json({
      message: "Something went wrong",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const findTheUser = users.find((u) => {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (findTheUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "Invalid Credentials",
    });
  }
});

function authentication(req, res, next) {
  const token = req.headers.token;
  const decodeInformation = jwt.verify(token, JWT_SECRET);
  
  if (decodeInformation.username) {
    req.username = decodeInformation.username
    next();
  } else {
    res.json({
      message: "User not logged IN ",
    });
  }
}

app.get("/me", authentication, (req, res) => {
    const currentUser = req.username
    let foundUser = users.find((u) => {
        if(u.username == currentUser){
            return true
        }else{
            return false;
        }
    })
    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
});

app.listen(5000);
