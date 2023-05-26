

 // reuslt #1
 // if(word.split ("").reverse().join("") === word){
  // return true
  // }
  // return false
  // Write your algorithm here

  //the first character of a palindrome must match the  last character
 //the second character of a palindrome must match the second to last character
 //   racecar

 //0
 // 1
//   2
//     3 
//result #2 
function isPalindrome(word) {
   for (i=0; i< word.length/2 ; i++){
   const j = word.length-1-i
   if (word[i] !==word[j]){
     return false
   }
          return true
 }
}
/* 
  Add your pseudocode here
*/
//function takes a string
//inspect each character
//split the string into an array of characters
//return array of characters that have been reversed 
//iterate
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
