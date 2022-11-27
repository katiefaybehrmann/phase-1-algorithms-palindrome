// testCases();

function isPalindrome(word) {
  let newArray = word.split('');
  let newWord ='';

  for (let i = newArray.length - 1; i > -1; i--){
    newWord = newWord + newArray[i]
  }


  if (newWord === word){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here

  String of letters/chars is taken in

  string is pulled apart and each letter put into an array

  iterate through that array backwards to create a new word

  compare new word to old word. if they are the same, isPalindrom is true. if not, false.
*/

/*
  Add written explanation of your solution here
  This function should take in a string of characters.
  This function should evaluate whether the string of characters is the same forwards as it is backwards
  Input = a word/string of characters
  Output = true if the string is the same backwards and forwards/false if the word is not the same backwards and forwards
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

function testCases(){
  console.log(isPalindrome("poop") + " is true")
  console.log(isPalindrome("interesting") + " is false")
  console.log(isPalindrome("zxyxz") + " is true")

}