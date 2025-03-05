const express = require("express");
const app = express();
app.use(express.json());

// Using function
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// using middlewares
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry! You are under aged",
    });
  }
}

// anothere way to use middlewares
//app.use(isOldEnoughMiddleware)

app.get("/ride1",isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have sucessfully riden the ride",
  });
});

app.listen(3000);
