function dictionaryAtk(){
  const fileUrl = 'assets/txt/dictionary.txt';
  var userInput = document.getElementById("setBinput").value;
//Add files in dictionary to an array called lines
  fetch(fileUrl)
    .then(response => response.text())
    .then(text => {
      const blob = new Blob([text], { type: 'text/plain' });
      const reader = new FileReader();
      reader.onload = function() {
        const lines = this.result.split('\n');
        
        // Search for a match in the lines array
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].split("\r")[0]  === userInput && userInput.length !== 0) {
            document.getElementById("brute2result").innerHTML = "Match Found! <br> The password is: " + userInput;
            break;
          }
        }
      };
      reader.readAsText(blob);
    });
  }