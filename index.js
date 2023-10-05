function isPalindrome(word) {
    word = word.replace(/[^a-zA-Z0-9]/g, "");

    return word === word.split("").reverse().join("");
  }


/* 
  Write a function isPalindrome that will receive one argument, a string

inside the function: Remove non-alphanumeric characters and  Compare the string with its reverse
  if the string passed is equal to its reverse return true
    else return false

*/

/*
  my function receives a string as an argument and then compares it with its revese and
  returns true if the string passed is equal to its revese.
  It returns false if the string is not the same as its reverse.
  Thus my function test whether the string passed is a Palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("=>", isPalindrome(mom));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
