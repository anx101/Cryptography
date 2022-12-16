function brute1(){
  var userInput = document.getElementById("setAinput").value; 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const words = [];
  const startTime = performance.now(); // Start the timer
for (let length = 1; length <= 6; length++) {
    for (let i = 0; i < Math.pow(alphabet.length, length); i++) {
      let word = '';
      let n = i;
      while (n > 0) {
        word = alphabet[n % alphabet.length] + word;
        n = Math.floor(n / alphabet.length);
        }
      while (word.length < length) {
        word = alphabet[0] + word;
        }
      words.push(word);
      if (word === userInput) break;
      }

      const endTime = performance.now();   // Stop the timer
      // Calculate the time it took to find the password
      const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
    if (words.includes(userInput)){
      document.getElementById("brute1Result").innerHTML  =
      "The password is: " + userInput + "<br>" +
      "Time taken: " + timeTaken + " seconds";
      break;
    }
  }
}


