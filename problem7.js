// Problem 5: Find Even Numbers in an Array


// Test
console.log(findEvens([1, 2, 3, 4, 5, 6])); 


function findEvens(arr){
  let evens=[];
  for (let num of arr){
    if(num % 2 === 0){
      evens.push(num);
    }
  }
  return evens;
}

//test
console.log(findEvens([1,2,3,4,5,5,]));