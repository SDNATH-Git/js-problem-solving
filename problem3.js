// Problem- 03: Check for Palindrome

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

// Test pr 3
console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 


// Sloution Method 2 : Check for Palindrome
// function isPalindrome(str){
//   return str === str.split('').reverse().join('');

// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("world"));

