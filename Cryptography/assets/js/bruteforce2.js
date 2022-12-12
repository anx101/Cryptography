import { readFileSync } from '"fs"';
// Retrieve the user-provided password from the form
const password = document.getElementById("setBpw").value;
// Read the contents of the dictionary file
const dictionaryFile = readFileSync("dictionary.txt", "utf8");
function checkPassword() {
// Split the file into an array of words
const dictionary = dictionaryFile.split("\n");

// Define a function to check if a password is in the dictionary
function isInDictionary(password) {
  return dictionary.includes(password);
}



// Check if the password is in the dictionary
const startTime = performance.now(); // Start the timer
const isValid = isInDictionary(password);
const endTime = performance.now();   // Stop the timer

// Calculate the time it took to find the password
const timeTaken = (endTime - startTime) / 1000; // Convert to seconds

// Update the HTML page with the password and time taken
if (isValid) {
  document.getElementById("setBresult").innerHTML =
    "The password is: " + password + "<br>" +
    "Time taken: " + timeTaken + " seconds";
} else {
  document.getElementById("setBresult").innerHTML =
    "The password was not found in the dictionary.<br>" +
    "Time taken: " + timeTaken + " seconds";
}
}