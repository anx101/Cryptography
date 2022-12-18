function checkCode() {
    // Get the code from the input field
    var code = document.getElementById("hammingCode").value;
    
    // Calculate the parity of the code (i.e., the number of 1s in the code)
    var parity = code.split("1").length - 1;
    
    // Check if the parity is even or odd (depending on how the code was constructed)
    if (parity % 2 == 0) {
      // The code is correct, as the number of 1s is even
      document.getElementById("hammingResult").innerHTML = "The code is correct!";
    } else {
      // The code contains an error, as the number of 1s is odd
      // We can correct the error by flipping the value of the parity bit
      document.getElementById("hammingResult").innerHTML = "The code contains an error. Correcting the error...";
      code = code.substring(0, code.length - 1) + (code.charAt(code.length - 1) == "1" ? "0" : "1");
      document.getElementById("hammingResult").innerHTML += "<br>The corrected code is: " + code;
    }
  }