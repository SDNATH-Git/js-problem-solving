// // Problem 3: Find the Maximum Number

// function findMax(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// // Test
// console.log(findMax([5, 1, 9, 3])); 


// Solution Method 2
function findMax(arr){
  return Math.max(...arr);
}

// text 
console.log(findMax([3,0,2,8]));


