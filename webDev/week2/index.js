//---------------------------- class and object ---------------------------//
// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//           return area;
//     }

//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }

//  }

//  const rect = new Rectangle(2, 4, "red")
//  const area = rect.area();
//  console.log(area)

//-----------------------------Map class---------------------------//
// const map = new Map();
// map.set('name','Tridip')
// map.set('age',21)
// console.log(map.get('name'));

//-------------------------------Promises------------------------------------//

// function waitForIt(resolve){
//     setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified(){
//     return new Promise(waitForIt);
// }

// function main(){
//     console.log("Main called");
// }

// setTimeoutPromisified().then(main)

// // function random(resolve){  //resolve also a function
//     setTimeout(resolve, 5000)
// }

// let p = new Promise(random); // suppose to return something eventualy

// // using thee eventual value return by  promise
// function callback(){
//     console.log("Promised succeded");
// }

// p.then(callback)

// create the promisified versiobn of fs.readFile, fs.writeFile, cleanFile

const fs = require("fs");
const fileLocation = "content.txt";

function random(resolve) {
  resolve();
}

function cleanFilePromisified() {
  return new Promise(random);
}

function cleanDone() {
  fs.readFile(fileLocation, "utf-8", (err, fileContent) => {
    if (err) {
      console.log(`Found an error ${err}`);
    }
    const linesArray = fileContent.split("\n");
    const filteredLines = linesArray.filter((line) => line.trim() !== "") 
   
    console.log(filteredLines);
    
    // const updatedContent = filteredLines.join("\n");

    // fs.writeFile(fileLocation, updatedContent, "utf-8", (err) => {
    //   if (err) {
    //     console.log(`Found an error ${err}`);
    //   }
    // });
  });
}
cleanFilePromisified().then(cleanDone);

//dksgah
