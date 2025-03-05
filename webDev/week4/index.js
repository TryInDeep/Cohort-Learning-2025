const express = require("express");
const app = express();

app.use(express.json());

const user = [
  {
    name: "Tridip",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

// Query Parameters : ?n=(whatever data you want)
app.get("/", (req, res) => {
  const tridipkidneys = user[0].kidneys;
  const numberOfKidneys = tridipkidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < tridipkidneys.length; i++) {
    if (tridipkidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});


// post uses when you want to put data on you database
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});


// Update the data
app.put("/", function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});


// delete the data
app.delete("/", function (req, res) {
  if (isThereOneUnhealthyKidneys()) {
    let newKidneys = [];
    for (let i = 0; i < user[0].kidneys.length; i++) {
      if (user[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    user[0].kidneys = newKidneys;
    res.json({ msg: "Remove bad kidneys" });
  } else {
    res.status(411).json({ msg: "You have no Bad Kidneys" });
  }
});

function isThereOneUnhealthyKidneys() {
  let atleastOneUnhealthyKindey = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atleastOneUnhealthyKindey = true;
    }
  }
  return atleastOneUnhealthyKindey;
}

app.listen(3000);
// https://github.com/100xdevs-cohort-2
// filter in arrays