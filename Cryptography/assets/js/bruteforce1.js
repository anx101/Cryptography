function brute1(){
  var userInput = document.getElementById("setAinput").value; 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const words = [];
  const startTime = performance.now(); // Start the timer
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

      const endTime = performance.now();   // Stop the timer
      // Calculate the time it took to find the password
      const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
      
    // Stop the outer loop if the user's input has been found
    if (words.includes(userInput)){
      document.getElementById("brute1Result").innerHTML  =
      "The password is: " + userInput + "<br>" +
      "Time taken: " + timeTaken + " seconds";
      break;
    }
  }
}