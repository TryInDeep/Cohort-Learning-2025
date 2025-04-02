// map filter and arrow function 

// given an array , give me back a new array  in which every value is multiple by 2

// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

// const input = [ 1, 2, 3, 4, 5];

// const newArray  = [];

// for (let i = 0 ; i < input.length; i++){
//     newArray.push(input[i] * 2 )
// }

// console.log(newArray);

// other solutions MAP 
const input = [ 1, 2, 3, 4, 5];
// function transform(i) {
//     return i * 2;
// }
// const ans = input.map(transform)
// console.log(ans);

// Filter 

  const arr = [1,2,3,4];

  const ans = arr.filter((n) => {
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
  });

  console.log(ans);
  

  // filter, map , arr funs , for each , reduce, spread , destructuring spread operator, 