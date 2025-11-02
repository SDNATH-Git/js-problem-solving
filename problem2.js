// // Problem 2: Count Vowels in a String

function CountVowel(str){
  let conut = 0 ;
  let vowels = 'aeiouAEIOU';
  for(let char of str){
    if(vowels.includes(char)){
      conut++;
    }
  }
  return conut ;
}

//test
console.log(CountVowel('Ajoy'));
