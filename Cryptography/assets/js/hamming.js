function checkCode() {
  // Get a reference to the text input field and the result element
  var inputField = document.getElementById("hammingCode");
  var resultElement = document.getElementById("hammingResult");

  // Get the value of the input field
  var inputString = inputField.value;

  // Divide the input string into blocks of 7 bits
  var blocks = [];
  for (var i = 0; i < inputString.length; i += 7) {
    blocks.push(inputString.substring(i, i + 7));
  }

  // Correct the code for each block
  var correctedCode = "";
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    // Calculate the parity bits
    var parityBits = calculateParityBits(block);

    // Compare the parity bits to the ones in the input string
    var errorBit = checkParity(block, parityBits);

    // If there was an error, correct the code
    if (errorBit > 0) {
      correctedCode += correctCode(block, errorBit);
    } else {
      correctedCode += block;
    }
  }

  // Check if the input code and corrected code are the same
  if (inputString == correctedCode) {
    // Display a message indicating that the code is correct
    resultElement.innerHTML = "Code is correct.";
  } else {
    // Display a message indicating that the code is incorrect and showing the corrected code
    resultElement.innerHTML = "Code is incorrect. Corrected code is: " + correctedCode;
  }
}

// Calculates the parity bits for a block of code
function calculateParityBits(block) {
  var parityBits = "";

  // Calculate parity for each parity bit position
  for (var i = 1; i <= block.length; i *= 2) {
    var parity = 0;

    // Count the number of 1s in the block
    for (var j = i - 1; j < block.length; j += i * 2) {
      for (var k = j; k < j + i && k < block.length; k++) {
        if (block[k] == "1") {
          parity++;
        }
      }
    }

    // If the number of 1s is odd, set the parity bit to 1
    if (parity % 2 == 1) {
      parityBits += "1";
    } else {
      parityBits += "0";
    }
  }

  return parityBits;
}

// Compares the parity bits in the input string to the calculated parity bits
// Returns the index of the incorrect bit if there is an error, or 0 if there is no error
function checkParity(block, parityBits) {
  for (var i = 0; i < parityBits.length; i++) {
    var blockBit = parseInt(block[(1 << i) - 1], 10);
    var parityBit = parseInt(parityBits[i], 10);

    if (blockBit != parityBit) {
      return (1 << i);
    }
  }

  return 0;
}

// Corrects the code by flipping the incorrect bit
function correctCode(block, errorBit) {
  var correctedBlock = "";

  for (var i = 0; i < block.length; i++) {
    if (i == errorBit - 1) {
      correctedBlock += (block[i] == "1") ? "0" : "1";
    } else {
      correctedBlock += block[i];
    }
  }

  return correctedBlock;
}
