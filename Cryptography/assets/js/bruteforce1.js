function brute1(){
// First, we need to generate the word list as described in the previous answer
  /**  var numbers = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var maxLength = 3;
    var wordList = [];
    for (var length = 1; length <= maxLength; length++) {
        for (var i = 0; i < numbers.length; i++) {
            for (var j = 0; j < letters.length; j++) {
                wordList.push(numbers[i] + letters[j]);
            }
        }
    } **/

    var userInput = document.getElementById("setAinput").value;



    // Define a string containing all the letters and numbers
// that you want to use in the words
const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

// Define the maximum number of characters for the words
const maxLength = 6;

// Get the user's input


// Create an empty array to store the words
const words = [];

// Loop through all possible lengths of words, from 1 to the maximum length
for (let length = 1; length <= 6; length++) {
  // Loop through all possible combinations of letters and numbers
  // of the current length
  for (let i = 0; i < Math.pow(alphabet.length, length); i++) {
    // Convert the current iteration number to base-alphabet.length
    // to get the combination of letters and numbers at this iteration
    let word = '';
    let n = i;
    while (n > 0) {
      word = alphabet[n % alphabet.length] + word;
      n = Math.floor(n / alphabet.length);
    }

    // Pad the word with zeros if it is shorter than the maximum length
    while (word.length < length) {
      word = alphabet[0] + word;
    }

    // Add the word to the list of words, and stop the loop if it matches
    // the user's input
    words.push(word);
    if (word === userInput) break;
  }

  console.log(words)
  // Stop the outer loop if the user's input has been found
  if (words.includes(userInput)){
    alert("ok")
    break;
  }
}






}