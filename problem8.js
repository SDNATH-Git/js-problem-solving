// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }
  return result.join(" ");
}

// Test
console.log(capitalizeWords("hello world")); 
