
// Express
const express = require("express");
const app = express();
app.use(express.json());

//Db Connection
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
mongoose.connect(
  "mongodb+srv://Tridip:xpZAnnaxMMUbBQaI@100xdev.upasbqa.mongodb.net/ToDo-App"
);

// Auhtentication
const jwt = require("jsonwebtoken")
const { authentication, JWT_SECRET } = require("./auth");
const bcrypt = require("bcrypt");
const {z} = require("zod")


// Endpoints
app.post("/signup", async (req, res) => {
  
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    const parseWithSuccess= requiredBody.safeParse(req.body)
    if(!parseWithSuccess.success){
        res.json({
            message: "Incorrect Format",
            error : parseWithSuccess.error
        })
        return
    }

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const hashpassword = await bcrypt.hash(password, 5)
  await UserModel.create({
    name: name,
    email: email,
    password: hashpassword,
  });

  res.json({
    message: " User is Created ",
  });
});


app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email
  });
  
  if(!user){
    res.json({
        message: "User does not exists"
    })
  }

  const validatedPassword = await bcrypt.compare(password, user.password)

  if (validatedPassword) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
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

app.post("/todo", authentication, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;


  await TodoModel.create({
    userId : userId,
    title: title,
    done: done
  })
  res.json({
    message : " Todo Created "
  });
});


app.get("/todos", authentication, async(req, res) => {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId : userId
  }
  )

  res.json({
        Todos : todos
  });
});

app.listen(4000)
