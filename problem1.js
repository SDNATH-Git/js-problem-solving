// Problem 1: Reverse a String

// ‍Solution mathod 1   

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test
console.log(reverseString("Sakib"));  hsakb


// Solution mathod 2 
function reverseString(str){
  return str.split('').reverse('').join('');

}
console.log(reverseString("Bkash"));



