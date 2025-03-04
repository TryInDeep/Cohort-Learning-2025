const express = require("express")
const app = express();

const user = [{
    name:'Tridip',
    kidneys: [{
        healthy : false
    },
    {
        healthy: true
    }]
}]


app.get("/", (req, res) => {
    const tridipKidneys = user[0].kidneys;
    
    const numberOfKidneys = user[0].kidneys.length;
    console.log(numberOfKidneys);
    
    
})


app.listen(3000)